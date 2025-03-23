from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Cafe, CafeContact, MenuItem, Order, OrderItem
from .serializers import (
    CafeSerializer, CafeContactSerializer,
    MenuItemSerializer, OrderSerializer, OrderItemSerializer
)


class CafeViewSet(viewsets.ModelViewSet):
    queryset = Cafe.objects.all()
    serializer_class = CafeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class CafeContactViewSet(viewsets.ModelViewSet):
    queryset = CafeContact.objects.all()
    serializer_class = CafeContactSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
