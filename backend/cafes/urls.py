from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CityViewSet, CafeViewSet, CafeContactViewSet,
    MenuItemViewSet, OrderViewSet, OrderItemViewSet,
    UserAddressViewSet
)

router = DefaultRouter()
router.register(r'cities', CityViewSet)
router.register(r'cafes', CafeViewSet)
router.register(r'cafe-contacts', CafeContactViewSet)
router.register(r'menu-items', MenuItemViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)
router.register(r'addresses', UserAddressViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
