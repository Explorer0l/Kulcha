import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Container, 
  MainContent,
  Heading,
  FoodGrid,
  EmptyState,
  PageTransition
} from '../styles/Components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import FoodItem from '../components/FoodItem';
import { useAppContext } from '../contexts/AppContext';
import useTelegram from '../hooks/useTelegram';

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
  background-image: url('/assets/images/butter-chicken.jpg');
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

const CategoryTitle = styled(Heading)`
  display: flex;
  align-items: center;
  margin-top: var(--spacing-xl);
  
  svg {
    margin-right: var(--spacing-sm);
    color: var(--primary-color);
  }
`;

const PopularFoodsContainer = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const CategoryContainer = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    selectedCity, 
    selectedRestaurant, 
    menuItems,
    setSelectedCity,
    setSelectedRestaurant 
  } = useAppContext();
  const { hideBackButton, hideMainButton } = useTelegram();
  
  useEffect(() => {
    hideBackButton();
    hideMainButton();
  }, [hideBackButton, hideMainButton]);
  
  const handleExploreMenu = () => {
    if (!selectedCity) {
      navigate('/cities');
    } else if (!selectedRestaurant) {
      navigate('/restaurants');
    }
  };
  
  const popularItems = menuItems.filter(item => [1, 3, 5].includes(item.id));
  const mainCourseItems = menuItems.filter(item => [1, 2, 3].includes(item.id));
  const appetizerItems = menuItems.filter(item => [4, 5, 6].includes(item.id));
  
  const handleStartOver = () => {
    setSelectedCity(null);
    setSelectedRestaurant(null);
    navigate('/cities');
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
                  <HeroTitle>Delicious Indian Food Delivered</HeroTitle>
                  <HeroSubtitle>
                    Experience authentic flavors from the best Indian restaurants
                  </HeroSubtitle>
                  <HeroButton onClick={handleExploreMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Get Started
                  </HeroButton>
                </HeroContent>
              </Hero>
              
              <EmptyState>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3>Select a location to start</h3>
                <p>Choose your city and restaurant to browse the menu</p>
                <HeroButton onClick={handleExploreMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Select Location
                </HeroButton>
              </EmptyState>
            </>
          ) : (
            <>
              <Hero>
                <HeroImage />
                <HeroContent>
                  <HeroTitle>{selectedRestaurant.name}</HeroTitle>
                  <HeroSubtitle>
                    Enjoy the best Indian food in {selectedCity.name}
                  </HeroSubtitle>
                  <HeroButton onClick={handleStartOver}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 14l6-6-6-6"></path>
                    </svg>
                    Change Restaurant
                  </HeroButton>
                </HeroContent>
              </Hero>
              
              <PopularFoodsContainer>
                <CategoryTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Popular Items
                </CategoryTitle>
                <FoodGrid>
                  {popularItems.map(item => (
                    <FoodItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </FoodGrid>
              </PopularFoodsContainer>
              
              <CategoryContainer>
                <CategoryTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.71l5.38 5.38a1 1 0 0 0 1.41 0l1.88-1.88a1 1 0 0 0 0-1.41l-5.38-5.38"></path>
                  </svg>
                  Main Courses
                </CategoryTitle>
                <FoodGrid>
                  {mainCourseItems.map(item => (
                    <FoodItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </FoodGrid>
              </CategoryContainer>
              
              <CategoryContainer>
                <CategoryTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                    <line x1="6" y1="17" x2="18" y2="17"></line>
                  </svg>
                  Appetizers
                </CategoryTitle>
                <FoodGrid>
                  {appetizerItems.map(item => (
                    <FoodItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </FoodGrid>
              </CategoryContainer>
            </>
          )}
        </MainContent>
      </Container>
    </HomeContainer>
  );
};

export default HomePage; 