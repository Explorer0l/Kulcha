import React, { useState, memo, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../contexts/AppContext';
import { MenuItem } from '../data/adminDatabase';

export interface FoodItemProps {
  id: number;
  name: string;
  description?: string;
  price: number;
  item?: MenuItem; // For backwards compatibility
}

const EnhancedFoodCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  background-color: var(--card-bg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  &:hover {
    transform: translateY(-5px) rotateX(2deg);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  }
`;

const EnhancedFoodImage = styled.div<{ $imageUrl: string }>`
  height: 100%;
  background-image: ${props => `url(${props.$imageUrl})`};
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  
  ${EnhancedFoodCard}:hover & {
    transform: scale(1.05);
  }
`;

const FoodDetails = styled.div`
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const EnhancedFoodName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-color);
`;

const Description = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`;

const EnhancedFoodPrice = styled.div`
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.1rem;
  display: inline-block;
  padding: 4px 8px;
  background-color: rgba(255, 159, 13, 0.1);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-sm);
`;

const AddButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  margin-top: auto;
  overflow: hidden;
  position: relative;
  
  svg {
    margin-right: 6px;
    transition: transform 0.3s ease;
  }
  
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
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s ease;
  }
  
  &.ripple::after {
    animation: ripple 0.6s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
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

const Badge = styled.span`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background-color: var(--primary-color);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 20px;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

// Хелпер-функция для проверки URL изображения
const generateImageUrl = (url?: string): string => {
  // Если URL отсутствует или пустой
  if (!url || url.trim() === '') {
    return '/food-placeholder.png';
  }

  // Если это data URL или внешний URL, возвращаем как есть
  if (url.startsWith('data:image/') || url.startsWith('http')) {
    return url;
  }

  // В остальных случаях считаем, что это относительный путь
  return url;
};

// Оптимизированный компонент с мемоизацией
const FoodItem: React.FC<FoodItemProps> = memo(({ id, name, description, price, item }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useAppContext();
  const [isImageError, setIsImageError] = useState(false);
  
  // Use either the direct props or the item object
  const itemId = id || (item?.id ?? 0);
  const itemName = name || (item?.name ?? '');
  const itemDescription = description || (item?.description ?? '');
  const itemPrice = price || (item?.price ?? 0);
  
  // Получаем URL изображения с использованием нашей утилиты
  const imageUrl = generateImageUrl(item?.imageUrl);
  
  // Добавляем глобальные стили анимации
  useEffect(() => {
    // Создаем стиль для глобальной анимации, если его еще нет
    if (!document.getElementById('floating-animation-style')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'floating-animation-style';
      styleElement.innerHTML = `
        @keyframes float-up {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -200%) scale(1.5);
          }
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    // Очистка при размонтировании
    return () => {
      const styleElement = document.getElementById('floating-animation-style');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);
  
  const handleAddToCart = useCallback(() => {
    // Если кнопка уже показывает "Добавлено", не выполняем действие повторно
    if (isAdded) return;
    
    // Предотвращаем двойные клики
    setIsAdded(true);
    
    const menuItem = {
      id: itemId,
      name: itemName,
      price: itemPrice,
      description: itemDescription,
      imageUrl: imageUrl,
      restaurantId: 1,
      category: 'main',
      available: true,
      quantity: 1
    };
    
    // Добавляем товар в корзину только один раз
    addToCart(menuItem);
    
    // Активируем эффект ripple
    const button = document.getElementById(`add-button-${itemId}`);
    if (button) {
      button.classList.add('ripple');
      
      // Создаем и добавляем плавающие иконки "+1" при добавлении
      const floatingIcon = document.createElement('div');
      floatingIcon.innerHTML = '+1';
      floatingIcon.style.cssText = `
        position: absolute;
        color: white;
        font-weight: bold;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        animation: float-up 1s forwards;
        z-index: 10;
      `;
      
      button.appendChild(floatingIcon);
      
      // Удаляем плавающую иконку после завершения анимации
      setTimeout(() => {
        if (floatingIcon.parentNode === button) {
          button.removeChild(floatingIcon);
        }
        button.classList.remove('ripple');
      }, 1000);
    }
    
    // Вибрация для мобильных устройств (если доступно)
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Сбрасываем состояние через 1.5 секунды
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  }, [addToCart, itemId, itemName, itemPrice, itemDescription, imageUrl, isAdded]);
  
  const handleImageError = () => {
    console.log('Image loading error, using fallback image for', itemName);
    setIsImageError(true);
  };
  
  // Show the "Popular" badge for specific items
  const isPopular = [1, 3, 5].includes(itemId);
  
  return (
    <EnhancedFoodCard>
      {isPopular && <Badge>Популярное</Badge>}
      <ImageContainer>
        <EnhancedFoodImage $imageUrl={isImageError ? '/food-placeholder.png' : imageUrl} />
      </ImageContainer>
      <FoodDetails>
        <EnhancedFoodName>{itemName}</EnhancedFoodName>
        <Description>{itemDescription}</Description>
        <EnhancedFoodPrice>₽{itemPrice}</EnhancedFoodPrice>
        <AddButton 
          id={`add-button-${itemId}`}
          onClick={handleAddToCart}
          className={isAdded ? 'added' : ''}
          disabled={isAdded}
        >
          {isAdded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Добавлено
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              В корзину
            </>
          )}
        </AddButton>
      </FoodDetails>
    </EnhancedFoodCard>
  );
});

FoodItem.displayName = 'FoodItem';

export default FoodItem; 