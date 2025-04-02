import { mockRestaurants } from './mockData';

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

// Получаем список городов для ресторанов
const getCityNameById = (cityId: number): string => {
  const cities: {[key: number]: string} = {
    1: 'Москва',
    2: 'Санкт-Петербург',
    3: 'Новосибирск',
    4: 'Екатеринбург',
    5: 'Казань'
  };
  
  return cities[cityId] || 'Неизвестный город';
};

// Владельцы ресторанов
const restaurantOwners: RestaurantOwner[] = [
  {
    id: 1,
    email: 'petrov@kulcha.com',
    password: 'password123',
    name: 'Александр Петров',
    restaurantId: 1,
  },
  {
    id: 2,
    email: 'sidorova@kulcha.com',
    password: 'password123',
    name: 'Елена Сидорова',
    restaurantId: 2,
  },
  {
    id: 3,
    email: 'ivanov@kulcha.com',
    password: 'password123',
    name: 'Максим Иванов',
    restaurantId: 3,
  },
  {
    id: 4,
    email: 'smirnova@kulcha.com',
    password: 'password123',
    name: 'Ольга Смирнова',
    restaurantId: 4,
  },
  {
    id: 5,
    email: 'kozlov@kulcha.com',
    password: 'password123',
    name: 'Дмитрий Козлов',
    restaurantId: 5,
  },
  {
    id: 6,
    email: 'novikova@kulcha.com',
    password: 'password123',
    name: 'Екатерина Новикова',
    restaurantId: 6,
  },
  {
    id: 7,
    email: 'morozov@kulcha.com',
    password: 'password123',
    name: 'Иван Морозов',
    restaurantId: 7,
  }
];

// Данные ресторанов для администраторов - синхронизированы с mockRestaurants
const restaurantAdminData: RestaurantAdminData[] = mockRestaurants.map(restaurant => ({
  id: restaurant.id,
  name: restaurant.name,
  address: restaurant.address,
  city: getCityNameById(restaurant.cityId),
  description: restaurant.description || `Ресторан среднеазиатской и русской кухни ${restaurant.name}`,
  coverImage: restaurant.coverImage,
  rating: restaurant.rating,
  totalOrders: 0,  // Начальное значение 0 заказов
  totalRevenue: 0,  // Начальная выручка 0 руб
  netProfit: 0,  // Начальная прибыль 0 руб
  averageOrderValue: 0  // Начальный средний чек 0 руб
}));

