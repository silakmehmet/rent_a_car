from rest_framework import serializers

from .models import Car, Reservation


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = "__all__"
        read_only_fields = ["id", "created_date", "updated_date"]


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = "__all__"
        read_only_fields = ["id", "created_date", "updated_date"]
