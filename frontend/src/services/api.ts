import { MenuItem, Order, UserAddress, RestaurantAdminData } from '../data/adminDatabase';

// Базовый URL API
const API_BASE_URL = 'http://localhost:8000/api';

// Типы для кэширования
type CacheKey = string;
type CacheValue = any;
type CacheTimeStamp = number;

// Типы данных, соответствующие бэкенду
export interface City {
  id: number;
  name: string;
}

export interface Restaurant {
  id: number;
  name: string;
  city: number;
  address: string;
  description: string;
  cover_image: string;
  rating: number;
}

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

// Функция обработки ошибок API
const handleApiError = (error: any, message: string) => {
  console.error(`${message}:`, error);
  throw error;
};

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
      const response = await fetch(`${API_BASE_URL}/cities/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      cacheService.set(cacheKey, data);
      return data;
    } catch (error) {
      return handleApiError(error, 'Error fetching cities');
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
      const response = await fetch(`${API_BASE_URL}/cafes/?city=${cityId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      cacheService.set(cacheKey, data);
      return data;
    } catch (error) {
      return handleApiError(error, `Error fetching restaurants for city ${cityId}`);
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
      const url = restaurantId 
        ? `${API_BASE_URL}/menu-items/?cafe=${restaurantId}`
        : `${API_BASE_URL}/menu-items/`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      // Трансформируем данные в формат, ожидаемый фронтендом
      const transformedData = data.map((item: any) => ({
        id: item.id,
        restaurantId: item.cafe,
        name: item.name,
        description: item.description || '',
        price: item.price,
        category: item.category,
        imageUrl: item.image || item.image_url || '',
        available: item.available
      }));
      
      cacheService.set(cacheKey, transformedData);
      return transformedData;
    } catch (error) {
      return handleApiError(error, 'Error fetching menu items');
    }
  },

  // Создание заказа
  async createOrder(order: Omit<Order, 'id' | 'date' | 'status'>) {
    try {
      // Преобразование данных в формат, ожидаемый API
      const orderData = {
        cafe: order.restaurantId,
        order_type: order.deliveryMethod === 'delivery' ? 'delivery' : 'in_place',
        delivery_address: order.userAddress ? order.userAddress.id : null,
        order_items: order.items.map(item => ({
          menu_item: item.id,
          quantity: item.quantity
        }))
      };

      const response = await fetch(`${API_BASE_URL}/orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Преобразуем ответ в формат, ожидаемый фронтендом
      const newOrder: Order = {
        id: data.id,
        items: order.items,
        totalAmount: data.total_price,
        deliveryMethod: order.deliveryMethod,
        date: data.created_at,
        status: data.status,
        restaurantId: order.restaurantId,
        userAddress: order.userAddress
      };
      
      // Инвалидируем кэш заказов
      cacheService.invalidate('orders');
      
      return newOrder;
    } catch (error) {
      return handleApiError(error, 'Error creating order');
    }
  },

  // Получение заказов пользователя
  async getUserOrders() {
    const cacheKey = 'user_orders';
    const cachedData = cacheService.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/orders/`, {
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Преобразуем данные в формат, ожидаемый фронтендом
      const transformedOrders = await Promise.all(data.map(async (order: any) => {
        // Получаем детали заказа (элементы заказа)
        const orderItemsResponse = await fetch(`${API_BASE_URL}/order-items/?order=${order.id}`);
        const orderItems = await orderItemsResponse.json();
        
        // Получаем детали каждого элемента меню
        const items = await Promise.all(orderItems.map(async (item: any) => {
          const menuItemResponse = await fetch(`${API_BASE_URL}/menu-items/${item.menu_item}/`);
          const menuItem = await menuItemResponse.json();
          
          return {
            ...menuItem,
            id: menuItem.id,
            restaurantId: menuItem.cafe,
            name: menuItem.name,
            description: menuItem.description || '',
            price: menuItem.price,
            category: menuItem.category,
            imageUrl: menuItem.image || menuItem.image_url || '',
            quantity: item.quantity
          };
        }));
        
        return {
          id: order.id,
          items,
          totalAmount: order.total_price,
          deliveryMethod: order.order_type === 'delivery' ? 'delivery' : 'pickup',
          date: order.created_at,
          status: order.status,
          restaurantId: order.cafe,
          userAddress: order.delivery_address
        };
      }));
      
      cacheService.set(cacheKey, transformedOrders);
      return transformedOrders;
    } catch (error) {
      return handleApiError(error, 'Error fetching user orders');
    }
  },

  // Обновление статуса заказа
  async updateOrderStatus(orderId: number, status: Order['status']) {
    try {
      // Преобразуем статус в формат бэкенда
      const backendStatus = status;
      
      const response = await fetch(`${API_BASE_URL}/orders/${orderId}/update_status/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: backendStatus }),
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Инвалидируем кэш заказов
      cacheService.invalidate('user_orders');
      cacheService.invalidate(`order_${orderId}`);
      
      return { orderId, status: data.status };
    } catch (error) {
      return handleApiError(error, `Error updating order ${orderId} status`);
    }
  },

  // Добавление адреса пользователя
  async addUserAddress(address: Omit<UserAddress, 'id'>) {
    try {
      const response = await fetch(`${API_BASE_URL}/addresses/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Инвалидируем кэш адресов
      cacheService.invalidate('user_addresses');
      
      return data;
    } catch (error) {
      return handleApiError(error, 'Error adding user address');
    }
  },

  // Получение адресов пользователя
  async getUserAddresses() {
    const cacheKey = 'user_addresses';
    const cachedData = cacheService.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/addresses/`, {
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      cacheService.set(cacheKey, data);
      return data;
    } catch (error) {
      return handleApiError(error, 'Error fetching user addresses');
    }
  }
};

// Экспортируем сервис кэширования для возможности прямого использования
export { cacheService }; 