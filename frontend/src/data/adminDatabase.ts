// Интерфейсы для типов данных (оставляем для совместимости с существующим кодом)

// Тип доставки
export type DeliveryMethod = 'delivery' | 'pickup';

// Интерфейс для владельца ресторана
export interface RestaurantOwner {
  id: number;
  email: string;
  password: string;
  name: string;
  restaurantId: number;
}

// Интерфейс для данных ресторана в админке
export interface RestaurantAdminData {
  id: number;
  name: string;
  address: string;
  city: string;
  description: string;
  coverImage: string;
  rating: number;
  totalOrders: number;
  totalRevenue: number;
  netProfit: number;
  averageOrderValue: number;
}

// Интерфейс пользовательского адреса
export interface UserAddress {
  id?: number;
  name: string;
  phone: string;
  address: string;
  city: string;
}

// Интерфейс для корзины товаров
export interface CartItem extends MenuItem {
  quantity: number;
}

// Интерфейс для заказа пользователя
export interface Order {
  id: number;
  items: CartItem[];
  totalAmount: number;
  deliveryMethod: DeliveryMethod;
  date: string;
  status: 'new' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'rejected';
  restaurantId: number;
  userAddress?: UserAddress;
}

// Интерфейс для заказа в системе администратора
export interface AdminOrder {
  id: number;
  restaurantId: number;
  customer: string;
  date: string;
  amount: number;
  status: string;
}

// Интерфейс для пункта меню ресторана
export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  available?: boolean;
}

// Интерфейс для статистики ресторана
export interface RestaurantStatistics {
  statistics: {
    totalSales: number;
    orderCount: number;
    averageOrderValue: number;
    popularItems: MenuItem[];
  };
  recentOrders: Order[];
}

// API URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Функция для обработки ошибок с улучшенным логированием
const handleError = (error: any, fallback: any = null) => {
  if (error.message) {
    console.error('API Error:', error.message);
  }
  
  if (error.response) {
    console.error('API Response Status:', error.response.status);
    console.error('API Response Data:', error.response.data);
  }
  
  console.error('Full Error:', error);
  return fallback;
};

// Инициализация админ базы данных больше не требуется - данные будут загружаться с API
export const initializeAdminDatabase = async () => {
  console.log('Real database is now used from the backend API');
};

