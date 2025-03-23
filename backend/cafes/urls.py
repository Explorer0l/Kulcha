from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CafeViewSet, CafeContactViewSet, MenuItemViewSet, OrderViewSet, OrderItemViewSet

router = DefaultRouter()
router.register(r'cafes', CafeViewSet)
router.register(r'contacts', CafeContactViewSet)
router.register(r'menu-items', MenuItemViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
