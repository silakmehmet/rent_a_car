from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import CarMVS, ReservationMVS


router = DefaultRouter()
router.register("cars", CarMVS)
router.register("reservations", ReservationMVS)

urlpatterns = [
    path("", include(router.urls)),
]
