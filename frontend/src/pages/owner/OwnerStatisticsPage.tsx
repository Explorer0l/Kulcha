import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageTransition } from '../../styles/Components';
import { 
  getRestaurantData, 
  getRestaurantOrders,
  RestaurantAdminData,
  AdminOrder,
} from '../../data/adminDatabase';
import { useAppContext } from '../../contexts/AppContext';

const Container = styled(PageTransition)`
  min-height: 100vh;
  background-color: var(--background-color);
  padding-bottom: var(--spacing-xl);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding-bottom: var(--spacing-md);
  }
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-color), var(--primary-light));
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-sm);
    position: sticky;
    top: 0;
    z-index: 100;
  }
`;

const Title = styled.h1`
  color: var(--text-color);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  svg {
    color: var(--primary-color);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 1.3rem;
    width: 100%;
    justify-content: center;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    padding-bottom: var(--spacing-xs);
    justify-content: flex-start;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    padding: 0 var(--spacing-sm);
    
    /* Скрываем полосу прокрутки, но сохраняем функциональность */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ActionButton = styled.button<{ $variant?: 'primary' | 'warning' | 'danger' }>`
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-md);
  background-color: ${props => {
    switch (props.$variant) {
      case 'primary': return 'var(--primary-color)';
      case 'warning': return 'var(--warning-color)';
      case 'danger': return 'var(--error-color)';
      default: return 'var(--primary-color)';
    }
  }};
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex-shrink: 0;
    font-size: 0.85rem;
    padding: var(--spacing-xs) var(--spacing-sm);
    scroll-snap-align: start;
    min-width: max-content;
    margin-right: var(--spacing-xs);
    
    &:last-child {
      margin-right: var(--spacing-sm);
    }
  }
`;

const MainContent = styled.div`
  padding: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const RestaurantInfoCard = styled.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color), var(--primary-light));
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: var(--spacing-md);
    gap: var(--spacing-md);
  }
`;

const RestaurantInfo = styled.div`
  flex: 1;
  min-width: 280px;
`;

const RestaurantName = styled.h2`
  color: var(--text-color);
  font-size: 1.5rem;
  margin-bottom: var(--spacing-xs);
`;

const RestaurantAddress = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`;

const RestaurantDescription = styled.p`
  color: var(--text-color);
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
  }
`;

const StatCard = styled.div`
  background-color: var(--card-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-color), var(--primary-light));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--primary-color);
    margin-right: var(--spacing-sm);
  }
`;

const StatTitle = styled.div`
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: var(--spacing-sm) 0;
  color: var(--text-color);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StatChange = styled.div<{ $isPositive?: boolean }>`
  font-size: 0.9rem;
  color: ${props => props.$isPositive ? 'var(--success-color)' : 'var(--error-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;

const SectionTitle = styled.h2`
  color: var(--text-color);
  margin: var(--spacing-xl) 0 var(--spacing-md) 0;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-sm);
    color: var(--primary-color);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: var(--spacing-lg) 0 var(--spacing-sm) 0;
    padding: 0 var(--spacing-sm);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: var(--spacing-sm);
      width: 40px;
      height: 3px;
      background: var(--primary-color);
      border-radius: var(--border-radius-sm);
    }
  }
`;

const ChartContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: var(--spacing-xl);
  height: 300px;
  position: relative;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: var(--spacing-md);
    height: 250px;
    margin-bottom: var(--spacing-lg);
  }
`;

const NoDataMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: var(--spacing-md);
    opacity: 0.5;
  }
`;

const OrdersTable = styled.div`
  width: 100%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: var(--spacing-md);
`;

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.8fr 0.8fr;
  background-color: var(--card-bg);
  padding: var(--spacing-md);
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
  
  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 1fr 0.8fr 0.8fr;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.8fr 0.8fr;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
  background-color: var(--card-bg);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 1fr 0.8fr 0.8fr;
  }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    &:nth-child(3) {
      display: none;
    }
  }
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  background-color: ${(props) => {
    switch (props.$status) {
      case 'completed':
        return 'var(--success-bg)';
      case 'pending':
        return 'var(--warning-bg)';
      case 'cancelled':
        return 'var(--error-bg)';
      default:
        return 'var(--card-hover)';
    }
  }};
  color: ${(props) => {
    switch (props.$status) {
      case 'completed':
        return 'var(--success-color)';
      case 'pending':
        return 'var(--warning-color)';
      case 'cancelled':
        return 'var(--error-color)';
      default:
        return 'var(--text-color)';
    }
  }};
