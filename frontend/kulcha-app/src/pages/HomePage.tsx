import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Container, 
  MainContent,
  EmptyState,
  PageTransition
} from '../styles/Components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { useAppContext } from '../contexts/AppContext';
import useTelegram from '../hooks/useTelegram';
import CartButton from '../components/CartButton';
import { getMenuItems } from '../data/adminDatabase';
import RestaurantMenu from './RestaurantMenu';

const HomeContainer = styled(PageTransition)`
  min-height: 70vh;
`;

const Hero = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  @media (min-width: 768px) {
    height: 300px;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-lg);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/images/paneer-tikka.jpg');
  background-position: center;
  background-size: cover;
  transform: scale(1.05);
  filter: brightness(0.9);
  animation: subtle-zoom 30s infinite alternate;
  
  @keyframes subtle-zoom {
    0% {
      transform: scale(1.05) translate(0%, 0%);
    }
    100% {
      transform: scale(1.15) translate(-2%, -1%);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  max-width: 70%;
  
  @media (max-width: 600px) {
    font-size: 1.8rem;
    max-width: 100%;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
  color: rgba(255, 255, 255, 0.9);
  max-width: 60%;
  
  @media (max-width: 600px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const HeroButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(255, 159, 13, 0.3);
  transition: all 0.2s ease;
  
  svg {
    margin-right: var(--spacing-xs);
  }
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 159, 13, 0.4);
  }
`;

const RestaurantInfo = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const RestaurantName = styled.h2`
  color: var(--text-color);
  margin: 0 0 var(--spacing-xs) 0;
`;

const RestaurantAdditionalInfo = styled.p`
  color: var(--text-secondary);
  margin: 0;
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    selectedCity, 
    selectedRestaurant, 
    setSelectedRestaurant,
    restaurants
  } = useAppContext();
  const { hideBackButton, hideMainButton } = useTelegram();
  
  // Используем меню из adminDatabase вместо mockData
  const [menuItems, setMenuItems] = useState<any[]>([]);
  
  // Получаем данные о выбранном ресторане и city из контекста
  const selectedRestaurantData = selectedRestaurant 
    ? restaurants.find(r => r.id === selectedRestaurant) 
    : null;
  
  useEffect(() => {
    hideBackButton();
    hideMainButton();

    // Проверяем выбран ли город и ресторан
    if (!selectedCity) {
      // Если город не выбран, перенаправляем на выбор города
      navigate('/city-selection', { replace: true });
    } else if (!selectedRestaurant) {
      // Если город выбран, но ресторан нет, перенаправляем на выбор ресторана
      navigate('/restaurant-selection', { replace: true });
    }
  }, [hideBackButton, hideMainButton, selectedCity, selectedRestaurant, navigate]);
  
  useEffect(() => {
    if (selectedRestaurant) {
      // Загружаем меню для выбранного ресторана
      const items = getMenuItems(selectedRestaurant);
      setMenuItems(items);
    }
  }, [selectedRestaurant]);
  
  const handleExploreMenu = () => {
    // Скрываем кнопку Telegram перед переходом на страницы выбора
    hideMainButton();
    
    if (!selectedCity) {
      navigate('/city-selection');
    } else if (!selectedRestaurant) {
      navigate('/restaurant-selection');
    }
  };
  
  const handleStartOver = () => {
    setSelectedRestaurant(null);
    navigate('/restaurant-selection');
  };
  
  return (
    <HomeContainer>
      <Container>
        <Header />
        <Navigation />
        <MainContent>
          {!selectedCity || !selectedRestaurant ? (
            <>
              <Hero>
                <HeroImage />
                <HeroContent>
                  <HeroTitle>Вкусная еда с доставкой</HeroTitle>
                  <HeroSubtitle>
                    Откройте для себя аутентичные вкусы лучших ресторанов
                  </HeroSubtitle>
                  <HeroButton onClick={handleExploreMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Начать
                  </HeroButton>
                </HeroContent>
              </Hero>
              
              <EmptyState>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3>Выберите местоположение</h3>
                <p>Выберите город и ресторан, чтобы просмотреть меню</p>
                <HeroButton onClick={handleExploreMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Выбрать местоположение
                </HeroButton>
              </EmptyState>
            </>
          ) : (
            <>
              <Hero>
                <HeroImage />
                <HeroContent>
                  <HeroTitle>{selectedRestaurantData?.name}</HeroTitle>
                  <HeroSubtitle>
                    Насладитесь лучшей едой в {selectedCity?.name || ''}
                  </HeroSubtitle>
                  <HeroButton onClick={handleStartOver}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 14l6-6-6-6"></path>
                    </svg>
                    Сменить ресторан
                  </HeroButton>
                </HeroContent>
              </Hero>
              
              <RestaurantInfo>
                <RestaurantName>{selectedRestaurantData?.name}</RestaurantName>
                <RestaurantAdditionalInfo>
                  {selectedCity?.name}, {selectedRestaurantData?.address}
                </RestaurantAdditionalInfo>
              </RestaurantInfo>
              
              <RestaurantMenu menuItems={menuItems} />
            </>
          )}
        </MainContent>
        <CartButton />
      </Container>
    </HomeContainer>
  );
};

export default HomePage; 