// Получение элементов меню по ID ресторана
export const getMenuItems = async (restaurantId: number): Promise<MenuItem[]> => {
  try {
    console.log(`Fetching menu items for restaurant ID: ${restaurantId}`);
    
    const response = await fetch(`${API_BASE_URL}/menu-items/?cafe=${restaurantId}`, {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error fetching menu items: ${response.status}`, errorText);
      throw new Error(`Error fetching menu items: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Menu items data:', data);
    
    // Преобразуем данные в формат, используемый на фронтенде
    return data.map((item: any) => ({
      id: item.id,
      restaurantId: item.cafe,
      name: item.name,
      description: item.description || '',
      price: item.price,
      category: item.category,
      imageUrl: item.image || item.image_url || '',
      available: item.available
    }));
  } catch (error) {
    console.error('Error in getMenuItems:', error);
    return handleError(error, []);
  }
};

// Получение статистики по ресторану
export const getRestaurantStatistics = async (restaurantId: number): Promise<RestaurantStatistics> => {
  try {
    console.log(`Fetching statistics for restaurant ID: ${restaurantId}`);
    
    // Получаем статистику ресторана
    const response = await fetch(`${API_BASE_URL}/cafes/${restaurantId}/statistics/`, {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error fetching restaurant statistics: ${response.status}`, errorText);
      throw new Error(`Error fetching restaurant statistics: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Restaurant statistics data:', data);
    
    // Получаем последние заказы для ресторана
    const ordersResponse = await fetch(`${API_BASE_URL}/orders/?cafe=${restaurantId}`, {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!ordersResponse.ok) {
      const errorText = await ordersResponse.text();
      console.error(`Error fetching restaurant orders: ${ordersResponse.status}`, errorText);
      throw new Error(`Error fetching restaurant orders: ${ordersResponse.status} - ${errorText}`);
    }
    
    const ordersData = await ordersResponse.json();
    console.log('Restaurant orders data:', ordersData);
    
    // Упрощаем процесс получения данных заказа для улучшения производительности
    const transformedOrders = ordersData.map((order: any) => {
      return {
        id: order.id,
        items: order.items || [],
        totalAmount: order.total_price,
        deliveryMethod: order.order_type === 'delivery' ? 'delivery' : 'pickup',
        date: order.created_at,
        status: order.status,
        restaurantId: order.cafe,
        userAddress: order.delivery_address || ''
      };
    });
    
    return {
      statistics: {
        totalSales: data.total_revenue || 0,
        orderCount: data.total_orders || 0,
        averageOrderValue: data.average_order_value || 0,
        popularItems: data.popular_items?.map((item: any) => ({
          id: item.id,
          restaurantId: item.cafe,
          name: item.name,
          description: item.description || '',
          price: item.price,
          category: item.category,
          imageUrl: item.image_url || '',
          available: item.available
        })) || []
      },
      recentOrders: transformedOrders.slice(0, 5) // Берем только 5 последних заказов
    };
  } catch (error) {
    console.error('Error in getRestaurantStatistics:', error);
    return handleError(error, {
      statistics: {
        totalSales: 0,
        orderCount: 0,
        averageOrderValue: 0,
        popularItems: []
      },
      recentOrders: []
    });
  }
};

// Аутентификация владельца ресторана
export const authenticateOwner = async (email: string, password: string): Promise<RestaurantOwner | null> => {
  try {
    // Здесь в реальном приложении должен быть запрос на аутентификацию к API
    // Пока используем временное решение с предопределенными учетными записями
    console.log('Authenticating owner:', email, password);
    
    // Проверяем данные для входа
    const validCredentials = [
      { email: 'central@kulcha.ru', password: 'kulcha2024', restaurantId: 1, name: 'Администратор Центральный' },
      { email: 'express@kulcha.ru', password: 'kulcha2024', restaurantId: 2, name: 'Администратор Экспресс' },
      { email: 'premium@kulcha.ru', password: 'kulcha2024', restaurantId: 3, name: 'Администратор Премиум' },
      { email: 'family@kulcha.ru', password: 'kulcha2024', restaurantId: 4, name: 'Администратор Фэмили' },
      { email: 'east@kulcha.ru', password: 'kulcha2024', restaurantId: 5, name: 'Администратор Восточный' },
      { email: 'gourmet@kulcha.ru', password: 'kulcha2024', restaurantId: 6, name: 'Администратор Гурмэ' },
      { email: 'tradition@kulcha.ru', password: 'kulcha2024', restaurantId: 7, name: 'Администратор Традиции' }
    ];
    
    const user = validCredentials.find(cred => cred.email === email && cred.password === password);
    
    if (user) {
      // Имитируем успешный ответ от сервера
      return {
        id: user.restaurantId,
        email: user.email,
        password: '', // Для безопасности не храним пароль на клиенте
        name: user.name,
        restaurantId: user.restaurantId
      };
    }
    
    // Пытаемся сделать запрос к API (если сервер доступен)
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        return {
          id: data.id,
          email: data.email,
          password: '', // Пароль не храним на клиенте
          name: data.name,
          restaurantId: data.cafe_id
        };
      }
    } catch (apiError) {
      console.error('API auth failed, using mock auth:', apiError);
    }
    
    return null;
  } catch (error) {
    return handleError(error, null);
  }
};

// Получение данных ресторана
export const getRestaurantData = async (restaurantId: number): Promise<RestaurantAdminData | null> => {
  try {
    console.log(`Fetching restaurant data for ID: ${restaurantId}`);
    
    const response = await fetch(`${API_BASE_URL}/cafes/${restaurantId}/`, {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error fetching restaurant data: ${response.status}`, errorText);
      throw new Error(`Error fetching restaurant data: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Restaurant data received:', data);
    
    // Получаем статистику ресторана для дополнительных данных
    console.log(`Fetching restaurant statistics for ID: ${restaurantId}`);
    const statsResponse = await fetch(`${API_BASE_URL}/cafes/${restaurantId}/statistics/`, {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    let stats = { 
      total_orders: 0, 
      total_revenue: 0, 
      average_order_value: 0
    };
    
    if (statsResponse.ok) {
      stats = await statsResponse.json();
      console.log('Restaurant statistics received:', stats);
    } else {
      const errorText = await statsResponse.text();
      console.warn(`Warning: Could not fetch restaurant statistics: ${statsResponse.status}`, errorText);
    }
    
    const restaurantData = {
      id: data.id,
      name: data.name,
      address: data.address,
      city: data.city?.name || '',
      description: data.description || '',
      coverImage: data.cover_image || '',
      rating: data.rating || 0,
      totalOrders: stats.total_orders || 0,
      totalRevenue: stats.total_revenue || 0,
      netProfit: (stats.total_revenue * 0.3) || 0, // Примерная прибыль 30% от выручки
      averageOrderValue: stats.average_order_value || 0
    };
    
    console.log('Transformed restaurant data:', restaurantData);
    return restaurantData;
  } catch (error) {
    console.error('Error in getRestaurantData:', error);
    return handleError(error, null);
  }
};

// Получение всех ресторанов
export const getAllRestaurants = async (): Promise<RestaurantAdminData[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/cafes/`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching all restaurants: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Преобразуем данные в формат, используемый на фронтенде
    return Promise.all(data.map(async (cafe: any) => {
      // Для каждого ресторана получаем дополнительные данные
      const statsResponse = await fetch(`${API_BASE_URL}/cafes/${cafe.id}/statistics/`, {
        credentials: 'include'
      });
      
      let stats = { 
        total_orders: 0, 
        total_revenue: 0, 
        average_order_value: 0
      };
      
      if (statsResponse.ok) {
        stats = await statsResponse.json();
      }
      
      return {
        id: cafe.id,
        name: cafe.name,
        address: cafe.address,
        city: cafe.city?.name || '',
        description: cafe.description || '',
        coverImage: cafe.cover_image || '',
        rating: cafe.rating || 0,
        totalOrders: stats.total_orders || 0,
        totalRevenue: stats.total_revenue || 0,
        netProfit: (stats.total_revenue * 0.3) || 0, // Примерная прибыль 30% от выручки
        averageOrderValue: stats.average_order_value || 0
      };
    }));
  } catch (error) {
    return handleError(error, []);
  }
};

// Получение заказов для ресторана
export const getRestaurantOrders = async (restaurantId: number): Promise<AdminOrder[]> => {
  try {
    console.log(`Fetching orders for restaurant ID: ${restaurantId}`);
    
    // Получаем заказы для конкретного ресторана
    const response = await fetch(`${API_BASE_URL}/orders/?cafe=${restaurantId}`, {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error fetching restaurant orders: ${response.status}`, errorText);
      throw new Error(`Error fetching restaurant orders: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Restaurant orders data:', data);
    
    // Преобразуем данные в формат, используемый на фронтенде
    return data.map((order: any) => ({
      id: order.id,
      restaurantId: order.cafe,
      customer: order.user || 'Неизвестный клиент',
      date: order.created_at,
      amount: order.total_price,
      status: order.status
    }));
  } catch (error) {
    console.error('Error in getRestaurantOrders:', error);
    return handleError(error, []);
  }
};

// Получение меню ресторана
export const getRestaurantMenu = async (restaurantId: number): Promise<MenuItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu-items/?cafe=${restaurantId}`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching restaurant menu: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Преобразуем данные в формат, используемый на фронтенде
    return data.map((item: any) => ({
      id: item.id,
      restaurantId: item.cafe,
      name: item.name,
      description: item.description || '',
      price: item.price,
      category: item.category,
      imageUrl: item.image || item.image_url || '',
      available: item.available
    }));
  } catch (error) {
    return handleError(error, []);
  }
};

// Обновление данных ресторана
export const updateRestaurantData = async (restaurantId: number, data: Partial<RestaurantAdminData>): Promise<RestaurantAdminData | null> => {
  try {
    // Преобразуем данные в формат API
    const apiData = {
      name: data.name,
      address: data.address,
      description: data.description,
      cover_image: data.coverImage,
      rating: data.rating
    };
    
    const response = await fetch(`${API_BASE_URL}/cafes/${restaurantId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error updating restaurant data: ${response.status}`);
    }
    
    // Получаем обновленные данные
    return getRestaurantData(restaurantId);
  } catch (error) {
    return handleError(error, null);
  }
};

// Обновление пункта меню
export const updateMenuItem = async (menuItem: MenuItem): Promise<MenuItem> => {
  try {
    // Преобразуем данные в формат API
    const apiData = {
      cafe: menuItem.restaurantId,
      name: menuItem.name,
      description: menuItem.description,
      price: menuItem.price,
      category: menuItem.category,
      image_url: menuItem.imageUrl,
      available: menuItem.available
    };
    
    console.log('Updating menu item:', menuItem.id, apiData);
    
    const response = await fetch(`${API_BASE_URL}/menu-items/${menuItem.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(apiData),
      credentials: 'include',
      mode: 'cors'
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error updating menu item:', response.status, errorText);
      throw new Error(`Error updating menu item: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Menu item updated successfully:', data);
    
    // Возвращаем обновленный пункт меню в формате, используемом на фронтенде
    return {
      id: data.id,
      restaurantId: data.cafe,
      name: data.name,
      description: data.description || '',
      price: data.price,
      category: data.category,
      imageUrl: data.image || data.image_url || '',
      available: data.available
    };
  } catch (error) {
    return handleError(error, menuItem);
  }
};

// Создание нового пункта меню
export const createMenuItem = async (menuItem: MenuItem): Promise<MenuItem> => {
  try {
    // Преобразуем данные в формат API
    const apiData = {
      cafe: menuItem.restaurantId,
      name: menuItem.name,
      description: menuItem.description,
      price: menuItem.price,
      category: menuItem.category,
      image_url: menuItem.imageUrl,
      available: menuItem.available !== undefined ? menuItem.available : true
    };
    
    console.log('Creating new menu item:', apiData);
    
    const response = await fetch(`${API_BASE_URL}/menu-items/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(apiData),
      credentials: 'include',
      mode: 'cors'
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error creating menu item:', response.status, errorText);
      throw new Error(`Error creating menu item: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Menu item created successfully:', data);
    
    // Возвращаем новый пункт меню в формате, используемом на фронтенде
    return {
      id: data.id,
      restaurantId: data.cafe,
      name: data.name,
      description: data.description || '',
      price: data.price,
      category: data.category,
      imageUrl: data.image || data.image_url || '',
      available: data.available
    };
  } catch (error) {
    return handleError(error, { ...menuItem, id: -1 });
  }
};

// Удаление пункта меню
export const deleteMenuItem = async (itemId: number): Promise<boolean> => {
  try {
    console.log(`Deleting menu item with ID: ${itemId}`);
    
    const response = await fetch(`${API_BASE_URL}/menu-items/${itemId}/`, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error deleting menu item: ${response.status}`, errorText);
      throw new Error(`Error deleting menu item: ${response.status} - ${errorText}`);
    }
    
    console.log(`Menu item ${itemId} deleted successfully`);
    return true;
  } catch (error) {
    console.error('Error in deleteMenuItem:', error);
    return handleError(error, false);
  }
};

// Обновление статуса заказа
export const updateOrderStatus = async (orderId: number, status: AdminOrder['status']): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}/update_status/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
      credentials: 'include'
    });
    
    return response.ok;
  } catch (error) {
    return handleError(error, false);
  }
};

// Добавление нового заказа
export const addOrder = async (order: Omit<AdminOrder, 'id'>): Promise<AdminOrder | null> => {
  try {
    // Преобразуем данные в формат API
    const apiData = {
      cafe: order.restaurantId,
      order_type: 'in_place', // Значение по умолчанию
      status: order.status,
      total_price: order.amount
    };
    
    const response = await fetch(`${API_BASE_URL}/orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error adding order: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Возвращаем новый заказ в формате, используемом на фронтенде
    return {
      id: data.id,
      restaurantId: data.cafe,
      customer: data.user || 'Неизвестный клиент',
      date: data.created_at,
      amount: data.total_price,
      status: data.status
    };
  } catch (error) {
    return handleError(error, null);
  }
};