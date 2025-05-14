import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAppContext } from '../contexts/AppContext';

// Нижняя навигационная панель в современном стиле
const BottomNavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(20px);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  
  @media (max-width: 768px) {
    padding: 8px 5px;
  }
`;

const NavItem = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: ${props => props.$active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.7)'};
  padding: 8px 12px;
  position: relative;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.5;
  }
  
  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
    transition: transform 0.2s ease;
    
    @media (max-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
  
  span {
    font-size: 12px;
    transition: all 0.2s ease;
    white-space: nowrap;
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    
    @media (max-width: 400px) {
      display: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: ${props => props.$active ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)'};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--primary-color);
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: var(--primary-color);
    
    svg {
      transform: translateY(-2px);
    }
  }
`;

const LocationBadge = styled.div<{ $active: boolean }>`
  position: absolute;
  top: -3px;
  right: -3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$active ? 'var(--primary-color)' : 'transparent'};
  box-shadow: 0 0 5px var(--primary-color);
`;

const CenterButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(255, 159, 13, 0.5);
  border: none;
  cursor: pointer;
  transform: translateY(-15px);
  transition: all 0.2s ease;
  
  svg {
    width: 24px;
    height: 24px;
    color: white;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 5px 15px rgba(255, 159, 13, 0.6);
    
    svg {
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    transform: translateY(-10px);
    
    &:hover {
      transform: translateY(-15px);
    }
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    selectedCity, 
    selectedRestaurant, 
    restaurants,
    deliveryMethod, 
    setDeliveryMethod,
    cart
  } = useAppContext();
  
  const [activePage, setActivePage] = useState<string>('home');

  // Update active page based on current route
  useEffect(() => {
    if (location.pathname.includes('city-selection')) {
      setActivePage('city');
    } else if (location.pathname.includes('restaurant-selection')) {
      setActivePage('restaurant');
    } else if (location.pathname.includes('profile')) {
      setActivePage('profile');
    } else if (location.pathname === '/home' || location.pathname === '/') {
      setActivePage('home');
    } else if (location.pathname.includes('cart')) {
      setActivePage('cart');
    }
  }, [location.pathname]);

  const handleCityClick = () => {
    navigate('/city-selection');
  };

  const handleRestaurantClick = () => {
    if (selectedCity) {
      navigate('/restaurant-selection');
    }
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleProfileClick = () => {
    navigate('/profile');
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

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BottomNavBar>
      <NavItem 
        onClick={handleCityClick}
        $active={activePage === 'city'}
      >
        <ButtonContent>
          <LocationBadge $active={!!selectedCity} />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span>{selectedCity ? selectedCity.name : 'Город'}</span>
        </ButtonContent>
      </NavItem>
      
      <NavItem 
        onClick={handleRestaurantClick}
        disabled={!selectedCity}
        $active={activePage === 'restaurant'}
      >
        <ButtonContent>
          <LocationBadge $active={!!restaurant} />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
          </svg>
          <span>{restaurant ? restaurant.name : 'Ресторан'}</span>
        </ButtonContent>
      </NavItem>
      
      <CenterButton onClick={handleHomeClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </CenterButton>
      
      <NavItem 
        onClick={deliveryMethod === 'delivery' ? handlePickupClick : handleDeliveryClick}
        $active={false}
      >
        <ButtonContent>
          {deliveryMethod === 'delivery' ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Самовывоз</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span>Доставка</span>
            </>
          )}
        </ButtonContent>
      </NavItem>
      
      <NavItem 
        onClick={handleProfileClick}
        $active={activePage === 'profile'}
      >
        <ButtonContent>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Профиль</span>
        </ButtonContent>
      </NavItem>
    </BottomNavBar>
  );
};

export default Navigation; 