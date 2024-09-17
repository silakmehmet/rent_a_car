from rest_framework.viewsets import ModelViewSet

from .models import Car, Reservation
from .serializers import CarSerializer, ReservationSerializer


class CarMVS(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


class ReservationMVS(ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