// Создаем пункты меню для каждого ресторана
const generateMenuItems = (): MenuItem[] => {
  let menuItems: MenuItem[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const categories: Array<'main' | 'soups' | 'appetizers' | 'desserts' | 'drinks'> = ['main', 'soups', 'appetizers', 'desserts', 'drinks'];
  
  // Базовые блюда для всех ресторанов (среднеазиатская и русская кухня)
  const baseItems = [
    {
      id: 1,
      name: "Шурпа",
      description: "Наваристый суп из баранины с овощами",
      price: 380,
      imageUrl: "", // Пустая строка вместо URL изображения
      category: "soups"
    },
    {
      id: 2,
      name: "Борщ",
      description: "Классический борщ со сметаной и зеленью",
      price: 320,
      imageUrl: "", // Пустая строка вместо URL изображения
      category: "soups"
    },
    {
      id: 3,
      name: "Лагман",
      description: "Густой суп с домашней лапшой и говядиной",
      price: 360,
      imageUrl: "", // Пустая строка вместо URL изображения
      category: "soups"
    },
    {
      id: 4,
      name: "Бульон с яйцом",
      description: "Прозрачный куриный бульон с яйцом и зеленью",
      price: 260,
      imageUrl: "", // Пустая строка вместо URL изображения
      category: "soups"
    },
    {
      id: 5,
      name: "Шашлык из баранины",
      description: "Сочный шашлык из мякоти баранины с лавашом и соусом",
      price: 580,
      imageUrl: "", // Пустая строка вместо URL изображения
      category: "appetizers"
    },
    {
      id: 6,
      name: "Чай с чабрецом",
      description: "Ароматный чай с чабрецом и горным медом",
      price: 180,
      imageUrl: "", // Пустая строка вместо URL изображения
      category: "desserts"
    }
  ];
  
  // Добавляем блюда для каждого ресторана
  mockRestaurants.forEach((restaurant, index) => {
    // Добавляем базовые блюда с фиксированными ценами
    baseItems.forEach((item, itemIndex) => {
      // Генерируем ID на основе ID ресторана
      const itemId = restaurant.id * 100 + itemIndex + 1;
      
      // Преобразуем категорию
      const categoryMapping = {
        'main': 'main',
        'soups': 'soups',
        'appetizers': 'appetizers',
        'desserts': 'desserts',
        'drinks': 'drinks'
      } as const;
      
      const category = categoryMapping[item.category as keyof typeof categoryMapping] || 'main';
      
      const newItem: MenuItem = {
        id: itemId,
        restaurantId: restaurant.id,
        name: item.name,
        description: item.description,
        price: item.price,
        imageUrl: item.imageUrl,
        category: category as 'main' | 'soups' | 'appetizers' | 'desserts' | 'drinks',
        available: true // Все блюда доступны по умолчанию
      };
      
      menuItems.push(newItem);
    });
    
    // Добавляем фиксированное количество блюд для каждого ресторана
    const uniqueItems = [
      {
        name: "Шаурма классическая",
        description: "Традиционная шаурма с курицей, овощами и соусом",
        price: 280,
        imageUrl: "", // Пустая строка вместо URL изображения
        category: "appetizers"
      },
      {
        name: "Плов",
        description: "Ароматный плов из баранины с зирой и барбарисом",
        price: 390,
        imageUrl: "", // Пустая строка вместо URL изображения
        category: "main"
      }
    ];
    
    uniqueItems.forEach((item, itemIndex) => {
      const itemId = restaurant.id * 100 + baseItems.length + itemIndex + 1;
      
      // Преобразуем категорию
      const categoryMapping = {
        'main': 'main',
        'soups': 'soups',
        'appetizers': 'appetizers',
        'desserts': 'desserts',
        'drinks': 'drinks'
      } as const;
      
      const category = categoryMapping[item.category as keyof typeof categoryMapping] || 'main';
      
      const newItem: MenuItem = {
        id: itemId,
        restaurantId: restaurant.id,
        name: `${item.name}${restaurant.id === 1 ? ' (Фирменное)' : ''}`,
        description: item.description,
        price: item.price,
        imageUrl: item.imageUrl,
        category: category as 'main' | 'soups' | 'appetizers' | 'desserts' | 'drinks',
        available: true // Все блюда доступны по умолчанию
      };
      
      menuItems.push(newItem);
    });
  });
  
  return menuItems;
};

// Пункты меню
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const menuItems: MenuItem[] = generateMenuItems();

// Генерируем пустой массив заказов (начальное состояние)
const generateOrders = (): AdminOrder[] => {
  return [];
};

// Заказы для администраторов (начальное состояние - пустой массив)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const adminOrders: AdminOrder[] = generateOrders();

// Функция для получения меню ресторана
export const getMenuItems = (restaurantId: number): MenuItem[] => {
  // Получаем меню из localStorage
  const storedMenuItems = localStorage.getItem('menuItems');
  let menuItemsList: MenuItem[] = [];
  
  if (storedMenuItems) {
    menuItemsList = JSON.parse(storedMenuItems) as MenuItem[];
  } else {
    // Если в localStorage нет меню, используем сгенерированные данные
    menuItemsList = generateMenuItems();
    // Сохраняем сгенерированное меню в localStorage
    localStorage.setItem('menuItems', JSON.stringify(menuItemsList));
  }

  // Фильтруем только пункты меню для указанного ресторана
  const restaurantMenuItems = menuItemsList.filter(item => item.restaurantId === restaurantId);
  
  // Убедимся, что у всех элементов установлено правильное значение available
  const validatedMenuItems = restaurantMenuItems.map(item => ({
    ...item,
    available: item.available === undefined ? true : item.available
  }));
  
  return validatedMenuItems;
};

// Функция для получения статистики ресторана
export const getRestaurantStatistics = (restaurantId: number): RestaurantStatistics => {
  // Получаем данные ресторана
  const restaurant = getRestaurantData(restaurantId);
  
  // Получаем заказы ресторана
  const orders = getRestaurantOrders(restaurantId);
  
  // Получаем меню ресторана
  const menuItems = getMenuItems(restaurantId);
  
  // Преобразуем заказы администратора в заказы пользователя для отображения
  const userOrders: Order[] = orders.map(order => ({
    id: order.id,
    items: [], // Заглушка для элементов заказа
    totalAmount: order.amount,
    deliveryMethod: 'delivery',
    date: order.date,
    status: order.status === 'completed' ? 'delivered' : 
           order.status === 'pending' ? 'pending' : 'rejected',
    restaurantId: order.restaurantId
  }));
  
  // Рассчитываем популярные товары на основе фактических данных
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const completedOrders = orders.filter(order => order.status === 'completed');
  
  // Используем первые 5 товаров из меню как популярные (или меньше, если меню меньше 5 элементов)
  const popularItems = menuItems.slice(0, Math.min(5, menuItems.length));
  
  return {
    statistics: {
      totalSales: restaurant?.totalRevenue || 0,
      orderCount: restaurant?.totalOrders || 0,
      averageOrderValue: restaurant?.averageOrderValue || 0,
      popularItems: popularItems
    },
    recentOrders: userOrders.slice(0, 10) // Берем 10 последних заказов
  };
};

// Функция для инициализации базы данных (не зависит от перезапуска сервера)
export const initializeAdminDatabase = () => {
  // Проверяем, есть ли в localStorage данные
  const existingOwners = localStorage.getItem('restaurantOwners');
  const existingRestaurantData = JSON.parse(localStorage.getItem('restaurantAdminData') || '[]');
  const existingOrders = JSON.parse(localStorage.getItem('adminOrders') || '[]');
  const existingMenuItems = JSON.parse(localStorage.getItem('menuItems') || '[]') as MenuItem[];
  
  console.log('Initializing admin database...');

  // Создаем постоянное хранилище для изображений, если его нет
  if (!localStorage.getItem('persistentImages')) {
    localStorage.setItem('persistentImages', JSON.stringify({}));
    console.log('Created persistent image storage');
  }
  
  // Инициализируем владельцев ресторанов, если их нет
  if (!existingOwners) {
    localStorage.setItem('restaurantOwners', JSON.stringify(restaurantOwners));
    console.log('Restaurant owners initialized');
  } else {
    console.log('Using existing restaurant owners data');
  }
  
  // Инициализируем данные ресторанов, сохраняя статистику, если она уже есть
  if (existingRestaurantData.length > 0) {
    // Обновляем только основные данные, сохраняя статистику
    const updatedRestaurantData = restaurantAdminData.map(newData => {
      const existingData = existingRestaurantData.find((r: RestaurantAdminData) => r.id === newData.id);
      if (existingData) {
        // Сохраняем существующую статистику
        return {
          ...newData,
          totalOrders: existingData.totalOrders,
          totalRevenue: existingData.totalRevenue,
          netProfit: existingData.netProfit,
          averageOrderValue: existingData.averageOrderValue
        };
      }
      return newData;
    });
    
    localStorage.setItem('restaurantAdminData', JSON.stringify(updatedRestaurantData));
    console.log('Restaurant data updated while preserving statistics');
  } else {
    // Если данных ресторанов нет, инициализируем с нуля
    localStorage.setItem('restaurantAdminData', JSON.stringify(restaurantAdminData));
    console.log('Restaurant data initialized with default values');
  }
  
  // Сохраняем существующие заказы, если они есть
  if (existingOrders.length > 0) {
    localStorage.setItem('adminOrders', JSON.stringify(existingOrders));
    console.log(`Preserved ${existingOrders.length} existing orders`);
  } else {
    // Если заказов нет, инициализируем пустым массивом
    const orders = generateOrders();
    localStorage.setItem('adminOrders', JSON.stringify(orders));
    console.log('Orders initialized with empty array');
  }
  
  // Инициализируем пункты меню с сохранением существующих или генерацией новых
  if (existingMenuItems.length > 0) {
    console.log(`Preserved ${existingMenuItems.length} existing menu items`);
    
    // Проверяем целостность данных
    let needsUpdate = false;
    const validatedMenuItems = existingMenuItems.map((item: MenuItem) => {
      const originalItem = { ...item };
      
      // Проверяем и фиксим обязательные поля
      if (item.available === undefined) {
        item.available = true;
        needsUpdate = true;
      }
      
      // Проверяем наличие изображения
      if (!item.imageUrl) {
        // Сначала проверяем, есть ли изображение в постоянном хранилище
        const persistentImages = JSON.parse(localStorage.getItem('persistentImages') || '{}');
        const persistentImageKey = `item_${item.id}`;
        
        if (persistentImages[persistentImageKey]) {
          // Если есть изображение в постоянном хранилище, используем его
          item.imageUrl = persistentImages[persistentImageKey];
          console.log(`Restored image for item ${item.id} from persistent storage`);
          needsUpdate = true;
        } else {
          // Получаем демо-изображение, если нет в постоянном хранилище
          const demoImages = [
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
            'https://images.unsplash.com/photo-1481070414801-51fd732d7184',
            'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
          ];
          const imageIndex = item.id % demoImages.length;
          item.imageUrl = demoImages[imageIndex];
          needsUpdate = true;
        }
      }
      
      if (JSON.stringify(originalItem) !== JSON.stringify(item)) {
        needsUpdate = true;
      }
      
      return item;
    });
    
    if (needsUpdate) {
      localStorage.setItem('menuItems', JSON.stringify(validatedMenuItems));
      console.log('Menu items data validated and updated');
    }
  } else {
    // Если меню пусто, генерируем демо-данные
    const generatedMenuItems = generateMenuItems();
    localStorage.setItem('menuItems', JSON.stringify(generatedMenuItems));
    console.log(`Generated ${generatedMenuItems.length} new menu items`);
    
    // Синхронизируем с клиентской частью
    window.dispatchEvent(new CustomEvent('menuItemsUpdated', { 
      detail: { menuItems: generatedMenuItems } 
    }));
  }
  
  console.log('Admin database initialization completed');
};

// Функция для сохранения изображения в постоянное хранилище
const saveImageToPersistentStorage = (itemId: number, imageUrl: string) => {
  const persistentImages = JSON.parse(localStorage.getItem('persistentImages') || '{}');
  const persistentImageKey = `item_${itemId}`;
  
  // Сохраняем изображение в постоянное хранилище
  persistentImages[persistentImageKey] = imageUrl;
  localStorage.setItem('persistentImages', JSON.stringify(persistentImages));
  
  console.log(`Image for item ${itemId} saved to persistent storage`);
};

// Функция для получения владельца ресторана по email и паролю
export const authenticateOwner = (email: string, password: string): RestaurantOwner | null => {
  const owners: RestaurantOwner[] = JSON.parse(localStorage.getItem('restaurantOwners') || '[]');
  return owners.find(owner => owner.email === email && owner.password === password) || null;
};

// Функция для получения данных ресторана для владельца
export const getRestaurantData = (restaurantId: number): RestaurantAdminData | null => {
  const restaurants: RestaurantAdminData[] = JSON.parse(localStorage.getItem('restaurantAdminData') || '[]');
  return restaurants.find(restaurant => restaurant.id === restaurantId) || null;
};

// Функция для получения всех ресторанов
export const getAllRestaurants = (): RestaurantAdminData[] => {
  return JSON.parse(localStorage.getItem('restaurantAdminData') || '[]');
};

// Функция для получения заказов ресторана
export const getRestaurantOrders = (restaurantId: number): AdminOrder[] => {
  console.log(`Getting orders for restaurant ID: ${restaurantId}`);
  try {
    const orders: AdminOrder[] = JSON.parse(localStorage.getItem('adminOrders') || '[]');
    console.log(`Total orders in storage: ${orders.length}`);
    
    if (!orders.length) {
      console.log('No orders found in storage');
      return [];
    }
    
    // Отладочная информация о всех заказах
    console.log('All orders:', orders.map(o => ({ id: o.id, restaurantId: o.restaurantId })));
    
    // Фильтруем заказы по ID ресторана
    const filteredOrders = orders.filter(order => {
      const match = order.restaurantId === restaurantId;
      if (match) {
        console.log(`Found matching order: ${order.id} for restaurant: ${restaurantId}`);
      }
      return match;
    });
    
    console.log(`Found ${filteredOrders.length} orders for restaurant ${restaurantId}`);
    return filteredOrders;
  } catch (error) {
    console.error(`Error retrieving orders for restaurant ${restaurantId}:`, error);
    return [];
  }
};

// Получаем меню ресторана
export const getRestaurantMenu = (restaurantId: number): MenuItem[] => {
  const adminMenuItems = getLocalStorageData('adminMenuItems', []) as MenuItem[];
  
  // Проверяем, есть ли меню в localStorage
  if (adminMenuItems.length === 0) {
    // Если нет, то берем из сгенерированных данных
    const defaultMenuItems = getGeneratedMenuItems();
    const filteredMenu = defaultMenuItems.filter(item => item.restaurantId === restaurantId);
    
    // Сохраняем сгенерированное меню для всех ресторанов
    localStorage.setItem('adminMenuItems', JSON.stringify(defaultMenuItems));
    
    return filteredMenu;
  }
  
  // Возвращаем меню для конкретного ресторана
  return adminMenuItems.filter(item => item.restaurantId === restaurantId);
};

// Вспомогательная функция для получения сгенерированных пунктов меню
const getGeneratedMenuItems = (): MenuItem[] => {
  // Используем функцию генерации меню, определенную ранее
  return generateMenuItems();
};

// Вспомогательная функция для получения данных из localStorage
const getLocalStorageData = (key: string, defaultValue: any) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage: ${error}`);
    return defaultValue;
  }
};

// Функция для обновления данных ресторана
export const updateRestaurantData = (restaurantId: number, data: Partial<RestaurantAdminData>) => {
  const restaurants: RestaurantAdminData[] = JSON.parse(localStorage.getItem('restaurantAdminData') || '[]');
  const updatedRestaurants = restaurants.map(restaurant => 
    restaurant.id === restaurantId ? { ...restaurant, ...data } : restaurant
  );
  localStorage.setItem('restaurantAdminData', JSON.stringify(updatedRestaurants));
  return getRestaurantData(restaurantId);
};

// Функция для обновления пункта меню (с полным объектом MenuItem)
export const updateMenuItem = (menuItem: MenuItem): MenuItem => {
  // Убедимся, что все необходимые поля присутствуют
  const validatedMenuItem = {
    ...menuItem,
    available: menuItem.available === undefined ? true : menuItem.available,
    id: menuItem.id || Date.now()
  };

  const menuItems: MenuItem[] = JSON.parse(localStorage.getItem('menuItems') || '[]');
  const itemIndex = menuItems.findIndex(item => item.id === validatedMenuItem.id);
  
  // Сохраняем изображение в постоянное хранилище, если оно есть
  if (validatedMenuItem.imageUrl) {
    saveImageToPersistentStorage(validatedMenuItem.id, validatedMenuItem.imageUrl);
  }
  
  if (itemIndex !== -1) {
    menuItems[itemIndex] = validatedMenuItem;
  } else {
    // Если элемент не найден, добавим его в массив
    menuItems.push(validatedMenuItem);
  }
  
  // Сохраняем обновленное меню
  localStorage.setItem('menuItems', JSON.stringify(menuItems));
  
  // Синхронизируем с клиентской частью
  syncMenuItemsWithClient(menuItems);
  
  return validatedMenuItem;
};

// Функция для создания нового пункта меню
export const createMenuItem = (menuItem: MenuItem): MenuItem => {
  // Убедимся, что все необходимые поля присутствуют
  const validatedMenuItem = {
    ...menuItem,
    available: menuItem.available === undefined ? true : menuItem.available,
    id: menuItem.id || Date.now()
  };

  // Проверяем URL изображения
  if (!validatedMenuItem.imageUrl || 
      (!validatedMenuItem.imageUrl.startsWith('data:image/') && 
       !validatedMenuItem.imageUrl.startsWith('https://images.unsplash.com/') && 
       !validatedMenuItem.imageUrl.startsWith('http'))) {
    // Если URL отсутствует или некорректный, используем заглушку
    const demoImages = [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      'https://images.unsplash.com/photo-1481070414801-51fd732d7184',
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
    ];
    const imageIndex = validatedMenuItem.id % demoImages.length;
    validatedMenuItem.imageUrl = demoImages[imageIndex];
    console.log(`Using default image for new menu item ${validatedMenuItem.id}`);
  }

  // Сохраняем изображение в постоянное хранилище
  saveImageToPersistentStorage(validatedMenuItem.id, validatedMenuItem.imageUrl);

  const menuItems: MenuItem[] = JSON.parse(localStorage.getItem('menuItems') || '[]');
  menuItems.push(validatedMenuItem);
  
  // Сохраняем обновленное меню
  localStorage.setItem('menuItems', JSON.stringify(menuItems));
  
  // Синхронизируем с клиентской частью
  syncMenuItemsWithClient(menuItems);
  
  return validatedMenuItem;
};

// Функция для удаления пункта меню
export const deleteMenuItem = (itemId: number): boolean => {
  const menuItems: MenuItem[] = JSON.parse(localStorage.getItem('menuItems') || '[]');
  const newMenuItems = menuItems.filter(item => item.id !== itemId);
  
  // Сохраняем обновленное меню
  localStorage.setItem('menuItems', JSON.stringify(newMenuItems));
  
  // Синхронизируем с клиентской частью
  syncMenuItemsWithClient(newMenuItems);
  
  return true;
};

// Функция для синхронизации меню с клиентской частью
const syncMenuItemsWithClient = (menuItems: MenuItem[]) => {
  // Сохраняем для постоянного хранения в localStorage
  localStorage.setItem('menuItems', JSON.stringify(menuItems));
  
  // Эта функция синхронизирует состояние меню между разными частями приложения
  // В реальном приложении здесь может быть API-вызов для синхронизации с сервером
  console.log('Menu items synchronized with client', menuItems.length);
  
  // Диспатчим событие для уведомления других компонентов о изменении меню
  window.dispatchEvent(new CustomEvent('menuItemsUpdated', { 
    detail: { menuItems } 
  }));
};

// Функция для обновления статуса заказа
export const updateOrderStatus = (orderId: number, status: AdminOrder['status']) => {
  const orders: AdminOrder[] = JSON.parse(localStorage.getItem('adminOrders') || '[]');
  const updatedOrders = orders.map(order => 
    order.id === orderId ? { ...order, status } : order
  );
  localStorage.setItem('adminOrders', JSON.stringify(updatedOrders));
  return updatedOrders.find(order => order.id === orderId) || null;
};

// Функция для добавления нового заказа
export const addOrder = (order: Omit<AdminOrder, 'id'>) => {
  console.log('Adding order to admin database:', order);
  
  try {
    // Убедимся, что restaurantId - число
    const restaurantId = typeof order.restaurantId === 'string' 
      ? parseInt(order.restaurantId, 10) 
      : order.restaurantId;
    
    if (isNaN(restaurantId)) {
      console.error('Invalid restaurant ID:', order.restaurantId);
      return { ...order, id: 0 };
    }
    
    const orders: AdminOrder[] = JSON.parse(localStorage.getItem('adminOrders') || '[]');
    console.log('Current admin orders count:', orders.length);
    
    const newId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    const newOrder = { ...order, id: newId, restaurantId };
    
    console.log('Created new admin order with ID:', newId, 'for restaurant:', restaurantId);
    
    const updatedOrders = [...orders, newOrder];
    localStorage.setItem('adminOrders', JSON.stringify(updatedOrders));
    console.log('Updated adminOrders in localStorage, new count:', updatedOrders.length);
    
    // Обновление статистики ресторана
    const restaurants: RestaurantAdminData[] = JSON.parse(localStorage.getItem('restaurantAdminData') || '[]');
    const restaurantIndex = restaurants.findIndex(r => r.id === restaurantId);
    
    console.log('Updating restaurant statistics for restaurant ID:', restaurantId, 'found at index:', restaurantIndex);
    
    if (restaurantIndex >= 0) {
      const oldStats = { ...restaurants[restaurantIndex] };
      
      // Убедимся, что значения не NaN
      const currentOrders = restaurants[restaurantIndex].totalOrders || 0;
      const currentRevenue = restaurants[restaurantIndex].totalRevenue || 0;
      const orderAmount = typeof order.amount === 'string' ? parseFloat(order.amount) : order.amount;
      
      // Обновляем статистику
      restaurants[restaurantIndex].totalOrders = currentOrders + 1;
      restaurants[restaurantIndex].totalRevenue = currentRevenue + orderAmount;
      restaurants[restaurantIndex].netProfit = Math.floor((currentRevenue + orderAmount) * 0.75); // примерно 75% прибыли
      restaurants[restaurantIndex].averageOrderValue = 
        restaurants[restaurantIndex].totalOrders > 0 
          ? Math.floor(restaurants[restaurantIndex].totalRevenue / restaurants[restaurantIndex].totalOrders) 
          : 0;
      
      console.log('Updated restaurant statistics:', {
        restaurantId,
        totalOrders: {
          old: oldStats.totalOrders,
          new: restaurants[restaurantIndex].totalOrders
        },
        totalRevenue: {
          old: oldStats.totalRevenue,
          new: restaurants[restaurantIndex].totalRevenue
        }
      });
      
      localStorage.setItem('restaurantAdminData', JSON.stringify(restaurants));
      console.log('Updated restaurantAdminData in localStorage for ID:', restaurantId);
    } else {
      console.warn('Restaurant not found for ID:', restaurantId, 'Available restaurants:', restaurants.map(r => r.id));
    }
    
    return newOrder;
  } catch (error) {
    console.error('Error adding order to admin database:', error);
    return { ...order, id: 0 }; // Возвращаем заказ с ID=0 в случае ошибки
  }
};