from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminOrReadOnly(BasePermission):

    def has_permission(self, request, view):
        # Allowing safe methods for all users
        if request.method in SAFE_METHODS:
            return True
        # Giving full access for only admin users
        return bool(request.user and request.user.is_staff)


class IsOwnerOrAdmin(BasePermission):
    # Allowing only authenticated users
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated)

    def has_object_permission(self, request, view, obj):
        # Allowing admin for CRUD operations for all the reservations
        if request.user and request.user.is_staff:
            return True
        # Allowing users for CRUD operations for only their own reservations
        return obj.customer == request.user
