from rest_framework import serializers

from .models import Car, Reservation


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = "__all__"
        read_only_fields = ["id", "created_date", "updated_date"]

    def get_fields(self):
        fields = super().get_fields()
        request = self.context.get('request')

        # Excluding availability field for non-admin users
        if request and not request.user.is_staff:
            fields.pop('availability', None)

        return fields


class ReservationSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField()
    car = serializers.StringRelatedField(read_only=True)
    car_id = serializers.IntegerField()
    customer = serializers.StringRelatedField(read_only=True)
    customer_id = serializers.IntegerField()

    class Meta:
        model = Reservation
        fields = "__all__"
        read_only_fields = ["id", "created_date",
                            "updated_date", "total_price", "car", "customer"]

    def get_total_price(self, obj):
        reserved_days = (obj.end_date - obj.start_date).days+1
        return reserved_days * obj.car.rent_per_day
