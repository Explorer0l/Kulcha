import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../contexts/AppContext';
import { MenuItem } from '../contexts/AppContext';

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
  transition: all 0.2s ease;
  margin-top: auto;
  
  svg {
    margin-right: 6px;
  }
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
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

const FoodItem: React.FC<FoodItemProps> = ({ id, name, description, price, item }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useAppContext();
  
  // Use either the direct props or the item object
  const itemId = id || (item?.id ?? 0);
  const itemName = name || (item?.name ?? '');
  const itemDescription = description || (item?.description ?? '');
  const itemPrice = price || (item?.price ?? 0);
  
  // Get image URL based on food ID or generate a placeholder
  const getImageUrl = () => {
    const foodImages: Record<number, string> = {
      1: '/assets/images/paneer-tikka.jpg',     // Используем имеющиеся изображения
      2: '/assets/images/paneer-tikka.jpg',
      3: '/assets/images/chicken-biryani.jpg',
      4: '/assets/images/vegetable-samosa.jpg', // Исправляем имя файла
      5: '/assets/images/masala-dosa.jpg',      // Используем имеющееся изображение
      6: '/assets/images/gulab-jamun.jpg',
    };
    
    return foodImages[itemId] || `https://via.placeholder.com/400x300?text=${encodeURIComponent(itemName)}`;
  };
  
  const handleAddToCart = () => {
    const menuItem: MenuItem = {
      id: itemId,
      name: itemName,
      price: itemPrice,
      description: itemDescription,
      image: getImageUrl()
    };
    
    addToCart(menuItem);
    setIsAdded(true);
    
    // Reset the added state after a delay
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };
  
  // Show the "Popular" badge for specific items
  const isPopular = [1, 3, 5].includes(itemId);
  
  return (
    <EnhancedFoodCard>
      {isPopular && <Badge>Популярное</Badge>}
      <ImageContainer>
        <EnhancedFoodImage $imageUrl={getImageUrl()} />
      </ImageContainer>
      <FoodDetails>
        <EnhancedFoodName>{itemName}</EnhancedFoodName>
        <Description>{itemDescription}</Description>
        <EnhancedFoodPrice>₽{itemPrice}</EnhancedFoodPrice>
        <AddButton onClick={handleAddToCart}>
          {isAdded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Добавлено в корзину
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
};

export default FoodItem; 