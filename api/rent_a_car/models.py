from django.db import models
from django.contrib.auth.models import User


class Car(models.Model):

    GEAR = (
        ("m", "Manuel"),
        ("a", "Automatic")
    )
    plate_number = models.CharField(max_length=10)
    brand = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    year = models.SmallIntegerField()
    gear = models.CharField(choices=GEAR, max_length=10)
    image = models.TextField()
    rent_per_day = models.DecimalField(
        max_digits=5, decimal_places=2, default=0)
    availability = models.BooleanField(default=True)
    motor = models.CharField(max_length=20)
    km = models.IntegerField()
    gps = models.BooleanField(default=False)
    anti_lock_brakes = models.BooleanField(default=False)
    remote_keyless = models.BooleanField(default=False)
    rear_set_screen = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.plate_number} - {self.brand}-{self.model}"


class Reservation(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE,
                            related_name="reservation_car")
    customer = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="reservation_customer")
    start_date = models.DateField()
    end_date = models.DateField()
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Reservation {self.id} - {self.car.plate_number} by {self.customer.username}"
