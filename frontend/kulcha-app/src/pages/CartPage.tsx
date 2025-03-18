import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Container, 
  MainContent, 
  Heading, 
  Button,
  EmptyState,
  PageTransition
} from '../styles/Components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { useAppContext } from '../contexts/AppContext';
import useTelegram from '../hooks/useTelegram';

const CartContainer = styled(PageTransition)`
  min-height: 70vh;
`;

const CartContent = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const CartHeading = styled(Heading)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`;

const CartItemsContainer = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-color);
`;

const ItemPrice = styled.div`
  font-weight: 600;
  color: var(--primary-color);
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  margin-left: var(--spacing-md);
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--primary-light);
  }
  
  &:disabled {
    background-color: var(--primary-dark);
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const QuantityText = styled.span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
  color: var(--text-color);
  font-weight: 600;
`;

const Summary = styled.div`
  background-color: var(--card-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  
  &:last-child {
    margin-bottom: 0;
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const SummaryLabel = styled.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const SummaryValue = styled.span`
  font-weight: 600;
  color: var(--text-color);
`;

const TotalLabel = styled(SummaryLabel)`
  font-size: 1.1rem;
  color: var(--text-color);
`;

const TotalValue = styled(SummaryValue)`
  font-size: 1.2rem;
  color: var(--primary-color);
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const CartPage: React.FC = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useAppContext();
  const navigate = useNavigate();
  const { showBackButton, hideBackButton, setBackButtonCallback } = useTelegram();
  
  useEffect(() => {
    showBackButton();
    
    setBackButtonCallback(() => {
      navigate(-1);
    });

    return () => {
      hideBackButton();
    };
  }, [hideBackButton, navigate, setBackButtonCallback, showBackButton]);
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  const deliveryFee = 150;
  const subtotal = calculateTotal();
  const total = subtotal + deliveryFee;

  return (
    <CartContainer>
      <Container>
        <Header />
        <Navigation />
        <MainContent>
          <CartContent>
            <CartHeading>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Your Cart
              </div>
              {cart.length > 0 && (
                <span style={{ fontSize: '1.1rem' }}>{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
              )}
            </CartHeading>
            
            {cart.length === 0 ? (
              <EmptyState>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <h3>Your cart is empty</h3>
                <p>Add some delicious items to your cart and come back!</p>
                <Button onClick={() => navigate('/')}>
                  Browse Menu
                </Button>
              </EmptyState>
            ) : (
              <>
                <CartItemsContainer>
                  {cart.map(item => (
                    <CartItem key={item.id}>
                      <ItemDetails>
                        <ItemName>{item.name}</ItemName>
                        <ItemPrice>₽{item.price}</ItemPrice>
                      </ItemDetails>
                      <QuantityContainer>
                        <QuantityButton 
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label="Decrease quantity"
                        >
                          {item.quantity === 1 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          )}
                        </QuantityButton>
                        <QuantityText>{item.quantity}</QuantityText>
                        <QuantityButton 
                          onClick={() => increaseQuantity(item.id)}
                          aria-label="Increase quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </QuantityButton>
                      </QuantityContainer>
                    </CartItem>
                  ))}
                </CartItemsContainer>
                
                <Summary>
                  <SummaryRow>
                    <SummaryLabel>Subtotal</SummaryLabel>
                    <SummaryValue>₽{subtotal}</SummaryValue>
                  </SummaryRow>
                  <SummaryRow>
                    <SummaryLabel>Delivery Fee</SummaryLabel>
                    <SummaryValue>₽{deliveryFee}</SummaryValue>
                  </SummaryRow>
                  <SummaryRow>
                    <TotalLabel>Total</TotalLabel>
                    <TotalValue>₽{total}</TotalValue>
                  </SummaryRow>
                  
                  <CheckoutButton onClick={handleCheckout}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Proceed to Checkout
                  </CheckoutButton>
                </Summary>
              </>
            )}
          </CartContent>
        </MainContent>
      </Container>
    </CartContainer>
  );
};

export default CartPage; 