`;

const OrdersSection = styled.div`
  margin-bottom: var(--spacing-xl);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-lg);
  }
`;

const OrdersTabs = styled.div`
  display: flex;
  margin-bottom: var(--spacing-md);
  padding: 10px 0;
  background-color: #222;
  border-radius: 12px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 12px 8px;
    white-space: nowrap;
    gap: var(--spacing-xs);
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    position: sticky;
    top: 0;
    background-color: #222;
    z-index: 10;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    
    /* Скрываем полосу прокрутки, но сохраняем функциональность */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const OrdersTab = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  background: ${props => props.$isActive ? 'rgba(255, 159, 13, 0.15)' : 'transparent'};
  border: none;
  border-radius: 8px;
  color: ${props => props.$isActive ? '#FF9F0D' : 'var(--text-muted)'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 10px; /* Добавляем отступ между кнопками */
  
  &:hover {
    color: #FF9F0D;
    background: rgba(255, 159, 13, 0.05);
  }
  
  &:last-child {
    margin-right: 0; /* Убираем отступ у последней кнопки */
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 8px 12px;
    white-space: nowrap;
    font-size: 0.9rem;
    min-width: auto;
    flex-shrink: 0;
    scroll-snap-align: start;
    margin-right: 8px; /* Уменьшаем отступ на мобильных устройствах */
    
    &:first-child {
      margin-left: var(--spacing-xs);
    }
    
    &:last-child {
      margin-right: var(--spacing-xs);
    }
  }
`;

// Create custom colored tab components for each category
const AllOrdersTab = styled(OrdersTab)`
  &:hover, &[data-active="true"] {
    color: #FF9F0D;
    background: ${props => props.$isActive ? 'rgba(255, 159, 13, 0.15)' : 'rgba(255, 159, 13, 0.05)'};
  }
`;

const PendingOrdersTab = styled(OrdersTab)`
  &:hover, &[data-active="true"] {
    color: #FFC107;
    background: ${props => props.$isActive ? 'rgba(255, 193, 7, 0.15)' : 'rgba(255, 193, 7, 0.05)'};
  }
`;

const CompletedOrdersTab = styled(OrdersTab)`
  &:hover, &[data-active="true"] {
    color: #4CAF50;
    background: ${props => props.$isActive ? 'rgba(76, 175, 80, 0.15)' : 'rgba(76, 175, 80, 0.05)'};
  }
`;

const CancelledOrdersTab = styled(OrdersTab)`
  &:hover, &[data-active="true"] {
    color: #F44336;
    background: ${props => props.$isActive ? 'rgba(244, 67, 54, 0.15)' : 'rgba(244, 67, 54, 0.05)'};
  }
`;

const DeliveryOrdersTab = styled(OrdersTab)`
  &:hover, &[data-active="true"] {
    color: #2196F3;
    background: ${props => props.$isActive ? 'rgba(33, 150, 243, 0.15)' : 'rgba(33, 150, 243, 0.05)'};
  }
`;

const PickupOrdersTab = styled(OrdersTab)`
  &:hover, &[data-active="true"] {
    color: #9C27B0;
    background: ${props => props.$isActive ? 'rgba(156, 39, 176, 0.15)' : 'rgba(156, 39, 176, 0.05)'};
  }
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    gap: var(--spacing-sm);
  }
`;

const OrderCard = styled.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
`;

const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
  }
`;

const OrderInfo = styled.div`
  flex: 1;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OrderItems = styled.div`
  flex: 2;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid var(--border-color-light);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex: 3;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex: 1 0 100%;
    margin-bottom: var(--spacing-xs);
  }
`;

