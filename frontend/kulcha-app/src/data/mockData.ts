// Мокированные данные для демонстрации приложения

export interface City {
  id: number;
  name: string;
}

export interface Restaurant {
  id: number;
  name: string;
  cityId: number;
  address: string;
  description?: string;
}

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  description: string;
  img?: string;
}

// Мокированные города
export const mockCities: City[] = [
  { id: 1, name: 'Москва' },
  { id: 2, name: 'Санкт-Петербург' },
  { id: 3, name: 'Новосибирск' },
  { id: 4, name: 'Екатеринбург' },
  { id: 5, name: 'Казань' }
];

// Мокированные рестораны
export const mockRestaurants: Restaurant[] = [
  { id: 1, name: 'Kulcha Центральный', cityId: 1, address: 'ул. Тверская, 5', description: 'Лучший индийский ресторан в центре Москвы' },
  { id: 2, name: 'Kulcha Экспресс', cityId: 1, address: 'Кутузовский проспект, 32', description: 'Быстрая доставка вкусной индийской еды' },
  { id: 3, name: 'Kulcha Премиум', cityId: 2, address: 'Невский проспект, 28', description: 'Изысканные блюда в историческом центре' },
  { id: 4, name: 'Kulcha Фэмили', cityId: 2, address: 'ул. Рубинштейна, 15', description: 'Семейный ресторан с детским меню' },
  { id: 5, name: 'Kulcha Восточный', cityId: 3, address: 'ул. Ленина, 10', description: 'Аутентичная индийская кухня' },
  { id: 6, name: 'Kulcha Гурмэ', cityId: 4, address: 'ул. Вайнера, 9', description: 'Гастрономические шедевры индийской кухни' },
  { id: 7, name: 'Kulcha Традиции', cityId: 5, address: 'ул. Баумана, 31', description: 'Традиционная кухня в современном исполнении' }
];

// Мокированные блюда
export const mockFoodItems: FoodItem[] = [
  { 
    id: 1, 
    name: 'Баттер Чикен', 
    price: 450, 
    description: 'Нежная курица в богатом сливочно-томатном соусе с маслом и ароматными специями.'
  },
  { 
    id: 2, 
    name: 'Панир Тикка', 
    price: 350, 
    description: 'Кубики домашнего сыра, маринованные в специях и обжаренные до совершенства.'
  },
  { 
    id: 3, 
    name: 'Чикен Бирьяни', 
    price: 420, 
    description: 'Ароматный рис басмати, приготовленный с нежной курицей и пряными специями.'
  },
  { 
    id: 4, 
    name: 'Самоса', 
    price: 120, 
    description: 'Хрустящие пирожки с начинкой из пряного картофеля и гороха.'
  },
  { 
    id: 5, 
    name: 'Чесночный Наан', 
    price: 80, 
    description: 'Мягкая лепешка с чесноком и маслом, запеченная в тандыре.'
  },
  { 
    id: 6, 
    name: 'Гулаб Джамун', 
    price: 150, 
    description: 'Сладкие шарики из молока, пропитанные сахарным сиропом с кардамоном и розовой водой.'
  }
]; 