"""
Тестовый скрипт для проверки API endpoint /api/cities/
"""
import os
import sys
import django
import requests
import json

# Настраиваем Django окружение
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kulcha.settings')
django.setup()

from cafes.models import City

def check_cities_database():
    """Проверяет наличие городов в базе данных"""
    print("\n=== Проверка базы данных городов ===")
    cities = City.objects.all()
    print(f"Всего городов в базе: {cities.count()}")
    
    if cities.count() == 0:
        print("Добавляем тестовые города...")
        City.objects.create(name="Москва")
        City.objects.create(name="Санкт-Петербург")
        City.objects.create(name="Казань")
        print(f"Добавлено 3 тестовых города")
    else:
        for city in cities:
            print(f"ID: {city.id}, Название: {city.name}")
    
    print("=== Проверка базы данных завершена ===\n")

def test_api_endpoints():
    """Тестирует доступность API endpoints"""
    print("=== Тестирование API endpoints ===")
    
    # Тестируем локальный URL
    endpoints = [
        "http://localhost:8000/api/cities/",
        "http://127.0.0.1:8000/api/cities/",
        "http://backend:8000/api/cities/",
    ]
    
    for endpoint in endpoints:
        try:
            print(f"\nТестирование endpoint: {endpoint}")
            response = requests.get(endpoint, timeout=5)
            print(f"Статус код: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                print(f"Получено городов: {len(data)}")
                print("Данные:", json.dumps(data, indent=2, ensure_ascii=False))
            else:
                print(f"Ошибка! Тело ответа: {response.text}")
        except Exception as e:
            print(f"Исключение при запросе к {endpoint}: {str(e)}")
    
    print("\n=== Тестирование API endpoints завершено ===")

if __name__ == "__main__":
    check_cities_database()
    test_api_endpoints() 