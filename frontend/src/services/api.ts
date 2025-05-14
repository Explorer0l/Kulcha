import { Order, UserAddress } from '../data/adminDatabase';

// Расширяем интерфейс Window для TypeScript
declare global {
  interface Window {
    API_CONFIG?: {
      API_BASE_URL: string;
    };
  }
}

// Базовый URL API - используем динамический URL из apiConfig
const API_BASE_URL = window.API_CONFIG?.API_BASE_URL || '/api';

console.log('API service using URL:', API_BASE_URL);

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
  
  // Добавляем больше информации о запросе при ошибке
  if (error.response) {
    console.error('Error status:', error.response.status);
    console.error('Error data:', error.response.data);
  }
  
  throw error;
};

// Вспомогательная функция для выполнения запросов с правильными заголовками
const fetchWithHeaders = async (url: string, options: RequestInit = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  
  let finalUrl = '';
  
  // Проверяем, является ли URL абсолютным
  if (url.startsWith('http://') || url.startsWith('https://')) {
    finalUrl = url;
  } else {
    // Относительный путь - нужно добавить базовый URL
    const apiBase = API_BASE_URL.endsWith('/') ? API_BASE_URL : `${API_BASE_URL}/`;
    
    // Удаляем начальный слеш и 'api/' префикс из url если они есть
    let cleanUrl = url;
    if (cleanUrl.startsWith('/')) {
      cleanUrl = cleanUrl.substring(1);
    }
    if (cleanUrl.startsWith('api/')) {
      cleanUrl = cleanUrl.substring(4);
    }
    
    // Формируем финальный URL
    if (apiBase.startsWith('/')) {
      // Относительный базовый URL - добавляем origin
      finalUrl = `${window.location.origin}${apiBase}${cleanUrl}`;
    } else {
      // Абсолютный базовый URL
      finalUrl = `${apiBase}${cleanUrl}`;
    }
  }
  
  // Проверка на дублированный путь /api/api/ в URL
  finalUrl = finalUrl.replace(/\/api\/api\//g, '/api/');
  
  // Дополнительная проверка наличия дублированных URL
  const urlPattern = /(https?:\/\/[^\/]+)(\/api\/)(https?:\/\/[^\/]+\/api\/)/;
  if (urlPattern.test(finalUrl)) {
    // Если обнаружено дублирование URL, исправляем его
    finalUrl = finalUrl.replace(urlPattern, '$1$2');
  }
  
  // Отладочное логирование
  console.log('API Request URL:', {
    originalUrl: url,
    API_BASE_URL: API_BASE_URL,
    finalUrl: finalUrl
  });
  
  const mergedOptions = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    credentials: 'include' as RequestCredentials,
    mode: 'cors' as RequestMode,
  };
  
  try {
    console.log(`Fetch request to: ${finalUrl}`, mergedOptions);
    const response = await fetch(finalUrl, mergedOptions);
    
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      console.error('Response:', response);
      
      try {
        const errorData = await response.json();
        console.error('Error data:', errorData);
      } catch (e) {
        console.error('Could not parse error response');
      }
      
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response;
  } catch (error: any) {
    console.error(`Fetch error for ${finalUrl}:`, error);
    
    // При ошибке 404 и API_BASE_URL является относительным путем, попробуем использовать абсолютный путь
    if (error.message.includes('404') && API_BASE_URL.startsWith('/')) {
      const fallbackUrl = `${window.location.origin}/api/${url.replace(/^\/+/, '')}`;
      console.log(`Trying fallback URL with full path: ${fallbackUrl}`);
      return fetch(fallbackUrl, mergedOptions);
    }
    
    throw error;
  }
};