const ItemName = styled.div`
  font-weight: 500;
  color: var(--text-color);
`;

const ItemQuantity = styled.div`
  flex: 1;
  color: var(--text-muted);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const ItemPrice = styled.div`
  flex: 1;
  text-align: right;
  font-weight: 500;
  color: var(--text-color);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex: 1;
    text-align: right;
  }
`;

const OrderSummary = styled.div`
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-sm);
  }
`;

const OrderTotal = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-color);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    text-align: right;
  }
`;

const OrderDate = styled.div`
  color: var(--text-muted);
  font-size: 0.9rem;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const NoOrdersMessage = styled.div`
  padding: var(--spacing-xl);
  text-align: center;
  color: var(--text-muted);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`;

const AnalyticsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
  }
`;

const RankingCard = styled.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const RankingTitle = styled.h3`
  color: var(--text-color);
  margin: 0 0 var(--spacing-md) 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-sm);
    color: var(--primary-color);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const RankingItem = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  background-color: var(--card-hover);
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: var(--spacing-xs);
  }
`;

const RankingNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: var(--spacing-sm);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
  }
`;

const RankingName = styled.div`
  flex: 1;
  color: var(--text-color);
  font-weight: 500;
`;

const RankingValue = styled.div`
  color: var(--text-muted);
  font-size: 0.9rem;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Добавим компонент для индикатора положения скролла в мобильной версии
const ScrollIndicator = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: var(--spacing-xs);
    
    span {
      width: 6px;
      height: 6px;
      margin: 0 4px;
      border-radius: 50%;
      background-color: var(--border-color);
      transition: all 0.2s ease;
      
      &.all-active {
        background-color: #FF9F0D;
      }
      
      &.pending-active {
        background-color: #FFC107;
      }
      
      &.completed-active {
        background-color: #4CAF50;
      }
      
      &.cancelled-active {
        background-color: #F44336;
      }
      
      &.delivery-active {
        background-color: #2196F3;
      }
      
      &.pickup-active {
        background-color: #9C27B0;
      }
    }
  }
