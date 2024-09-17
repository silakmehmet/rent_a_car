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
