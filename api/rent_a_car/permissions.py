from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminOrReadOnly(BasePermission):

    def has_permission(self, request, view):
        # Allowing safe methods for all users
        if request.method in SAFE_METHODS:
            return True
        # Giving full access for only admin users
        return bool(request.user and request.user.is_staff)
