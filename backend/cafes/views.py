from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from django.db.models import Sum, Count
from django.db import connection
from .models import City, Cafe, CafeContact, MenuItem, Order, OrderItem, UserAddress
from .serializers import (
    CitySerializer, CafeSerializer, CafeContactSerializer,
    MenuItemSerializer, OrderSerializer, OrderItemSerializer,
    UserAddressSerializer
)
import logging
import json
import time
import socket

# Настраиваем логирование
logger = logging.getLogger(__name__)

@api_view(['GET'])
@permission_classes([AllowAny])
def api_health_check(request):
    """
    Проверка здоровья API сервера.
    Возвращает базовую информацию о работоспособности API и связке с БД.
    """
    start_time = time.time()
    
    # Проверяем соединение с БД
    db_ok = False
    db_error = None
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            db_ok = True
    except Exception as e:
        db_error = str(e)
    
    # Проверяем доступность модели City
    cities_count = -1
    cities_ok = False
    cities_error = None
    
    try:
        cities_count = City.objects.count()
        cities_ok = True
    except Exception as e:
        cities_error = str(e)
    
    # Подготавливаем ответ
    hostname = socket.gethostname()
    
    data = {
        "status": "ok" if db_ok and cities_ok else "error",
        "timestamp": time.time(),
        "uptime": time.time() - start_time,
        "hostname": hostname,
        "ip": socket.gethostbyname(hostname),
        "client_ip": request.META.get('REMOTE_ADDR', 'unknown'),
        "database": {
            "status": "connected" if db_ok else "error",
            "error": db_error
        },
        "cities_api": {
            "status": "ok" if cities_ok else "error",
            "count": cities_count,
            "error": cities_error
        },
        "request": {
            "path": request.path,
            "method": request.method,
            "headers": dict(request.headers),
        }
    }
    
    logger.info(f"Health check запрос от {request.META.get('REMOTE_ADDR')}: {data['status']}")
    
    return Response(data)

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [AllowAny]  # Изменено с IsAuthenticatedOrReadOnly для упрощения доступа
    
    def list(self, request, *args, **kwargs):
        logger.info(f"GET запрос на получение списка городов от {request.META.get('REMOTE_ADDR')}")
        logger.info(f"Параметры запроса: {request.GET}")
        logger.info(f"Заголовки запроса: {request.headers}")
        
        # Проверяем наличие данных
        cities_count = self.get_queryset().count()
        logger.info(f"В базе данных {cities_count} городов")
        
        # Если городов нет, создаем тестовый город для отладки
        if cities_count == 0:
            logger.warning("Городов в базе нет! Создаем тестовый город для отладки.")
            try:
                City.objects.create(name="Тестовый город")
                logger.info("Тестовый город успешно создан")
            except Exception as e:
                logger.error(f"Ошибка при создании тестового города: {str(e)}")
        
        try:
            response = super().list(request, *args, **kwargs)
            logger.info(f"Возвращаем {len(response.data)} городов")
            return response
        except Exception as e:
            logger.error(f"Ошибка при получении списка городов: {str(e)}")
            return Response(
                {"error": "Ошибка при получении списка городов", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class CafeViewSet(viewsets.ModelViewSet):
    queryset = Cafe.objects.all()
    serializer_class = CafeSerializer
    permission_classes = [AllowAny]  # Изменено с IsAuthenticatedOrReadOnly для упрощения доступа
    
    def get_queryset(self):
        queryset = self.queryset
        city_id = self.request.query_params.get('city', None)
        logger.info(f"GET запрос на получение ресторанов. Фильтрация по городу: {city_id}")
        
        if city_id is not None:
            try:
                city_id = int(city_id)
                queryset = queryset.filter(city=city_id)
                logger.info(f"Фильтруем кафе по городу ID={city_id}, найдено: {queryset.count()}")
            except (ValueError, TypeError):
                logger.error(f"Некорректный ID города: {city_id}")
                return Cafe.objects.none()
        return queryset
    
    def list(self, request, *args, **kwargs):
        logger.info(f"Получен запрос на список кафе: {request.META.get('REMOTE_ADDR')}, параметры: {request.GET}")
        response = super().list(request, *args, **kwargs)
        logger.info(f"Возвращаем {len(response.data)} кафе")
        return response

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
        if cafe_id is not None and cafe_id != 'undefined':
            try:
                cafe_id = int(cafe_id)
                queryset = queryset.filter(cafe=cafe_id)
            except (ValueError, TypeError):
                return Order.objects.none()
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
