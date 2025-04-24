from django.core.management.base import BaseCommand
from django.core.management import call_command
from cafes.models import City, Cafe, MenuItem

class Command(BaseCommand):
    help = 'Импортирует обновленные данные для городов, ресторанов и меню'

    def handle(self, *args, **options):
        # Очищаем существующие данные
        self.stdout.write(self.style.WARNING('Удаление существующих данных...'))
        
        # Удаляем в правильном порядке (из-за внешних ключей)
        MenuItem.objects.all().delete()
        Cafe.objects.all().delete()
        City.objects.all().delete()
        
        self.stdout.write(self.style.SUCCESS('Существующие данные удалены.'))
        
        # Загружаем обновленные данные
        self.stdout.write(self.style.WARNING('Загрузка обновленных данных...'))
        call_command('loaddata', 'updated_data.json')
        
        # Выводим информацию о загруженных данных
        city_count = City.objects.count()
        cafe_count = Cafe.objects.count()
        menu_item_count = MenuItem.objects.count()
        
        self.stdout.write(self.style.SUCCESS(f'Загружено {city_count} городов, {cafe_count} ресторанов и {menu_item_count} пунктов меню.'))
        
        # Проверяем распределение ресторанов по городам
        for city in City.objects.all():
            cafe_count = Cafe.objects.filter(city=city).count()
            self.stdout.write(f'В городе {city.name}: {cafe_count} ресторанов')
            
            for cafe in Cafe.objects.filter(city=city):
                menu_count = MenuItem.objects.filter(cafe=cafe).count()
                self.stdout.write(f'  - {cafe.name}: {menu_count} пунктов меню') 