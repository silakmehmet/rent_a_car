from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import ValidationError

from .models import Car, Reservation
from .serializers import CarSerializer, ReservationSerializer
from .permissions import IsAdminOrReadOnly, IsOwnerOrAdmin
from .filters import CarFilter


class CarMVS(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_class = CarFilter

    def get_queryset(self):
        queryset = super().get_queryset()
        request = self.request
        # Only return available cars for non-admin users
        if not request.user.is_staff:
            queryset = queryset.filter(availability=True)
        # Return all list for admins
        return queryset

    def list(self, request, *args, **kwargs):
        start_date = request.query_params.get("start_date")
        end_date = request.query_params.get("end_date")
        # Checking if the dates selected for non-admin users
        if not request.user.is_staff and (not start_date or not end_date):
            return Response(
                {"detail": "You need to select the dates first!"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Filtering reserved cars for the date range
        queryset = self.filter_queryset(self.get_queryset())

        if start_date and end_date:
            queryset = queryset.exclude(
                reservation_car__start_date__lte=end_date,
                reservation_car__end_date__gte=start_date,

            )
            # If no cars available for the selected range return a warning
            if not queryset.exists():
                return Response(
                    {"detail": "There are no available cars for the selected range."},
                    status=status.HTTP_404_NOT_FOUND
                )
        # Returning response for admin and non-admin users
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ReservationMVS(ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsOwnerOrAdmin]

    def get_queryset(self):
        user = self.request.user

        if user.is_staff:
            return Reservation.objects.all()

        return Reservation.objects.filter(customer=user)

    def perform_create(self, serializer):
        user = self.request.user
        # Automatically setting the customer field for non-admin authenticated users
        if not user.is_staff:
            # Checking for existing reservations for the current user
            start_date = self.request.data.get("start_date")
            end_date = self.request.data.get("end_date")

            if start_date and end_date:
                existing_reservations = Reservation.objects.filter(
                    customer=user,
                    start_date__lt=end_date,
                    end_date__gt=start_date
                )

                if existing_reservations.exists():
                    raise ValidationError(
                        {"detail": "You cannot make more than one reservation for the same period!"})

            serializer.save(customer=user)

        else:
            # Allowing admins to assign any customer
            serializer.save()
