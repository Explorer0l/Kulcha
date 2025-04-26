from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from django.db.models import Sum, Count
from .models import City, Cafe, CafeContact, MenuItem, Order, OrderItem, UserAddress
from .serializers import (
    CitySerializer, CafeSerializer, CafeContactSerializer,
    MenuItemSerializer, OrderSerializer, OrderItemSerializer,
    UserAddressSerializer
)
import logging

# Настраиваем логирование
logger = logging.getLogger(__name__)

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [AllowAny]  # Изменено с IsAuthenticatedOrReadOnly для упрощения доступа


class CafeViewSet(viewsets.ModelViewSet):
    queryset = Cafe.objects.all()
    serializer_class = CafeSerializer
    permission_classes = [AllowAny]  # Изменено с IsAuthenticatedOrReadOnly для упрощения доступа
    
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
    permission_classes = [AllowAny]  # Изменено с IsAuthenticatedOrReadOnly для упрощения доступа


class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [AllowAny]  # Изменено с IsAuthenticatedOrReadOnly для упрощения доступа
    
    def get_queryset(self):
        queryset = self.queryset
        cafe_id = self.request.query_params.get('cafe', None)
        if cafe_id is not None:
            queryset = queryset.filter(cafe=cafe_id)
        return queryset
    
    def create(self, request, *args, **kwargs):
        logger.info(f"Получен POST запрос на создание блюда: {request.data}")
        
        # Проверяем наличие всех необходимых полей
        required_fields = ['cafe', 'name', 'price', 'category']
        for field in required_fields:
            if field not in request.data:
                logger.error(f"Отсутствует обязательное поле: {field}")
                return Response(
                    {"error": f"Отсутствует обязательное поле: {field}"},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        # Добавляем логирование для отладки
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            logger.info("Данные валидны, создаем блюдо")
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            logger.error(f"Ошибка валидации: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, *args, **kwargs):
        logger.info(f"Получен PUT запрос на обновление блюда {kwargs.get('pk')}: {request.data}")
        
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        
        if serializer.is_valid():
            logger.info(f"Данные валидны, обновляем блюдо {instance.id}")
            self.perform_update(serializer)
            return Response(serializer.data)
        else:
            logger.error(f"Ошибка валидации при обновлении: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]  # Изменено с IsAuthenticated для упрощения доступа
    
    def get_queryset(self):
        queryset = self.queryset
        cafe_id = self.request.query_params.get('cafe', None)
        if cafe_id is not None:
            queryset = queryset.filter(cafe=cafe_id)
        return queryset
    
    def create(self, request, *args, **kwargs):
        logger.info(f"Получен POST запрос на создание заказа: {request.data}")
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            logger.error(f"Ошибка валидации заказа: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = [AllowAny]  # Изменено с IsAuthenticated для упрощения доступа
    
    def get_queryset(self):
        queryset = self.queryset
        order_id = self.request.query_params.get('order', None)
        if order_id is not None:
            queryset = queryset.filter(order=order_id)
        return queryset


class UserAddressViewSet(viewsets.ModelViewSet):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer
    permission_classes = [AllowAny]  # Изменено с IsAuthenticated для упрощения доступа
