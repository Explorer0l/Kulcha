import React, { useEffect, useState, useRef } from 'react';
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
import CartButton from '../components/CartButton';

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

const CategoryNav = styled.div<{ $isSticky: boolean }>`
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background-color: var(--background-color);
  overflow-x: auto;
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 10;
  
  position: ${props => props.$isSticky ? 'fixed' : 'relative'};
  top: ${props => props.$isSticky ? '0' : 'auto'};
  left: ${props => props.$isSticky ? '0' : 'auto'};
  right: ${props => props.$isSticky ? '0' : 'auto'};
  width: ${props => props.$isSticky ? '100%' : 'auto'};
  border-radius: ${props => props.$isSticky ? '0' : 'var(--border-radius-md)'};
  box-shadow: ${props => props.$isSticky ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)'};
  transition: all 0.3s ease;

  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 600px) {
    padding: var(--spacing-sm);
  }
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  background-color: ${props => props.$active ? 'var(--primary-color)' : 'var(--card-bg)'};
  color: ${props => props.$active ? 'white' : 'var(--text-color)'};
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: ${props => props.$active ? '600' : '400'};
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  
  svg, span {
    margin-right: var(--spacing-xs);
  }
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--primary-light)' : 'var(--card-hover)'};
    transform: translateY(-2px);
  }
  
  @media (max-width: 600px) {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 0.9rem;
  }
`;

