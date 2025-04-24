import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useTelegram from '../hooks/useTelegram';
import { PageTransition } from '../styles/Components';
import { useAppContext } from '../contexts/AppContext';
import { City } from '../types/apiTypes';

const Container = styled(PageTransition)`
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--background-color);
  background-image: linear-gradient(to bottom, var(--background-color), var(--background-light));
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: var(--spacing-xl);
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(255, 159, 13, 0.3);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%);
  }

  img {
    width: 80px;
    height: 80px;
  }
`;

const Title = styled.h1`
  color: var(--text-color);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  font-size: 2.2rem;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  font-size: 1.2rem;
  max-width: 600px;
`;

const RoleCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  max-width: 400px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 800px;
  }
`;

const RoleCard = styled.div`
  flex: 1;
  background-color: var(--card-bg);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: var(--primary-color);
  }
`;

const RoleIcon = styled.div<{ $variant: 'user' | 'owner' }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.$variant === 'user' ? 'rgba(255, 159, 13, 0.1)' : 'rgba(59, 130, 246, 0.1)'};
  color: ${props => props.$variant === 'user' ? 'var(--primary-color)' : '#3B82F6'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  font-size: 2rem;
`;

const RoleTitle = styled.h2`
  color: var(--text-color);
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
  text-align: center;
`;

const RoleDescription = styled.p`
  color: var(--text-secondary);
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: var(--spacing-lg);
  line-height: 1.5;
`;

const ActionButton = styled.button<{ $variant: 'user' | 'owner' }>`
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-md);
  background-color: ${props => props.$variant === 'user' ? 'var(--primary-color)' : '#3B82F6'};
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: auto;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.$variant === 'user' 
      ? '0 4px 12px rgba(255, 159, 13, 0.3)' 
      : '0 4px 12px rgba(59, 130, 246, 0.3)'};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const RoleSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { } = useTelegram();
  const { setUserRole, cities } = useAppContext();

  // Загружаем города при первом рендере
  useEffect(() => {
    // Убедимся, что у нас есть данные о городах для выбора
    if (!cities || cities.length === 0) {
      // Создаем базовые города прямо в коде вместо использования mockData
      const defaultCities: City[] = [
        { id: 1, name: 'Москва' },
        { id: 2, name: 'Санкт-Петербург' },
        { id: 3, name: 'Казань' },
        { id: 4, name: 'Новосибирск' },
        { id: 5, name: 'Екатеринбург' }
      ];
      localStorage.setItem('cities', JSON.stringify(defaultCities));
    }
  }, [cities]);

  const handleUserSelect = () => {
    // Установим роль пользователя как "user"
    localStorage.setItem('userRole', 'user');
    setUserRole('user');
    
    // Перенаправляем на страницу выбора города
    navigate('/city-selection');
  };

  const handleOwnerSelect = () => {
    navigate('/admin/login');
  };

  return (
    <Container>
      <Logo>
        <img src="/assets/images/logo.png" alt="Kulcha Logo" />
      </Logo>
      <Title>Добро пожаловать в Kulcha!</Title>
      <Subtitle>Выберите, как вы хотите использовать наше приложение</Subtitle>
      
      <RoleCards>
        <RoleCard onClick={handleUserSelect}>
          <RoleIcon $variant="user">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="36" height="36">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </RoleIcon>
          <RoleTitle>Для клиентов</RoleTitle>
          <RoleDescription>
            Заказывайте ваши любимые блюда, следите за заказами и изучайте меню ресторанов
          </RoleDescription>
          <ActionButton $variant="user">
            Войти как клиент
          </ActionButton>
        </RoleCard>
        
        <RoleCard onClick={handleOwnerSelect}>
          <RoleIcon $variant="owner">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="36" height="36">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>
          </RoleIcon>
          <RoleTitle>Для владельцев</RoleTitle>
          <RoleDescription>
            Управляйте вашим рестораном, следите за статистикой и обновляйте меню
          </RoleDescription>
          <ActionButton $variant="owner">
            Войти как владелец
          </ActionButton>
        </RoleCard>
      </RoleCards>
    </Container>
  );
};

export default RoleSelectionPage; 