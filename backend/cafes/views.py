from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.db.models import Sum, Count
from .models import City, Cafe, CafeContact, MenuItem, Order, OrderItem, UserAddress
from .serializers import (
    CitySerializer, CafeSerializer, CafeContactSerializer,
    MenuItemSerializer, OrderSerializer, OrderItemSerializer,
    UserAddressSerializer
)


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class CafeViewSet(viewsets.ModelViewSet):
    queryset = Cafe.objects.all()
    serializer_class = CafeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    def get_queryset(self):
        queryset = self.queryset
        city_id = self.request.query_params.get('city', None)
        if city_id is not None:
            queryset = queryset.filter(city=city_id)
        return queryset

    @action(detail=True, methods=['get'])
    def statistics(self, request, pk=None):
        cafe = self.get_object()
        statistics = {
            'total_orders': cafe.orders.count(),
            'total_revenue': cafe.orders.aggregate(total=Sum('total_price'))['total'] or 0,
            'average_order_value': cafe.orders.aggregate(avg=Sum('total_price')/Count('id'))['avg'] or 0,
            'popular_items': MenuItem.objects.filter(
                order_items__order__cafe=cafe
            ).annotate(
                total_ordered=Count('order_items')
            ).order_by('-total_ordered')[:5]
        }
        return Response(statistics)


class CafeContactViewSet(viewsets.ModelViewSet):
    queryset = CafeContact.objects.all()
    serializer_class = CafeContactSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class UserAddressViewSet(viewsets.ModelViewSet):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['post'])
    def update_status(self, request, pk=None):
        order = self.get_object()
        new_status = request.data.get('status')
        
        if new_status not in dict(Order.ORDER_STATUS):
            return Response(
                {'error': 'Invalid status'},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        order.status = new_status
        order.save()
        return Response(OrderSerializer(order).data)


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = [IsAuthenticated]
