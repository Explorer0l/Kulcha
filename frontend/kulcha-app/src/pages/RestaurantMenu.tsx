import React, { useMemo, useCallback, useState, useLayoutEffect, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MenuItem } from '../data/adminDatabase';
import { useAppContext } from '../contexts/AppContext';
import LoadingSpinner from '../components/LoadingSpinner';

// Оптимизированные стили с уменьшенным количеством CSS
const MenuContainer = styled.div`
  padding: var(--spacing-md);
  max-width: 1400px;
  margin: 0 auto;
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
`;

const MenuTitle = styled.h2`
  margin: 0;
  color: var(--text-color);
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  overflow-x: auto;
  padding-bottom: var(--spacing-xs);
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--card-bg);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  background-color: ${props => props.$active ? 'var(--primary-color)' : 'var(--card-bg)'};
  color: ${props => props.$active ? 'white' : 'var(--text-color)'};
  border: none;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: ${props => props.$active ? '600' : '400'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  
  svg, span {
    margin-right: var(--spacing-xs);
    font-size: 1.1rem;
  }
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--primary-light)' : 'var(--card-hover)'};
    transform: translateY(-2px);
  }
`;

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-md);
  transition: opacity 0.3s ease;
`;

// Комбинированные стили карточки для лучшей производительности
const FoodCard = styled.div`
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--card-bg);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.2) 100%);
    pointer-events: none;
  }
`;

const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const FoodDetails = styled.div`
  padding: var(--spacing-md);
`;

const FoodName = styled.h3`
  margin: 0 0 var(--spacing-xs) 0;
  font-size: 1.1rem;
  color: var(--text-color);
`;

const FoodDescription = styled.p`
  margin: 0 0 var(--spacing-md) 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FoodPrice = styled.div`
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-sm);
`;

const AddToCartButton = styled.button`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  gap: var(--spacing-xs);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &.added {
    background-color: #4CAF50; /* Зеленый цвет для успешного добавления */
    animation: pulse 0.6s ease-in-out;
  }
  
  &.added svg {
    transform: scale(1.2) rotate(-10deg);
    animation: bounce 0.5s ease-in-out;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes bounce {
    0% { transform: scale(1) rotate(0); }
    25% { transform: scale(1.4) rotate(-20deg); }
    50% { transform: scale(1.2) rotate(10deg); }
    75% { transform: scale(1.3) rotate(-5deg); }
    100% { transform: scale(1.2) rotate(0); }
  }
`;

const CategoryTag = styled.span`
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  z-index: 5;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--text-secondary);
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: var(--spacing-md);
    color: var(--border-color);
  }
  
  h3 {
    margin: 0 0 var(--spacing-xs) 0;
    color: var(--text-color);
  }
  
  p {
    margin: 0;
  }
`;

// Более оптимизированная функция форматирования цены
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU').format(price);
};

// Обновлённые фильтры для категорий меню с иконками
const MENU_FILTERS = [
  { id: 'all', name: 'Все', icon: '🍽️' },
  { id: 'main', name: 'Основное', icon: '🍲' },
  { id: 'soups', name: 'Супы', icon: '🥣' },
  { id: 'appetizers', name: 'Закуски', icon: '🥪' },
  { id: 'desserts', name: 'Десерты', icon: '🍰' },
  { id: 'drinks', name: 'Напитки', icon: '🥤' }
];

// Русское наименование категорий для тегов
const CATEGORY_NAMES: {[key: string]: string} = {
  'main': 'Основное',
  'soups': 'Суп',
  'appetizers': 'Закуска',
  'desserts': 'Десерт',
  'drinks': 'Напиток'
};

// Интерфейс пропсов для компонента
interface RestaurantMenuProps {
  menuItems: MenuItem[];
}

// Стили для счетчика количества
const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
  height: 32px;
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--card-hover);
  color: var(--text-color);
  border: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary-light);
    color: white;
    transform: scale(1.1);
  }
  
  &:disabled {
    background-color: var(--border-color);
    color: var(--text-secondary);
    cursor: not-allowed;
    transform: none;
  }
`;

const QuantityDisplay = styled.span`
  font-weight: 600;
  color: var(--text-color);
  font-size: 1.1rem;
`;

// Анимация добавления в корзину
const CartAnimation = styled.div`
  position: absolute;
  top: -20px;
  right: 10px;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
  animation: flyUp 0.8s forwards;
  opacity: 0;
  z-index: 10;
  
  @keyframes flyUp {
    0% { transform: translateY(0); opacity: 0; }
    10% { opacity: 1; }
    70% { opacity: 1; }
    100% { transform: translateY(-40px); opacity: 0; }
  }
