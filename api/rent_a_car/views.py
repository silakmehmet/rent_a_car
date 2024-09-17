from rest_framework.viewsets import ModelViewSet

from .models import Car, Reservation
from .serializers import CarSerializer, ReservationSerializer
from .permissions import IsAdminOrReadOnly, IsOwnerOrAdmin


class CarMVS(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [IsAdminOrReadOnly]


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
        # Automatically setting the customer field for non-admin authenticated users
        if not self.request.user.is_staff:
            serializer.save(customer=self.request.user)
        else:
            # Allowing admin users to assign any customer
            serializer.save()
