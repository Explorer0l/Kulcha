import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Container, 
  MainContent, 
  Heading, 
  Button,
  PageTransition
} from '../styles/Components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { useAppContext } from '../contexts/AppContext';
import useTelegram from '../hooks/useTelegram';

const SuccessContainer = styled(PageTransition)`
  min-height: 70vh;
`;

const SuccessContent = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const SuccessHeading = styled(Heading)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`;

const SuccessCard = styled.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  
  svg {
    color: white;
    width: 40px;
    height: 40px;
  }
`;

const OrderNumber = styled.h2`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
  color: var(--text-color);
`;

const OrderStatus = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: rgba(255, 159, 13, 0.15);
  color: var(--primary-color);
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-lg);
`;

const OrderMessage = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: var(--spacing-lg);
  line-height: 1.5;
`;

const OrderDetailsCard = styled.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const OrderDetailsTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
`;

const DetailsRow = styled.div`
  display: flex;
  margin-bottom: var(--spacing-sm);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailsLabel = styled.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
  width: 40%;
`;

const DetailsValue = styled.span`
  font-size: 0.95rem;
  color: var(--text-color);
  font-weight: 500;
`;

const OrderItemsList = styled.div`
  margin-top: var(--spacing-md);
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemName = styled.span`
  font-size: 0.95rem;
  color: var(--text-color);
`;

const ItemQuantity = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-left: var(--spacing-xs);
`;

const ItemPrice = styled.span`
  font-weight: 600;
  color: var(--text-color);
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const TotalLabel = styled.span`
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 500;
`;

const TotalValue = styled.span`
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 600;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const HomeButton = styled(Button)`
  flex: 1;
  padding: var(--spacing-md);
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

const OrderListButton = styled(Button)`
  flex: 1;
  padding: var(--spacing-md);
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    background-color: rgba(255, 159, 13, 0.1);
    transform: translateY(-2px);
  }
`;

const OrderSuccessPage: React.FC = () => {
  const { orderHistory } = useAppContext();
  const navigate = useNavigate();
  const { showBackButton, hideBackButton, setBackButtonCallback } = useTelegram();
  
  // Получаем последний заказ
  const lastOrder = orderHistory.length > 0 ? orderHistory[0] : null;
  
  useEffect(() => {
    hideBackButton();
    
    // Если нет заказа, перенаправляем на главную
    if (!lastOrder) {
      navigate('/');
    }
    
    return () => {
      showBackButton();
    };
  }, [hideBackButton, lastOrder, navigate, showBackButton]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Ожидает подтверждения';
      case 'confirmed':
        return 'Подтвержден';
      case 'preparing':
        return 'Готовится';
      case 'ready':
        return 'Готов к выдаче';
      case 'delivered':
        return 'Доставлен';
      default:
        return 'В обработке';
    }
  };
  
  if (!lastOrder) {
    return null;
  }

  return (
    <SuccessContainer>
      <Container>
        <Header />
        <Navigation />
        <MainContent>
          <SuccessContent>
            <SuccessHeading>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Заказ оформлен
              </div>
            </SuccessHeading>
            
            <SuccessCard>
              <SuccessIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </SuccessIcon>
              <OrderNumber>Заказ №{lastOrder.id}</OrderNumber>
              <OrderStatus>{getStatusLabel(lastOrder.status)}</OrderStatus>
              <OrderMessage>
                Спасибо за заказ! Мы уже начали его обрабатывать.<br />
                Вы можете отслеживать статус заказа в личном кабинете.
              </OrderMessage>
            </SuccessCard>
            
            <OrderDetailsCard>
              <OrderDetailsTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Детали заказа
              </OrderDetailsTitle>
              
              <DetailsRow>
                <DetailsLabel>Номер заказа:</DetailsLabel>
                <DetailsValue>#{lastOrder.id}</DetailsValue>
              </DetailsRow>
              
              <DetailsRow>
                <DetailsLabel>Дата и время:</DetailsLabel>
                <DetailsValue>{formatDate(lastOrder.date)}</DetailsValue>
              </DetailsRow>
              
              <DetailsRow>
                <DetailsLabel>Способ получения:</DetailsLabel>
                <DetailsValue>{lastOrder.deliveryMethod === 'delivery' ? 'Доставка' : 'Самовывоз'}</DetailsValue>
              </DetailsRow>
              
              <OrderDetailsTitle style={{ marginTop: 'var(--spacing-lg)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Состав заказа
              </OrderDetailsTitle>
              
              <OrderItemsList>
                {lastOrder.items.map((item, index) => (
                  <OrderItem key={index}>
                    <div>
                      <ItemName>{item.name}</ItemName>
                      <ItemQuantity>x{item.quantity}</ItemQuantity>
                    </div>
                    <ItemPrice>₽{item.price * item.quantity}</ItemPrice>
                  </OrderItem>
                ))}
              </OrderItemsList>
              
              <TotalRow>
                <TotalLabel>Итого:</TotalLabel>
                <TotalValue>₽{lastOrder.totalAmount}</TotalValue>
              </TotalRow>
            </OrderDetailsCard>
            
            <ButtonsContainer>
              <HomeButton onClick={() => navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                На главную
              </HomeButton>
              
              <OrderListButton onClick={() => navigate('/profile')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
                История заказов
              </OrderListButton>
            </ButtonsContainer>
          </SuccessContent>
        </MainContent>
      </Container>
    </SuccessContainer>
  );
};

export default OrderSuccessPage; 