`;

// Анимированная карточка с появлением
const AnimatedFoodCard = styled(FoodCard)<{ $delay: number }>`
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${props => props.$delay}s;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Анимированная сетка меню
const AnimatedFoodGrid = styled(FoodGrid)`
  opacity: 0;
  animation: fadeIn 0.4s ease forwards;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const RestaurantMenu: React.FC<RestaurantMenuProps> = ({ menuItems }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { addToCart } = useAppContext();
  const [addedItems, setAddedItems] = useState<{ [key: number]: boolean }>({});
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [animations, setAnimations] = useState<{ [key: number]: boolean }>({});
  const [isLoading, setIsLoading] = useState(true);
  
  // Имитируем загрузку данных при первом рендере и при изменении фильтра
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Задержка загрузки для демонстрации эффекта
    
    return () => clearTimeout(timer);
  }, [activeFilter]);
  
  // Получить или установить количество для товара
  const getQuantity = useCallback((itemId: number) => {
    return quantities[itemId] || 1;
  }, [quantities]);
  
  // Увеличить количество товара
  const increaseQuantity = useCallback((itemId: number) => {
    setQuantities(prev => ({ ...prev, [itemId]: Math.min((prev[itemId] || 1) + 1, 10) }));
  }, []);
  
  // Уменьшить количество товара
  const decreaseQuantity = useCallback((itemId: number) => {
    setQuantities(prev => ({ ...prev, [itemId]: Math.max((prev[itemId] || 1) - 1, 1) }));
  }, []);
  
  // Обработчик добавления в корзину
  const handleAddToCart = useCallback((item: MenuItem) => {
    // Предотвращаем повторное добавление если кнопка уже в состоянии "Добавлено"
    if (addedItems[item.id]) return;
    
    // Устанавливаем состояние "Добавлено" для этого товара
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    
    // Получаем текущее количество
    const quantity = getQuantity(item.id);
    
    // Запускаем анимацию
    setAnimations(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAnimations(prev => ({ ...prev, [item.id]: false }));
    }, 800);
    
    // Добавляем в корзину с указанным количеством
    addToCart({
      ...item,
      quantity: quantity
    });
    
    // Сбрасываем состояние через 1.5 секунды
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  }, [addToCart, addedItems, getQuantity]);
  
  // Мемоизированное фильтрованное меню
  const filteredItems = useMemo(() => {
    // Преобразуем исходные категории меню, чтобы отображать супы отдельно
    const processedItems = menuItems.map(item => ({
      ...item,
      // Если название содержит "суп" или "бульон", переназначаем категорию на soups
      category: item.name.toLowerCase().includes('суп') || 
               item.name.toLowerCase().includes('бульон') || 
               item.name.toLowerCase().includes('шурпа') || 
               item.name.toLowerCase().includes('лагман') ? 
               'soups' : item.category
    }));
    
    if (activeFilter === 'all') {
      return processedItems;
    }
    return processedItems.filter(item => item.category === activeFilter && item.available);
  }, [menuItems, activeFilter]);
  
  // Обработчик изменения фильтра
  const handleFilterChange = useCallback((filterId: string) => {
    setActiveFilter(filterId);
  }, []);
  
  // Обновляем компонент загрузки
  const loadingComponent = useMemo(() => (
    <LoadingSpinner text="Загрузка меню..." />
  ), []);
  
  // Мемоизированное содержимое меню
  const menuContent = useMemo(() => {
    if (isLoading) {
      return loadingComponent;
    }
    
    if (filteredItems.length === 0) {
      return (
        <EmptyState>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 2h18"></path>
            <path d="M10 11v4"></path>
            <path d="M14 9v6"></path>
            <path d="M4 22h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"></path>
          </svg>
          <h3>Нет доступных блюд</h3>
          <p>В данной категории пока нет блюд.</p>
        </EmptyState>
      );
    }
    
    return (
      <AnimatedFoodGrid>
        {filteredItems.map((item, index) => (
          <AnimatedFoodCard 
            key={item.id} 
            $delay={0.05 * (index % 8)} // Стаггерированная задержка, циклично для каждой строки
          >
            <ImageContainer>
              {/* Показываем тег категории */}
              <CategoryTag>
                {CATEGORY_NAMES[item.category] || 'Блюдо'}
              </CategoryTag>
              <FoodImage 
                src={item.imageUrl || '/food-placeholder.png'} 
                alt={item.name} 
                loading="lazy"
                onError={(e) => {
                  // Обработка ошибки загрузки изображения
                  (e.target as HTMLImageElement).src = '/food-placeholder.png';
                }}
              />
            </ImageContainer>
            <FoodDetails>
              <FoodName>{item.name}</FoodName>
              <FoodDescription>{item.description}</FoodDescription>
              <FoodPrice>₽{formatPrice(item.price)}</FoodPrice>
              
              {/* Контроль количества */}
              <QuantityControl>
                <QuantityButton 
                  onClick={() => decreaseQuantity(item.id)}
                  disabled={getQuantity(item.id) <= 1 || addedItems[item.id]}
                >
                  -
                </QuantityButton>
                <QuantityDisplay>{getQuantity(item.id)}</QuantityDisplay>
                <QuantityButton 
                  onClick={() => increaseQuantity(item.id)}
                  disabled={getQuantity(item.id) >= 10 || addedItems[item.id]}
                >
                  +
                </QuantityButton>
              </QuantityControl>
              
              {/* Кнопка добавления в корзину */}
              <AddToCartButton 
                onClick={() => handleAddToCart(item)}
                className={addedItems[item.id] ? 'added' : ''}
                disabled={addedItems[item.id]}
              >
                {animations[item.id] && (
                  <CartAnimation>+{getQuantity(item.id)}</CartAnimation>
                )}
                {addedItems[item.id] ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Добавлено
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                      <path d="M20 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {getQuantity(item.id) > 1 ? `Добавить (${getQuantity(item.id)})` : 'В корзину'}
                  </>
                )}
              </AddToCartButton>
            </FoodDetails>
          </AnimatedFoodCard>
        ))}
      </AnimatedFoodGrid>
    );
  }, [filteredItems, handleAddToCart, addedItems, getQuantity, increaseQuantity, decreaseQuantity, animations, isLoading, loadingComponent]);
  
  return (
    <MenuContainer>
      <MenuHeader>
        <MenuTitle>Меню</MenuTitle>
      </MenuHeader>
      
      <FiltersContainer>
        {MENU_FILTERS.map(filter => (
          <FilterButton 
            key={filter.id}
            $active={activeFilter === filter.id}
            onClick={() => handleFilterChange(filter.id)}
          >
            <span>{filter.icon}</span> {filter.name}
          </FilterButton>
        ))}
      </FiltersContainer>
      
      {menuContent}
    </MenuContainer>
  );
};

export default React.memo(RestaurantMenu); 