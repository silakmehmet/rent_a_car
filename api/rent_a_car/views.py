from rest_framework.viewsets import ModelViewSet

from .models import Car, Reservation
from .serializers import CarSerializer, ReservationSerializer
from .permissions import IsAdminOrReadOnly


class CarMVS(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [IsAdminOrReadOnly]


class ReservationMVS(ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def perform_create(self, serializer):
        # Automatically setting the customer field for non-admin authenticated users
        if not self.request.user.is_staff:
            serializer.save(customer=self.request.user)
        else:
            # Allowing admin users to assign any customer
            serializer.save()
