import { MenuItem, Order, UserAddress } from '../data/adminDatabase';

// Базовый URL API
const API_BASE_URL = 'http://localhost:8000/api';

// Типы для кэширования
type CacheKey = string;
type CacheValue = any;
type CacheTimeStamp = number;

// Простая система кэширования
class CacheService {
  private cache: Map<CacheKey, { value: CacheValue; timestamp: CacheTimeStamp }> = new Map();
  private readonly defaultExpiration = 5 * 60 * 1000; // 5 минут

  set(key: CacheKey, value: CacheValue, expiration: number = this.defaultExpiration): void {
    this.cache.set(key, {
      value,
      timestamp: Date.now() + expiration,
    });
  }

  get(key: CacheKey): CacheValue | null {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }

    if (Date.now() > cached.timestamp) {
      this.cache.delete(key);
      return null;
    }

    return cached.value;
  }

  invalidate(key: CacheKey): void {
    this.cache.delete(key);
  }

  invalidateAll(): void {
    this.cache.clear();
  }
}

const cacheService = new CacheService();

// API сервис с поддержкой кэширования
export const api = {
  // Получение списка городов
  async getCities() {
    const cacheKey = 'cities';
    const cachedData = cacheService.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }
    
    try {
      // В реальном API будет запрос к серверу
      // const response = await fetch(`${API_BASE_URL}/cities/`);
      // const data = await response.json();
      
      // Временно используем mock данные для сохранения функциональности
      const data = (await import('../data/mockData')).mockCities;
      
      cacheService.set(cacheKey, data);
      return data;
    } catch (error) {
      console.error('Error fetching cities:', error);
      throw error;
    }
  },

  // Получение ресторанов по городу
  async getRestaurantsByCity(cityId: number) {
    const cacheKey = `restaurants_city_${cityId}`;
    const cachedData = cacheService.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }
    
    try {
      // В реальном API будет запрос к серверу
      // const response = await fetch(`${API_BASE_URL}/restaurants/?city=${cityId}`);
      // const data = await response.json();
      
      // Временно используем mock данные для сохранения функциональности
      const allRestaurants = (await import('../data/mockData')).mockRestaurants;
      const data = allRestaurants.filter(restaurant => restaurant.cityId === cityId);
      
      cacheService.set(cacheKey, data);
      return data;
    } catch (error) {
      console.error(`Error fetching restaurants for city ${cityId}:`, error);
      throw error;
    }
  },

  // Получение меню ресторана
  async getMenuItems(restaurantId?: number) {
    const cacheKey = `menu_items_${restaurantId || 'all'}`;
    const cachedData = cacheService.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }
    
    try {
      // В реальном API будет запрос к серверу
      // const url = restaurantId 
      //   ? `${API_BASE_URL}/menu-items/?restaurant=${restaurantId}`
      //   : `${API_BASE_URL}/menu-items/`;
      // const response = await fetch(url);
      // const data = await response.json();
      
      // Временно используем mock данные для сохранения функциональности
      const allMenuItems = (await import('../data/mockData')).mockFoodItems;
      
      cacheService.set(cacheKey, allMenuItems);
      return allMenuItems;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  },

  // Создание заказа
  async createOrder(order: Omit<Order, 'id' | 'date' | 'status'>) {
    try {
      // В реальном API будет запрос к серверу
      // const response = await fetch(`${API_BASE_URL}/orders/`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(order),
      // });
      // const data = await response.json();
      
      // Симулируем создание заказа
      const newOrder: Order = {
        ...order,
        id: Date.now(),
        date: new Date().toISOString(),
        status: 'pending',
      };
      
      // Инвалидируем кэш заказов
      cacheService.invalidate('orders');
      
      return newOrder;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },

  // Обновление статуса заказа
  async updateOrderStatus(orderId: number, status: Order['status']) {
    try {
      // В реальном API будет запрос к серверу
      // const response = await fetch(`${API_BASE_URL}/orders/${orderId}/`, {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ status }),
      // });
      // const data = await response.json();
      
      // Инвалидируем кэш заказов
      cacheService.invalidate('orders');
      cacheService.invalidate(`order_${orderId}`);
      
      return { orderId, status };
    } catch (error) {
      console.error(`Error updating order ${orderId} status:`, error);
      throw error;
    }
  },
};

// Экспортируем сервис кэширования для возможности прямого использования
export { cacheService }; 