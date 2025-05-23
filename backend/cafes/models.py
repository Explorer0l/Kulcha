from django.db import models
from django.contrib.auth.models import User


class TimestampMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Cafe(TimestampMixin):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    menu_link = models.URLField(max_length=300, blank=True, null=True)

    def __str__(self):
        return self.name


class CafeContact(TimestampMixin):
    cafe = models.OneToOneField(Cafe, on_delete=models.CASCADE, related_name='contact')
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.cafe.name} - {self.user.username}"


class MenuItem(TimestampMixin):
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE, related_name='menu_items')
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f"{self.name} - {self.cafe.name}"


class Order(TimestampMixin):
    ORDER_TYPES = [
        ('in_place', 'В ресторане'),
        ('delivery', 'Доставка')
    ]

    ORDER_STATUS = [
        ('new', 'Новый'),
        ('confirmed', 'Подтверждён'),
        ('rejected', 'Отклонён'),
        ('preparing', 'Готовится'),
        ('ready', 'Готов'),
        ('delivered', 'Доставлено')
    ]

    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE, related_name='orders')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    order_type = models.CharField(max_length=20, choices=ORDER_TYPES)
    status = models.CharField(max_length=20, choices=ORDER_STATUS, default='new')
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def calculate_total_price(self, save=True):
        """ Пересчитывает стоимость заказа """
        total = sum(item.menu_item.price * item.quantity for item in self.order_items.all())
        self.total_price = total
        if save:
            self.save()

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.calculate_total_price(save=False)

    def __str__(self):
        return f"Order #{self.id} - {self.cafe.name} - {self.user.username}"


class OrderItem(TimestampMixin):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.menu_item.name} ({self.quantity})"
