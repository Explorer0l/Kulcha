import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  MainContent, 
  ProfileHeading, 
  FoodGrid, 
  AddToCartButton,
  EmptyState,
  PageTransition
} from '../styles/Components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CartButton from '../components/CartButton';
import { useAppContext } from '../contexts/AppContext';
import useTelegram from '../hooks/useTelegram';
import styled from 'styled-components';

const RestaurantCard = styled.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  height: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: var(--box-shadow);
    
    &::after {
      opacity: 0.7;
    }
    
    .restaurant-info {
      transform: translateY(0);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3));
    opacity: 0.5;
    transition: opacity var(--transition-normal);
    z-index: 1;
  }
`;

const RestaurantImage = styled.div<{ $bgImage?: string }>`
  width: 100%;
  height: 100%;
  background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'linear-gradient(45deg, var(--primary-dark), var(--primary-color))'};
  background-size: cover;
  background-position: center;
  transition: transform var(--transition-normal);
  
  ${RestaurantCard}:hover & {
    transform: scale(1.1);
  }
`;

const RestaurantInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-md);
  color: var(--text-color);
  z-index: 2;
  transform: translateY(10px);
  transition: transform var(--transition-normal);
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 4px;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
  }
`;

const SelectButton = styled(AddToCartButton)`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  
  &:hover {
    background-color: var(--primary-light);
  }
`;

const RestaurantBadge = styled.span`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background-color: var(--primary-color);
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const placeholderImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9',
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de'
];

const RestaurantSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    restaurants, 
    selectedCity, 
    setSelectedRestaurant 
  } = useAppContext();
  
  const { 
    showBackButton, 
    hideBackButton, 
    setBackButtonCallback
  } = useTelegram();

  const filteredRestaurants = useMemo(() => {
    if (!selectedCity) return [];
    return restaurants.filter(restaurant => restaurant.cityId === selectedCity.id);
  }, [restaurants, selectedCity]);

  useEffect(() => {
    if (!selectedCity) {
      navigate('/city-selection');
    }
  }, [selectedCity, navigate]);

  useEffect(() => {
    showBackButton();
    
    setBackButtonCallback(() => {
      navigate('/city-selection');
    });

    return () => {
      hideBackButton();
    };
  }, [hideBackButton, navigate, setBackButtonCallback, showBackButton]);

  const handleRestaurantSelect = (restaurantId: number) => {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (restaurant) {
      setSelectedRestaurant(restaurant);
      navigate('/');
    }
  };

  const getRandomImage = (index: number) => {
    return placeholderImages[index % placeholderImages.length];
  };

  return (
    <PageTransition>
      <Container>
        <Header />
        <Navigation />
        <MainContent>
          <ProfileHeading>Рестораны в {selectedCity?.name}</ProfileHeading>
          
          {filteredRestaurants.length === 0 ? (
            <EmptyState>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"></path>
                <path d="M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"></path>
                <path d="M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"></path>
              </svg>
              <h3>Нет доступных ресторанов</h3>
              <p>В этом городе пока нет ресторанов.</p>
              <AddToCartButton onClick={() => navigate('/city-selection')}>
                Выбрать другой город
              </AddToCartButton>
            </EmptyState>
          ) : (
            <FoodGrid>
              {filteredRestaurants.map((restaurant, index) => (
                <RestaurantCard 
                  key={restaurant.id} 
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                >
                  <RestaurantImage $bgImage={getRandomImage(index)} />
                  <RestaurantBadge>Партнер Kulcha</RestaurantBadge>
                  <RestaurantInfo className="restaurant-info">
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.address}</p>
                    <SelectButton>
                      Выбрать ресторан
                    </SelectButton>
                  </RestaurantInfo>
                </RestaurantCard>
              ))}
            </FoodGrid>
          )}
        </MainContent>
        <CartButton />
      </Container>
    </PageTransition>
  );
};

export default RestaurantSelectionPage; 