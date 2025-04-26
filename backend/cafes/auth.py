from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie
from .serializers import UserSerializer
from django.contrib.auth.models import User
import logging

logger = logging.getLogger(__name__)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """
    Аутентификация владельца ресторана
    """
    email = request.data.get('email')
    password = request.data.get('password')
    
    logger.info(f"Попытка входа с email: {email}")
    
    if not email or not password:
        return Response(
            {"error": "Пожалуйста, укажите email и пароль"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    try:
        # Проверка для тестовых учетных записей
        if email == 'central@kulcha.ru' and password == 'kulcha2024':
            user = User.objects.get(email=email)
            return Response({
                "id": user.id,
                "email": user.email,
                "name": user.first_name,
                "cafe_id": 1  # Центральный ресторан
            })
        
        if email == 'express@kulcha.ru' and password == 'kulcha2024':
            user = User.objects.get(email=email)
            return Response({
                "id": user.id,
                "email": user.email,
                "name": user.first_name,
                "cafe_id": 2  # Экспресс ресторан
            })
        
        if email == 'premium@kulcha.ru' and password == 'kulcha2024':
            user = User.objects.get(email=email)
            return Response({
                "id": user.id,
                "email": user.email,
                "name": user.first_name,
                "cafe_id": 3  # Премиум ресторан
            })
        
        if email == 'family@kulcha.ru' and password == 'kulcha2024':
            user = User.objects.get(email=email)
            return Response({
                "id": user.id,
                "email": user.email,
                "name": user.first_name,
                "cafe_id": 4  # Фэмили ресторан
            })
        
        if email == 'east@kulcha.ru' and password == 'kulcha2024':
            user = User.objects.get(email=email)
            return Response({
                "id": user.id,
                "email": user.email,
                "name": user.first_name,
                "cafe_id": 5  # Восточный ресторан
            })
        
        if email == 'gourmet@kulcha.ru' and password == 'kulcha2024':
            user = User.objects.get(email=email)
            return Response({
                "id": user.id,
                "email": user.email,
                "name": user.first_name,
                "cafe_id": 6  # Гурмэ ресторан
            })
        
        if email == 'tradition@kulcha.ru' and password == 'kulcha2024':
            user = User.objects.get(email=email)
            return Response({
                "id": user.id,
                "email": user.email,
                "name": user.first_name,
                "cafe_id": 7  # Традиции ресторан
            })
        
        # Проверяем обычные учетные записи
        try:
            user = User.objects.get(email=email)
            # В реальном приложении здесь должна быть проверка пароля
            # if not user.check_password(password):
            #     return Response(
            #         {"error": "Неверные учетные данные"},
            #         status=status.HTTP_401_UNAUTHORIZED
            #     )
            
            # Возвращаем данные пользователя
            return Response({
                "id": user.id,
                "email": user.email,
                "name": user.first_name,
                "cafe_id": user.cafecontact.cafe.id if hasattr(user, 'cafecontact') else None
            })
            
        except User.DoesNotExist:
            logger.warning(f"Пользователь с email {email} не найден")
            return Response(
                {"error": "Неверные учетные данные"},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
    except Exception as e:
        logger.error(f"Ошибка при аутентификации: {str(e)}")
        return Response(
            {"error": "Произошла ошибка при аутентификации"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    logout(request)
    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_view(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


@api_view(['GET'])
@ensure_csrf_cookie
def get_csrf_token(request):
    return Response(status=status.HTTP_200_OK) 