// API сервис с поддержкой кэширования
export const api = {
  // Проверка здоровья API
  async checkApiHealth() {
    try {
      console.log('Checking API health...');
      
      // Используем чистый эндпоинт
      const response = await fetchWithHeaders('health/');
      const data = await response.json();
      console.log('API health check result:', data);
      return data;
    } catch (error: any) {
      console.error('API health check failed:', error);
      
      // При ошибке попробуем альтернативные URL
      try {
        console.log('Trying alternative health check URL...');
        
        // Используем абсолютный URL
        const alternativeUrl = `${window.location.origin}/api/health/`;
        const response = await fetch(alternativeUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('Alternative API health check successful:', data);
          
          // Обновляем API_BASE_URL для дальнейших запросов
          if (window.API_CONFIG) {
            console.log('Updating API_CONFIG to use relative URL');
            window.API_CONFIG.API_BASE_URL = '/api';
          }
          
          return {
            ...data,
            alternative_url_used: true
          };
        }
      } catch (alternativeError) {
        console.error('Alternative health check also failed:', alternativeError);
      }
      
      return {
        status: 'error',
        error: error.message,
        timestamp: Date.now()
      };
    }
  },

  // Получение списка городов
  async getCities() {
    const cacheKey = 'cities_list';
    const cachedData = cacheService.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }
    
    try {
      // Проверяем здоровье API перед выполнением запроса
      const healthCheck = await this.checkApiHealth();
      if (healthCheck.status !== 'ok') {
        console.warn('API health check failed, but still trying to get cities');
      }
      
      // Используем только чистый endpoint без API_BASE_URL
      const response = await fetchWithHeaders('cities/');
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
      // Используем чистый endpoint
      const response = await fetchWithHeaders(`cafes/?city=${cityId}`);
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
        ? `menu-items/?cafe=${restaurantId}` 
        : 'menu-items/';
      
      // Используем чистый endpoint
      const response = await fetchWithHeaders(url);
      const data = await response.json();
      
      cacheService.set(cacheKey, data);
      return data;
    } catch (error) {
      return handleApiError(error, `Error fetching menu items for restaurant ${restaurantId || 'all'}`);
    }
  },

  // Получение категорий
  async getCategories() {
    const cacheKey = 'categories_list';
    const cachedData = cacheService.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }
    
    try {
      // Используем чистый endpoint
      const response = await fetchWithHeaders('categories/');
      const data = await response.json();
      
      cacheService.set(cacheKey, data);
      return data;
    } catch (error) {
      return handleApiError(error, 'Error fetching categories');
    }
  },

  // Размещение заказа
  async placeOrder(orderData: any) {
    try {
      // Используем чистый endpoint
      const response = await fetchWithHeaders('orders/', {
        method: 'POST',
        body: JSON.stringify(orderData),
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      return handleApiError(error, 'Error placing order');
    }
  },

  // Получение заказа по ID
  async getOrderById(orderId: string) {
    try {
      // Используем чистый endpoint
      const response = await fetchWithHeaders(`orders/${orderId}/`);
      const data = await response.json();
      return data;
    } catch (error) {
      return handleApiError(error, `Error fetching order ${orderId}`);
    }
  },
  
  // Получение настроек приложения
  async getAppSettings() {
    const cacheKey = 'app_settings';
    const cachedData = cacheService.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }
    
    try {
      // Используем чистый endpoint
      const response = await fetchWithHeaders('settings/');
      const data = await response.json();
      
      cacheService.set(cacheKey, data);
      return data;
    } catch (error) {
      return handleApiError(error, 'Error fetching app settings');
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

      const response = await fetchWithHeaders(`orders/`, {
        method: 'POST',
        body: JSON.stringify(orderData)
      });
      
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
      cacheService.invalidate('user_orders');
      
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
      const response = await fetchWithHeaders(`orders/`);
      const data = await response.json();
      
      // Преобразуем данные в формат, ожидаемый фронтендом
      const transformedOrders = await Promise.all(data.map(async (order: any) => {
        // Получаем детали заказа (элементы заказа)
        const orderItemsResponse = await fetchWithHeaders(`order-items/?order=${order.id}`);
        const orderItems = await orderItemsResponse.json();
        
        // Получаем детали каждого элемента меню
        const items = await Promise.all(orderItems.map(async (item: any) => {
          const menuItemResponse = await fetchWithHeaders(`menu-items/${item.menu_item}/`);
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
      
      const response = await fetchWithHeaders(`orders/${orderId}/update_status/`, {
        method: 'POST',
        body: JSON.stringify({ status: backendStatus })
      });
      
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
      const response = await fetchWithHeaders(`addresses/`, {
        method: 'POST',
        body: JSON.stringify(address)
      });
      
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
      const response = await fetchWithHeaders(`addresses/`);
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