const StickyNavPlaceholder = styled.div<{ $isVisible: boolean }>`
  height: ${props => props.$isVisible ? '68px' : '0'};
  transition: height 0.3s ease;
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
  scroll-margin-top: 80px;
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
  const [activeCategory, setActiveCategory] = useState('popular');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [initialNavPosition, setInitialNavPosition] = useState<number | null>(null);
  const categoryNavRef = useRef<HTMLDivElement>(null);
  const popularRef = useRef<HTMLDivElement>(null);
  const mainCoursesRef = useRef<HTMLDivElement>(null);
  const appetizersRef = useRef<HTMLDivElement>(null);
  const dessertsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    hideBackButton();
    hideMainButton();
  }, [hideBackButton, hideMainButton]);
  
  // Сохраняем начальную позицию навигации после рендеринга
  useEffect(() => {
    if (categoryNavRef.current && initialNavPosition === null) {
      // Сохраняем абсолютную позицию относительно страницы
      const navPosition = categoryNavRef.current.getBoundingClientRect().top + window.scrollY;
      setInitialNavPosition(navPosition);
    }
  }, [initialNavPosition]);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Определяем направление скролла
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      // Сохраняем текущую позицию скролла
      setLastScrollY(currentScrollY);
      
      if (categoryNavRef.current && initialNavPosition !== null) {
        // Проверяем, находимся ли мы выше начальной позиции навигации
        if (currentScrollY < initialNavPosition - 1) { // -1 для небольшого порога
          // Если мы выше начальной позиции, убираем фиксацию
          setIsNavSticky(false);
        } else {
          // Иначе применяем обычную логику фиксации
          const navTop = categoryNavRef.current.getBoundingClientRect().top;
          
          if (scrollDirection === 'down') {
            // При скролле вниз - фиксируем меню когда оно достигает верха экрана
            setIsNavSticky(navTop <= 0);
          } else {
            // При скролле вверх - отпускаем меню только если мы еще не дошли до его исходной позиции
            if (currentScrollY < initialNavPosition) {
              setIsNavSticky(false);
            }
          }
        }
      }
      
      // Update active category based on scroll position
      const scrollPos = currentScrollY + 100;
      
      if (dessertsRef.current && scrollPos >= dessertsRef.current.offsetTop) {
        setActiveCategory('desserts');
      } else if (appetizersRef.current && scrollPos >= appetizersRef.current.offsetTop) {
        setActiveCategory('appetizers');
      } else if (mainCoursesRef.current && scrollPos >= mainCoursesRef.current.offsetTop) {
        setActiveCategory('main');
      } else if (popularRef.current && scrollPos >= popularRef.current.offsetTop) {
        setActiveCategory('popular');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection, initialNavPosition]);
  
  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    let element;
    switch(categoryId) {
      case 'popular':
        element = popularRef.current;
        break;
      case 'main':
        element = mainCoursesRef.current;
        break;
      case 'appetizers':
        element = appetizersRef.current;
        break;
      case 'desserts':
        element = dessertsRef.current;
        break;
      default:
        element = popularRef.current;
    }
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };
  
  const handleExploreMenu = () => {
    if (!selectedCity) {
      navigate('/city-selection');
    } else if (!selectedRestaurant) {
      navigate('/restaurant-selection');
    }
  };
  
  const popularItems = menuItems.filter(item => [1, 3, 5].includes(item.id));
  const mainCourseItems = menuItems.filter(item => [1, 2, 3].includes(item.id));
  const appetizerItems = menuItems.filter(item => [4, 5].includes(item.id));
  const dessertItems = menuItems.filter(item => [6].includes(item.id));
  
  const handleStartOver = () => {
    setSelectedRestaurant(null);
    navigate('/restaurant-selection');
  };
  
  const categories = [
    { id: 'popular', name: 'Популярное', icon: '⭐' },
    { id: 'main', name: 'Первое', icon: '🍛' },
    { id: 'appetizers', name: 'Второе', icon: '🥣' },
    { id: 'desserts', name: 'Десерты', icon: '🍮' }
  ];
  
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
                  <HeroTitle>{selectedRestaurant.name}</HeroTitle>
                  <HeroSubtitle>
                    Насладитесь лучшей едой в {selectedCity.name}
                  </HeroSubtitle>
                  <HeroButton onClick={handleStartOver}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 14l6-6-6-6"></path>
                    </svg>
                    Сменить ресторан
                  </HeroButton>
                </HeroContent>
              </Hero>
              
              <CategoryNav ref={categoryNavRef} $isSticky={isNavSticky}>
                {categories.map(category => (
                  <CategoryButton
                    key={category.id}
                    $active={activeCategory === category.id}
                    onClick={() => scrollToCategory(category.id)}
                  >
                    <span>{category.icon}</span> {category.name}
                  </CategoryButton>
                ))}
              </CategoryNav>
              
              <StickyNavPlaceholder $isVisible={isNavSticky} />
              
              <PopularFoodsContainer ref={popularRef}>
                <CategoryTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Популярные блюда
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
              
              <CategoryContainer ref={mainCoursesRef}>
                <CategoryTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.71l5.38 5.38a1 1 0 0 0 1.41 0l1.88-1.88a1 1 0 0 0 0-1.41l-5.38-5.38"></path>
                  </svg>
                  Первое
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
              
              <CategoryContainer ref={appetizersRef}>
                <CategoryTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                    <line x1="6" y1="17" x2="18" y2="17"></line>
                  </svg>
                  Второе
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
              
              <CategoryContainer ref={dessertsRef}>
                <CategoryTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21a9 9 0 0 1-9-9c0-3.9 2.5-7.2 6-8.5 0 1.5.5 3 1.5 4 .8.8 1.8 1.2 2.8 1.5.8.2 1.7.3 2.7.3a8 8 0 0 0 3.3-.7"></path>
                    <path d="M12 12a9 9 0 0 0 9 9c3.9 0 7.2-2.5 8.5-6-1.5 0-3-.5-4-1.5-.8-.8-1.2-1.8-1.5-2.8-.2-.8-.3-1.7-.3-2.7a8 8 0 0 1 .7-3.3"></path>
                    <path d="M21 12h-2c0-4.4-3.6-8-8-8v-2c5.5 0 10 4.5 10 10z"></path>
                  </svg>
                  Десерты
                </CategoryTitle>
                <FoodGrid>
                  {dessertItems.map(item => (
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
        <CartButton />
      </Container>
    </HomeContainer>
  );
};

export default HomePage; 