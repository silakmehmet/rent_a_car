from django_filters import rest_framework as filters

from .models import Car


class CarFilter(filters.FilterSet):
    start_date = filters.DateFilter(method="filter_by_availability")
    end_date = filters.DateFilter(method="filter_by_availability")

    class Meta:
        model = Car
        fields = ["start_date", "end_date"]

    def filter_by_availability(self, queryset, name, value):
        start_date = self.data.get("start_date")
        end_date = self.data.get("end_date")

        if start_date and end_date:
            # Excluding cars that have reservations in the selected period
            queryset = queryset.exclude(
                reservation_car__start_date__lte=end_date,
                reservation_car__end_date__gte=start_date
            )
        # The car also needs to available
        queryset = queryset.filter(availability=True)
        return queryset
