import React, { createContext, useState, ReactNode } from 'react';
import { mockCities, mockRestaurants, mockFoodItems } from '../data/mockData';

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
  description: string;
  price: number;
  img?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export type DeliveryMethod = 'delivery' | 'pickup';

export interface UserAddress {
  name: string;
  phone: string;
  address: string;
  city: string;
}

export interface Order {
  id: number;
  items: CartItem[];
  totalAmount: number;
  deliveryMethod: DeliveryMethod;
  date: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'rejected';
  address?: UserAddress;
}

interface AppContextType {
  cities: City[];
  restaurants: Restaurant[];
  foodItems: FoodItem[];
  cart: CartItem[];
  selectedCity: City | null;
  selectedRestaurant: Restaurant | null;
  deliveryMethod: DeliveryMethod;
  orderHistory: Order[];
  userAddress: UserAddress | null;
  menuItems: MenuItem[];
  setSelectedCity: (city: City | null) => void;
  setSelectedRestaurant: (restaurant: Restaurant | null) => void;
  setDeliveryMethod: (method: DeliveryMethod) => void;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  updateUserAddress: (address: UserAddress) => void;
  placeOrder: () => void;
  updateOrderStatus: (orderId: number, status: Order['status']) => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cities] = useState<City[]>(mockCities);
  const [restaurants] = useState<Restaurant[]>(mockRestaurants);
  const [foodItems] = useState<FoodItem[]>(mockFoodItems);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cityState, setCityState] = useState<City | null>(null);
  const [restaurantState, setRestaurantState] = useState<Restaurant | null>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('delivery');
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [userAddress, setUserAddress] = useState<UserAddress | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: 'Баттер Чикен',
      price: 450,
      description: 'Нежная курица в богатом сливочно-томатном соусе с маслом и ароматными специями.',
      image: '/assets/images/paneer-tikka.jpg'
    },
    {
      id: 2,
      name: 'Панир Тикка',
      price: 350,
      description: 'Кубики домашнего сыра, маринованные в специях и обжаренные до совершенства.',
      image: '/assets/images/paneer-tikka.jpg'
    },
    {
      id: 3,
      name: 'Чикен Бирьяни',
      price: 420,
      description: 'Ароматный рис басмати, приготовленный с нежной курицей и пряными специями.',
      image: '/assets/images/chicken-biryani.jpg'
    },
    {
      id: 4,
      name: 'Самоса',
      price: 120,
      description: 'Хрустящие пирожки с начинкой из пряного картофеля и гороха.',
      image: '/assets/images/vegetable-samosa.jpg'
    },
    {
      id: 5,
      name: 'Чесночный Наан',
      price: 80,
      description: 'Мягкая лепешка с чесноком и маслом, запеченная в тандыре.',
      image: '/assets/images/masala-dosa.jpg'
    },
    {
      id: 6,
      name: 'Гулаб Джамун',
      price: 150,
      description: 'Сладкие шарики из молока, пропитанные сахарным сиропом с кардамоном и розовой водой.',
      image: '/assets/images/gulab-jamun.jpg'
    }
  ]);

  const setSelectedCity = (city: City | null) => {
    setCityState(city);
    if (!city) {
      setRestaurantState(null);
    }
  };

  const setSelectedRestaurant = (restaurant: Restaurant | null) => {
    setRestaurantState(restaurant);
  };

  // Get derived values for public API
  const selectedCity = cityState;
  const selectedRestaurant = restaurantState;

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateCartItemQuantity = (itemId: number, quantity: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateUserAddress = (address: UserAddress) => {
    setUserAddress(address);
  };

  const placeOrder = () => {
    if (cart.length === 0) return;

    const newOrder: Order = {
      id: Date.now(),
      items: [...cart],
      totalAmount: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      deliveryMethod,
      date: new Date().toISOString(),
      status: 'pending',
      address: userAddress || undefined
    };

    setOrderHistory(prev => [newOrder, ...prev]);
    clearCart();
  };
  
  const updateOrderStatus = (orderId: number, status: Order['status']) => {
    setOrderHistory(prev => 
      prev.map(order => 
        order.id === orderId 
          ? { ...order, status } 
          : order
      )
    );
  };

  const increaseQuantity = (itemId: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => 
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      );
      
      // If quantity is 0, remove the item
      if (updatedCart.find(item => item.id === itemId)?.quantity === 0) {
        return updatedCart.filter(item => item.id !== itemId);
      }
      
      return updatedCart;
    });
  };

  return (
    <AppContext.Provider
      value={{
        cities,
        restaurants,
        foodItems,
        cart,
        selectedCity,
        selectedRestaurant,
        deliveryMethod,
        orderHistory,
        userAddress,
        menuItems,
        setSelectedCity,
        setSelectedRestaurant,
        setDeliveryMethod,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        updateUserAddress,
        placeOrder,
        updateOrderStatus,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 