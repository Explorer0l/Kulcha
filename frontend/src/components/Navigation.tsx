import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBar, NavButton } from '../styles/Components';
import { useAppContext } from '../contexts/AppContext';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    selectedCity, 
    selectedRestaurant, 
    restaurants,
    deliveryMethod, 
    setDeliveryMethod 
  } = useAppContext();
  
  const [activePage, setActivePage] = useState<string>('home');

  // Update active page based on current route
  useEffect(() => {
    if (location.pathname.includes('city-selection')) {
      setActivePage('city');
    } else if (location.pathname.includes('restaurant-selection')) {
      setActivePage('restaurant');
    } else if (location.pathname === '/') {
      setActivePage('home');
    }
  }, [location.pathname]);

  const handleCityClick = () => {
    navigate('/city-selection');
  };

  const handleRestaurantClick = () => {
    if (selectedCity) {
      if (selectedRestaurant) {
        // Если ресторан уже выбран, перейти на страницу с меню
        navigate('/home');
      } else {
        // Если ресторан не выбран, перейти на страницу выбора ресторана
        navigate('/restaurant-selection');
      }
    }
  };

  const handleDeliveryClick = () => {
    setDeliveryMethod('delivery');
  };

  const handlePickupClick = () => {
    setDeliveryMethod('pickup');
  };

  // Получаем информацию о выбранном ресторане
  const restaurant = selectedRestaurant !== null 
    ? restaurants.find(r => r.id === selectedRestaurant) 
    : null;

  return (
    <NavBar>
      <NavButton 
        onClick={handleCityClick}
        className={activePage === 'city' ? 'active' : ''}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
          <circle cx="12" cy="9" r="2.5"></circle>
        </svg>
        {selectedCity ? selectedCity.name : 'City'}
      </NavButton>
      
      <NavButton 
        onClick={handleRestaurantClick}
        disabled={!selectedCity}
        className={activePage === 'restaurant' ? 'active' : ''}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"></path>
          <path d="M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"></path>
          <path d="M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"></path>
        </svg>
        {restaurant ? restaurant.name : 'Restaurant'}
      </NavButton>
      
      <NavButton 
        onClick={handleDeliveryClick}
        className={deliveryMethod === 'delivery' ? 'active' : ''}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7" cy="17" r="2"></circle>
          <circle cx="17" cy="17" r="2"></circle>
          <path d="M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"></path>
          <path d="M15 8h5l-1.5 5h-5"></path>
        </svg>
        Delivery
      </NavButton>
      
      <NavButton 
        onClick={handlePickupClick}
        className={deliveryMethod === 'pickup' ? 'active' : ''}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10h12"></path>
          <path d="M4 14h9"></path>
          <path d="M4 18h6"></path>
          <path d="M18 15v6"></path>
          <path d="M15 18h6"></path>
          <path d="m14.5 7.5-8-4-2 3 8 4Z"></path>
        </svg>
        Pickup
      </NavButton>
    </NavBar>
  );
};

export default Navigation; 