from django.contrib import admin
from .models import Cafe, CafeContact, MenuItem, Order, OrderItem

@admin.register(Cafe)
class CafeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'address', 'created_at')
    search_fields = ('name', 'address')

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'cafe', 'price')
    list_filter = ('cafe',)
    search_fields = ('name',)

@admin.register(CafeContact)
class CafeContactAdmin(admin.ModelAdmin):
    list_display = ('cafe', 'user')
    search_fields = ('cafe__name', 'user__username')

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'cafe', 'user', 'order_type', 'status', 'total_price', 'created_at')
    list_filter = ('status', 'order_type', 'cafe')
    search_fields = ('user__username', 'cafe__name')
    inlines = [OrderItemInline]
