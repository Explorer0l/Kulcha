import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartButton as StyledCartButton } from '../styles/Components';
import { useAppContext } from '../contexts/AppContext';

const CartButton: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useAppContext();
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <StyledCartButton onClick={handleCartClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
      {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
    </StyledCartButton>
  );
};

export default CartButton; 