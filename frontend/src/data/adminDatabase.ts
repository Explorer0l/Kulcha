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
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'rejected';
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
const API_BASE_URL = 'http://localhost:8000/api';

// Функция для обработки ошибок
const handleError = (error: any, fallback: any = null) => {
  console.error(error);
  return fallback;
};

// Инициализация админ базы данных больше не требуется - данные будут загружаться с API
export const initializeAdminDatabase = async () => {
  console.log('Real database is now used from the backend API');
};

// Получение элементов меню по ID ресторана
export const getMenuItems = async (restaurantId: number): Promise<MenuItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu-items/?cafe=${restaurantId}`);
    if (!response.ok) {
      throw new Error(`Error fetching menu items: ${response.status}`);
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

// Получение статистики по ресторану
export const getRestaurantStatistics = async (restaurantId: number): Promise<RestaurantStatistics> => {
  try {
    // Получаем статистику ресторана
    const response = await fetch(`${API_BASE_URL}/cafes/${restaurantId}/statistics/`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching restaurant statistics: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Получаем последние заказы для ресторана
    const ordersResponse = await fetch(`${API_BASE_URL}/orders/?cafe=${restaurantId}`, {
      credentials: 'include'
    });
    
    if (!ordersResponse.ok) {
      throw new Error(`Error fetching restaurant orders: ${ordersResponse.status}`);
    }
    
    const ordersData = await ordersResponse.json();
    
    const transformedOrders = await Promise.all(ordersData.map(async (order: any) => {
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
          imageUrl: menuItem.image_url || '',
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
    const response = await fetch(`${API_BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Authentication failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      id: data.id,
      email: data.email,
      password: '', // Пароль не храним на клиенте
      name: data.name,
      restaurantId: data.cafe_id
    };
  } catch (error) {
    return handleError(error, null);
  }
};

// Получение данных ресторана
export const getRestaurantData = async (restaurantId: number): Promise<RestaurantAdminData | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/cafes/${restaurantId}/`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching restaurant data: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Получаем статистику ресторана для дополнительных данных
    const statsResponse = await fetch(`${API_BASE_URL}/cafes/${restaurantId}/statistics/`, {
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
  } catch (error) {
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
    // Получаем заказы для конкретного ресторана
    const response = await fetch(`${API_BASE_URL}/orders/?cafe=${restaurantId}`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching restaurant orders: ${response.status}`);
    }
    
    const data = await response.json();
    
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
    
    const response = await fetch(`${API_BASE_URL}/menu-items/${menuItem.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error updating menu item: ${response.status}`);
    }
    
    const data = await response.json();
    
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
    
    const response = await fetch(`${API_BASE_URL}/menu-items/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error creating menu item: ${response.status}`);
    }
    
    const data = await response.json();
    
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
    const response = await fetch(`${API_BASE_URL}/menu-items/${itemId}/`, {
      method: 'DELETE',
      credentials: 'include'
    });
    
    return response.ok;
  } catch (error) {
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