`;

interface UserInfo {
  id: number;
  name: string;
  email: string;
  restaurantId: number;
}

// Упрощённый интерфейс для Telegram WebApp API
interface TelegramWebApp {
  expand: () => void;
  BackButton: {
    show: () => void;
    hide: () => void;
    onClick: (cb: () => void) => void;
  };
}

// Extend the AdminOrder interface to include deliveryMethod
interface ExtendedAdminOrder extends AdminOrder {
  deliveryMethod?: 'delivery' | 'pickup';
}

const OwnerStatisticsPage: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useAppContext();
  const [restaurantData, setRestaurantData] = useState<RestaurantAdminData | null>(null);
  const [orders, setOrders] = useState<ExtendedAdminOrder[]>([]);
  const [completedOrders, setCompletedOrders] = useState<ExtendedAdminOrder[]>([]);
  const [pendingOrders, setPendingOrders] = useState<ExtendedAdminOrder[]>([]);
  const [restaurantRevenue, setRestaurantRevenue] = useState<number>(0);
  const [orderCount, setOrderCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  // Add state for active tab
  const [activeTab, setActiveTab] = useState<string>('all');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      const storedUser = localStorage.getItem('adminUser') || localStorage.getItem('currentUser');
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const userRole = localStorage.getItem('userRole');
      
      console.log('Auth state:', { storedUser: !!storedUser, isAuthenticated, userRole });
      
      if (storedUser && isAuthenticated === 'true' && userRole === 'admin') {
        try {
          const parsedUser = JSON.parse(storedUser) as UserInfo;
          setUserInfo(parsedUser);
          
          // Выводим текущее содержимое локального хранилища для отладки
          console.log('Current localStorage adminOrders:', localStorage.getItem('adminOrders'));
          console.log('Current localStorage restaurantAdminData:', localStorage.getItem('restaurantAdminData'));
          
          // Получаем данные ресторана
          const restaurant = await getRestaurantData(parsedUser.restaurantId);
          console.log('Restaurant data:', restaurant);
          
          if (restaurant) {
            setRestaurantData(restaurant);
            // Рассчитываем общую выручку
            setRestaurantRevenue(restaurant.totalRevenue || 0);
            // Получаем количество заказов
            setOrderCount(restaurant.totalOrders || 0);
          } else {
            console.warn('Restaurant data not found for ID:', parsedUser.restaurantId);
          }
          
          // Получаем заказы ресторана
          const ordersData = await getRestaurantOrders(parsedUser.restaurantId);
          console.log('Restaurant orders:', ordersData);
          
          if (ordersData && ordersData.length > 0) {
            // Добавляем deliveryMethod как случайное значение для демонстрации
            const extendedOrders = ordersData.map(order => ({
              ...order,
              deliveryMethod: Math.random() > 0.5 ? 'delivery' as const : 'pickup' as const
            }));
            
            setOrders(extendedOrders);
            
            // Фильтруем заказы по статусу
            const completed = extendedOrders.filter(order => order.status === 'completed');
            const pending = extendedOrders.filter(order => order.status === 'pending');
            console.log('Completed orders:', completed.length, 'Pending orders:', pending.length);
            setCompletedOrders(completed);
            setPendingOrders(pending);
          } else {
            setOrders([]);
            setCompletedOrders([]);
            setPendingOrders([]);
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
          navigate('/admin/login');
        }
      } else {
        // Если пользователь не авторизован, перенаправляем на страницу входа
        console.log('User is not authenticated, redirecting to login');
        navigate('/admin/login');
      }
      
      setIsLoading(false);
    };
    
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    // Удаляем все ключи, связанные с аутентификацией
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
    localStorage.removeItem('adminUser');
    
    // Перенаправляем на страницу выбора роли
    navigate('/role-selection');
  };

  const handleMenuManagement = () => {
    navigate('/owner/menu');
  };

  // Функция для форматирования даты
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Функция для форматирования суммы
  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('ru-RU') + ' ₽';
  };

  // Функция обновления данных
  const handleRefresh = async () => {
    console.log('Refreshing data...');
    setIsLoading(true);
    
    const storedUser = localStorage.getItem('adminUser') || localStorage.getItem('currentUser');
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser) as UserInfo;
        console.log('User info:', parsedUser);
        
        // Получаем актуальные данные ресторана
        console.log('Fetching restaurant data for ID:', parsedUser.restaurantId);
        const restaurant = await getRestaurantData(parsedUser.restaurantId);
        if (restaurant) {
          console.log('Refreshed restaurant data:', restaurant);
          setRestaurantData(restaurant);
          setRestaurantRevenue(restaurant.totalRevenue || 0);
          setOrderCount(restaurant.totalOrders || 0);
        } else {
          console.error('Failed to fetch restaurant data - null returned');
          alert('Не удалось загрузить данные ресторана. Пожалуйста, попробуйте позже.');
        }
        
        // Получаем актуальные заказы
        console.log('Fetching restaurant orders for ID:', parsedUser.restaurantId);
        const ordersData = await getRestaurantOrders(parsedUser.restaurantId);
        console.log('Refreshed orders:', ordersData);
        
        if (ordersData && ordersData.length > 0) {
          // Добавляем deliveryMethod как случайное значение для демонстрации
          const extendedOrders = ordersData.map(order => ({
            ...order,
            deliveryMethod: Math.random() > 0.5 ? 'delivery' as const : 'pickup' as const
          }));
          
          console.log('Extended orders with delivery method:', extendedOrders);
          setOrders(extendedOrders);
          setCompletedOrders(extendedOrders.filter(order => order.status === 'completed'));
          setPendingOrders(extendedOrders.filter(order => order.status === 'pending'));
        } else {
          console.log('No orders found or empty array returned');
          setOrders([]);
          setCompletedOrders([]);
          setPendingOrders([]);
        }
      } catch (error) {
        console.error("Error refreshing data:", error);
        alert(`Ошибка при обновлении данных: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
      }
    } else {
      console.error("No user data found in localStorage");
      alert('Пользователь не найден. Пожалуйста, войдите в систему заново.');
      handleLogout();
    }
    
    setIsLoading(false);
  };

  // Интеграция с Telegram WebApp
  useEffect(() => {
    // Безопасная проверка наличия Telegram WebApp API
    const telegram = window.Telegram;
    const telegramWebApp = telegram && telegram.WebApp;
    
    if (telegramWebApp) {
      try {
        // Базовые функции, которые должны поддерживаться всеми версиями WebApp
        telegramWebApp.expand();
        telegramWebApp.BackButton.show();
        telegramWebApp.BackButton.onClick(() => navigate('/owner/menu'));
        
        // Дополнительные функции, проверяем их наличие перед вызовом
        // @ts-ignore - игнорируем проблемы типизации для методов WebApp API
        if (typeof telegramWebApp.enableClosingConfirmation === 'function') {
          // @ts-ignore
          telegramWebApp.enableClosingConfirmation();
        }
        
        // @ts-ignore
        if (typeof telegramWebApp.setHeaderColor === 'function') {
          // @ts-ignore
          telegramWebApp.setHeaderColor('#FF9F0D');
        }
        
        // @ts-ignore
        if (typeof telegramWebApp.setBackgroundColor === 'function') {
          // @ts-ignore
          telegramWebApp.setBackgroundColor('#181818');
        }
        
        return () => {
          // Очистка при размонтировании
          telegramWebApp.BackButton.onClick(() => {}); // Сбрасываем обработчик
          
          // @ts-ignore
          if (typeof telegramWebApp.disableClosingConfirmation === 'function') {
            // @ts-ignore
            telegramWebApp.disableClosingConfirmation();
          }
        };
      } catch (error) {
        console.error('Error setting up Telegram WebApp:', error);
      }
    }
  }, [navigate]);

  // Update the useEffect to respond to activeTab changes
  useEffect(() => {
    // Функция для прокрутки к активному табу
    const scrollToActiveTab = () => {
      const activeTabs = document.querySelectorAll('[data-active="true"]');
      if (activeTabs.length > 0) {
        const activeTab = activeTabs[0] as HTMLElement;
        if (activeTab && activeTab.parentElement) {
          // Скроллим контейнер до активного таба с учетом отступов
          activeTab.parentElement.scrollLeft = activeTab.offsetLeft - 16;
        }
      }
    };
    
    // Вызываем функцию после монтирования компонента и при изменении активного таба
    scrollToActiveTab();
  }, [activeTab]); // Добавляем activeTab в массив зависимостей

  if (isLoading) {
    return (
      <Container>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          color: 'var(--text-color)'
        }}>
          Загрузка...
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <DashboardHeader>
        <Title>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
          </svg>
          Панель владельца ресторана
        </Title>
        <ButtonsContainer>
          <ActionButton onClick={handleRefresh}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 2v6h-6"></path>
              <path d="M3 12a9 9 0 0 1 15-6.7l3-3"></path>
              <path d="M3 22v-6h6"></path>
              <path d="M21 12a9 9 0 0 1-15 6.7l-3 3"></path>
            </svg>
            Обновить данные
          </ActionButton>
          <ActionButton onClick={handleMenuManagement}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M2 12h20"></path>
            </svg>
            Управление меню
          </ActionButton>
          <ActionButton $variant="danger" onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Выйти
          </ActionButton>
        </ButtonsContainer>
      </DashboardHeader>

      <MainContent>
        {/* Информация о ресторане */}
        {restaurantData && (
          <RestaurantInfoCard>
            <RestaurantInfo>
              <RestaurantName>{restaurantData.name}</RestaurantName>
              <RestaurantAddress>{restaurantData.address}, {restaurantData.city}</RestaurantAddress>
              <RestaurantDescription>{restaurantData.description}</RestaurantDescription>
            </RestaurantInfo>
          </RestaurantInfoCard>
        )}

        {/* Основная статистика */}
        <StatsGrid>
          <StatCard>
            <StatHeader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <StatTitle>Общая выручка</StatTitle>
            </StatHeader>
            <StatValue>{formatCurrency(restaurantData?.totalRevenue || 0)}</StatValue>
            <StatChange $isPositive={true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              За все время
            </StatChange>
            <div 
              style={{ 
                height: '4px', 
                background: 'var(--primary-light)', 
                marginTop: 'var(--spacing-md)',
                borderRadius: 'var(--border-radius-sm)',
                position: 'relative'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  height: '100%', 
                  width: `${Math.min(100, (restaurantData?.totalRevenue || 0) / 1000)}%`, 
                  background: 'var(--primary-color)', 
                  borderRadius: 'var(--border-radius-sm)' 
                }}
              />
            </div>
          </StatCard>

          <StatCard>
            <StatHeader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <StatTitle>Чистая прибыль</StatTitle>
            </StatHeader>
            <StatValue>{formatCurrency(restaurantData?.netProfit || 0)}</StatValue>
            <StatChange $isPositive={true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              За все время
            </StatChange>
            <div 
              style={{ 
                height: '4px', 
                background: 'var(--secondary-light)', 
                marginTop: 'var(--spacing-md)',
                borderRadius: 'var(--border-radius-sm)',
                position: 'relative'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  height: '100%', 
                  width: `${Math.min(100, (restaurantData?.netProfit || 0) / 500)}%`, 
                  background: 'var(--secondary-color)', 
                  borderRadius: 'var(--border-radius-sm)' 
                }}
              />
            </div>
          </StatCard>

          <StatCard>
            <StatHeader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <StatTitle>Всего заказов</StatTitle>
            </StatHeader>
            <StatValue>{restaurantData?.totalOrders || 0}</StatValue>
            <StatChange $isPositive={true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              За все время
            </StatChange>
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginTop: 'var(--spacing-md)'
              }}
            >
              {[...Array(5)].map((_, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    width: '16px', 
                    height: '16px', 
                    margin: '0 3px', 
                    borderRadius: '50%', 
                    backgroundColor: idx < Math.min(5, Math.ceil((restaurantData?.totalOrders || 0) / 20)) 
                      ? 'var(--success-color)' 
                      : 'var(--border-color)'
                  }} 
                />
              ))}
            </div>
          </StatCard>

          <StatCard>
            <StatHeader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <StatTitle>Средний чек</StatTitle>
            </StatHeader>
            <StatValue>{formatCurrency(restaurantData?.averageOrderValue || 0)}</StatValue>
            <StatChange $isPositive={true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              За все время
            </StatChange>
            <div 
              style={{ 
                height: '4px', 
                background: 'var(--warning-bg)', 
                marginTop: 'var(--spacing-md)',
                borderRadius: 'var(--border-radius-sm)',
                position: 'relative'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  height: '100%', 
                  width: `${Math.min(100, (restaurantData?.averageOrderValue || 0) / 20)}%`, 
                  background: 'var(--warning-color)', 
                  borderRadius: 'var(--border-radius-sm)' 
                }}
              />
            </div>
          </StatCard>
        </StatsGrid>

        {/* График выручки */}
        <SectionTitle>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          Динамика выручки
        </SectionTitle>
        <ChartContainer>
          {orders.length === 0 ? (
            <NoDataMessage>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              <p>Недостаточно данных для отображения графика</p>
            </NoDataMessage>
          ) : (
            <div>
              {/* Здесь будет подключена библиотека визуализации графиков */}
              <NoDataMessage>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
                <p>В будущем здесь будет подключена визуализация</p>
              </NoDataMessage>
            </div>
          )}
        </ChartContainer>

        {/* Последние заказы */}
        <SectionTitle>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          Последние заказы
        </SectionTitle>
        
        <OrdersSection>
          <OrdersTabs>
            <AllOrdersTab 
              $isActive={activeTab === 'all'} 
              data-active={activeTab === 'all' ? 'true' : 'false'}
              onClick={() => setActiveTab('all')}
            >
              Все заказы
            </AllOrdersTab>
            <PendingOrdersTab 
              $isActive={activeTab === 'pending'} 
              data-active={activeTab === 'pending' ? 'true' : 'false'}
              onClick={() => setActiveTab('pending')}
            >
              В обработке
            </PendingOrdersTab>
            <CompletedOrdersTab 
              $isActive={activeTab === 'completed'} 
              data-active={activeTab === 'completed' ? 'true' : 'false'}
              onClick={() => setActiveTab('completed')}
            >
              Выполненные
            </CompletedOrdersTab>
            <CancelledOrdersTab 
              $isActive={activeTab === 'cancelled'} 
              data-active={activeTab === 'cancelled' ? 'true' : 'false'}
              onClick={() => setActiveTab('cancelled')}
            >
              Отмененные
            </CancelledOrdersTab>
            <DeliveryOrdersTab 
              $isActive={activeTab === 'delivery'} 
              data-active={activeTab === 'delivery' ? 'true' : 'false'}
              onClick={() => setActiveTab('delivery')}
            >
              Доставка
            </DeliveryOrdersTab>
            <PickupOrdersTab 
              $isActive={activeTab === 'pickup'} 
              data-active={activeTab === 'pickup' ? 'true' : 'false'}
              onClick={() => setActiveTab('pickup')}
            >
              Самовывоз
            </PickupOrdersTab>
          </OrdersTabs>
          
          {/* Индикатор скролла для мобильных устройств */}
          <ScrollIndicator>
            <span className={activeTab === 'all' ? 'all-active' : ''}></span>
            <span className={activeTab === 'pending' ? 'pending-active' : ''}></span>
            <span className={activeTab === 'completed' ? 'completed-active' : ''}></span>
            <span className={activeTab === 'cancelled' ? 'cancelled-active' : ''}></span>
            <span className={activeTab === 'delivery' ? 'delivery-active' : ''}></span>
            <span className={activeTab === 'pickup' ? 'pickup-active' : ''}></span>
          </ScrollIndicator>
          
          {/* Display orders based on active tab */}
          <OrdersList>
            {(activeTab === 'all' ? orders :
              activeTab === 'pending' ? pendingOrders :
              activeTab === 'completed' ? completedOrders :
              activeTab === 'cancelled' ? orders.filter(o => o.status === 'cancelled') :
              activeTab === 'delivery' ? orders.filter(o => o.deliveryMethod === 'delivery') :
              orders.filter(o => o.deliveryMethod === 'pickup')
            ).length > 0 ? (
              (activeTab === 'all' ? orders :
                activeTab === 'pending' ? pendingOrders :
                activeTab === 'completed' ? completedOrders :
                activeTab === 'cancelled' ? orders.filter(o => o.status === 'cancelled') :
                activeTab === 'delivery' ? orders.filter(o => o.deliveryMethod === 'delivery') :
                orders.filter(o => o.deliveryMethod === 'pickup')
              ).map((order) => (
                <OrderCard key={order.id}>
                  <OrderHeader>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                      <strong>#{order.id}</strong>
                      <StatusBadge $status={order.status}>
                        {order.status === 'completed' ? 'Выполнен' : 
                         order.status === 'pending' ? 'В обработке' : 'Отменен'}
                      </StatusBadge>
                    </div>
                    <OrderDate>{formatDate(order.date)}</OrderDate>
                  </OrderHeader>
                  <OrderDetails>
                    <OrderInfo>
                      <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                        <strong>Клиент:</strong> {order.customer}
                      </div>
                      {order.deliveryMethod && (
                        <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                          <strong>Способ получения:</strong> {order.deliveryMethod === 'delivery' ? 'Доставка' : 'Самовывоз'}
                        </div>
                      )}
                    </OrderInfo>
                  </OrderDetails>
                  <OrderSummary>
                    <div>
                      <strong>Сумма заказа:</strong>
                    </div>
                    <OrderTotal>{formatCurrency(order.amount)}</OrderTotal>
                  </OrderSummary>
                </OrderCard>
              ))
            ) : (
              <NoOrdersMessage>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 16px', display: 'block', opacity: 0.6 }}>
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <p>Нет заказов в этой категории.</p>
              </NoOrdersMessage>
            )}
          </OrdersList>
        </OrdersSection>
      </MainContent>
    </Container>
  );
};

export default OwnerStatisticsPage; 