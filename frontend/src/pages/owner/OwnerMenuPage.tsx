import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getMenuItems, MenuItem, updateMenuItem, createMenuItem, deleteMenuItem } from '../../data/adminDatabase';
import { useAppContext } from '../../contexts/AppContext';

// Основные стили компонентов
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
  background-color: #181818;
  min-height: 100vh;
  color: #f1f1f1;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #333;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, #FF9F0D, #ffb74d);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #181818;
    padding-top: 10px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  border: none;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #FF9F0D;
  color: white;
  &:hover {
    background-color: #f08c00;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #232323;
  color: white;
  border: 1px solid #333;
  &:hover {
    background-color: #181818;
  }
`;

const BackButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 1px solid #333;
  padding: 6px 12px;
  
  &:hover {
    background-color: #232323;
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 5px 10px;
    z-index: 101;
  }
`;

// Добавляем компонент для фильтрации по категориям
const CategoryFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
  background-color: #222;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    white-space: nowrap;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding: 12px 10px;
    position: sticky;
    top: 85px;
    z-index: 99;
    -ms-overflow-style: none;  /* для Internet Explorer и Edge */
    scrollbar-width: none;  /* для Firefox */
    
    &::-webkit-scrollbar {
      display: none; /* для Chrome, Safari и Opera */
    }
  }
`;

const CategoryFilter = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 15px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.active ? '#FF9F0D' : '#333'};
  color: white;
  font-weight: ${props => props.active ? '600' : '400'};
  box-shadow: ${props => props.active ? '0 4px 12px rgba(255, 159, 13, 0.3)' : 'none'};
  
  &:hover {
    background-color: ${props => props.active ? '#f08c00' : '#444'};
    transform: translateY(-2px);
    box-shadow: ${props => props.active 
      ? '0 6px 14px rgba(255, 159, 13, 0.4)' 
      : '0 4px 10px rgba(0, 0, 0, 0.2)'};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 13px;
    flex-shrink: 0;
  }
`;

const CategoryIcon = styled.span`
  font-size: 18px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const MenuCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  background-color: #222;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid #333;
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 159, 13, 0.2);
    transform: translateY(-5px);
    border-color: #FF9F0D;
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const FoodImage = styled.div<{ imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.imageUrl || 'https://via.placeholder.com/400x300/333/555?text=Нет+изображения'});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FoodName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #fff;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

const FoodPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #FF9F0D;
  margin-bottom: 8px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 6px;
  }
`;

const FoodCategory = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  color: white;
  background-color: ${props => {
    switch (props.children) {
      case 'Основное': return '#FF9F0D';
      case 'Супы': return '#34a853';
      case 'Закуски': return '#fbbc05';
      case 'Десерты': return '#ea4335';
      case 'Напитки': return '#9c27b0';
      default: return '#888';
    }
  }};
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 4px 8px;
    margin-bottom: 8px;
  }
`;

const FoodDescription = styled.p`
  margin: 0 0 15px 0;
  font-size: 14px;
  color: #ccc;
  line-height: 1.5;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #333;
  color: white;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    background-color: #444;
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

const EditButton = styled(ActionButton)`
  background-color: #2196f3;
  
  &:hover {
    background-color: #1976d2;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #f44336;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

const Badge = styled.div<{ isAvailable: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => (props.isAvailable ? '#4caf50' : '#f44336')};
  color: white;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

// Стили для модального окна
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #222;
  border-radius: 12px;
  padding: 25px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  max-height: 90vh;
  overflow-y: auto;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 20px;
    width: 90%;
    max-height: 80vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #333;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    margin-bottom: 15px;
    padding-bottom: 10px;
  }
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: white;
  font-size: 20px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #aaa;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  &:hover {
    color: white;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #ccc;
  font-size: 14px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #444;
  background-color: #333;
  color: white;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #FF9F0D;
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #444;
  background-color: #333;
  color: white;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #FF9F0D;
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
    min-height: 80px;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const RadioItem = styled.label<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  background-color: ${props => props.active ? '#FF9F0D' : '#333'};
  color: white;
  
  &:hover {
    background-color: ${props => props.active ? '#f08c00' : '#444'};
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

const RadioInput = styled.input`
  display: none;
`;

const CategoryLabel = styled.span`
  margin-left: 5px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 12px;
  border-radius: 4px;
  border: none;
  background-color: #FF9F0D;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background-color: #f08c00;
  }
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

// Категории для меню
const MENU_CATEGORIES = [
  { id: 'main', name: 'Основное', icon: '🍲' },
  { id: 'soups', name: 'Супы', icon: '🥣' },
  { id: 'appetizers', name: 'Закуски', icon: '🥪' },
  { id: 'desserts', name: 'Десерты', icon: '🍰' },
  { id: 'drinks', name: 'Напитки', icon: '🥤' }
];

// Вспомогательная функция для получения названия категории
const getCategoryName = (categoryId: string): string => {
  const category = MENU_CATEGORIES.find(cat => cat.id === categoryId);
  return category ? category.name : 'Неизвестная категория';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCategoryIcon = (categoryId: string): string => {
  const category = MENU_CATEGORIES.find(cat => cat.id === categoryId);
  return category ? category.icon : '🍽️';
};

// Fix the Image preview section for mobile
const ImagePreview = styled.div`
  margin-top: 8px;
  padding: 12px;
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #282828;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  
  /* Адаптация для Telegram WebApp */
  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

// Основной компонент страницы
const OwnerMenuPage: React.FC = () => {
  const navigate = useNavigate();
  const { selectedRestaurant } = useAppContext();
  const restaurantId = selectedRestaurant || 1;
  
  // Состояния
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<MenuItem>>({
    id: undefined,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: '',
    available: true,
    restaurantId: restaurantId
  });
  // Добавляем состояние для активного фильтра категорий
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Ref для input[type="file"]
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Загрузка меню при монтировании компонента
  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const items = await getMenuItems(restaurantId);
        setMenuItems(items);
      } catch (error) {
        console.error('Ошибка при загрузке меню:', error);
        setMenuItems([]);
      }
    };
    
    loadMenuItems();
  }, [restaurantId]);
  
  // Add beforeunload handler to prevent accidental navigation when modal is open
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isModalOpen) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isModalOpen]);
  
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
        telegramWebApp.BackButton.onClick(() => navigate('/owner/statistics'));
        
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
  
  // Обработчики событий
  const handleStatsClick = () => {
    navigate('/owner/statistics');
  };
  
  const handleBackClick = () => {
    navigate('/owner/statistics');
  };
  
  const handleAddClick = () => {
    setCurrentItem({
      id: undefined,
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      category: '',
      available: true,
      restaurantId: restaurantId
    });
    setIsModalOpen(true);
  };
  
  const handleEditClick = (item: MenuItem) => {
    setCurrentItem({ ...item });
    setIsModalOpen(true);
  };
  
  const handleDeleteClick = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить это блюдо?')) {
      try {
        await deleteMenuItem(id);
        setMenuItems(prev => prev.filter(item => item.id !== id));
      } catch (error) {
        console.error('Ошибка при удалении блюда:', error);
        alert('Не удалось удалить блюдо');
      }
    }
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'number') {
      const numValue = value === '' ? 0 : parseFloat(value);
      setCurrentItem(prev => ({ ...prev, [name]: numValue }));
    } else {
      setCurrentItem(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleCategoryChange = (categoryId: string) => {
    setCurrentItem(prev => ({ ...prev, category: categoryId }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCurrentItem(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
      alert('Изображение слишком большое. Максимальный размер: 5MB');
      return;
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setCurrentItem(prev => ({ ...prev, imageUrl: reader.result as string }));
      }
    };
    reader.readAsDataURL(file);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация формы
    if (!currentItem.name?.trim()) {
      alert('Пожалуйста, введите название блюда');
      return;
    }
    
    if (!currentItem.category) {
      alert('Пожалуйста, выберите категорию блюда');
      return;
    }
    
    if (!currentItem.price || currentItem.price <= 0) {
      alert('Пожалуйста, укажите корректную цену');
      return;
    }
    
    try {
      if (currentItem.id) {
        // Обновляем существующее блюдо
        console.log('Updating existing menu item:', currentItem);
        const updatedItem = await updateMenuItem(currentItem as MenuItem);
        console.log('Item updated successfully:', updatedItem);
        
        if (updatedItem) {
          setMenuItems(prev => prev.map(item => 
            item.id === updatedItem.id ? updatedItem : item
          ));
          alert('Блюдо успешно обновлено!');
        }
      } else {
        // Создаем новое блюдо
        const newItemData = {
          ...currentItem,
          id: Date.now(),
          restaurantId: restaurantId
        } as MenuItem;
        
        console.log('Creating new menu item:', newItemData);
        const newItem = await createMenuItem(newItemData);
        console.log('Item created successfully:', newItem);
        
        if (newItem && newItem.id > 0) {
          setMenuItems(prev => [...prev, newItem]);
          alert('Новое блюдо успешно добавлено!');
        } else {
          console.error('Failed to create menu item - invalid ID returned:', newItem);
          alert('Ошибка при создании блюда. Пожалуйста, попробуйте снова.');
        }
      }
      
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error while saving menu item:', error);
      alert(`Произошла ошибка при сохранении блюда: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
    }
  };

  // Фильтруем элементы по выбранной категории
  const filteredMenuItems = activeCategory 
    ? menuItems.filter(item => item.category === activeCategory)
    : menuItems;
  
  return (
    <Container>
      <BackButton onClick={handleBackClick}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Назад
      </BackButton>
      
      <Header>
        <Title>Управление меню</Title>
        <ButtonGroup>
          <SecondaryButton onClick={handleStatsClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
            Статистика
          </SecondaryButton>
          <PrimaryButton onClick={handleAddClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Добавить блюдо
          </PrimaryButton>
        </ButtonGroup>
      </Header>
      
      {/* Фильтры категорий */}
      <CategoryFilters>
        <CategoryFilter 
          active={activeCategory === null} 
          onClick={() => setActiveCategory(null)}
        >
          <CategoryIcon>🍽️</CategoryIcon> Все категории
        </CategoryFilter>
        {MENU_CATEGORIES.map(category => (
          <CategoryFilter 
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            <CategoryIcon>{category.icon}</CategoryIcon> {category.name}
          </CategoryFilter>
        ))}
      </CategoryFilters>
      
      {filteredMenuItems.length > 0 ? (
        <MenuGrid>
          {filteredMenuItems.map(item => (
            <MenuCard key={item.id}>
              <Badge isAvailable={item.available ?? false}>
                {item.available ? 'Доступно' : 'Недоступно'}
              </Badge>
              <FoodImage imageUrl={item.imageUrl} />
              <CardContent>
                <FoodName>{item.name}</FoodName>
                <FoodPrice>₽{item.price.toLocaleString('ru-RU')}</FoodPrice>
                <FoodCategory>{getCategoryName(item.category)}</FoodCategory>
                <FoodDescription>{item.description}</FoodDescription>
                <CardActions>
                  <EditButton onClick={() => handleEditClick(item)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Изменить
                  </EditButton>
                  <DeleteButton onClick={() => handleDeleteClick(item.id)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                    </svg>
                    Удалить
                  </DeleteButton>
                </CardActions>
              </CardContent>
            </MenuCard>
          ))}
        </MenuGrid>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 0', 
          backgroundColor: '#222', 
          borderRadius: '12px', 
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          color: '#ccc',
          border: '1px solid #333'
        }}>
          {activeCategory ? (
            <p>В категории {getCategoryName(activeCategory)} пока нет блюд. <br />Добавьте новое блюдо в эту категорию.</p>
          ) : (
            <p>В меню пока нет блюд. Добавьте новое блюдо, чтобы оно появилось здесь.</p>
          )}
        </div>
      )}
      
      {/* Модальное окно для добавления/редактирования блюда */}
      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{currentItem.id ? 'Редактировать блюдо' : 'Добавить новое блюдо'}</ModalTitle>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          </ModalHeader>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Название блюда</Label>
              <Input
                id="name"
                name="name"
                value={currentItem.name || ''}
                onChange={handleInputChange}
                placeholder="Введите название блюда"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="description">Описание</Label>
              <Textarea
                id="description"
                name="description"
                value={currentItem.description || ''}
                onChange={handleInputChange}
                placeholder="Введите описание блюда"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="price">Цена (₽)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                min="1"
                step="1"
                value={currentItem.price || ''}
                onChange={handleInputChange}
                placeholder="Введите цену"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Категория</Label>
              <RadioGroup>
                {MENU_CATEGORIES.map(category => (
                  <RadioItem 
                    key={category.id} 
                    active={currentItem.category === category.id}
                  >
                    <RadioInput
                      type="radio"
                      name="categoryGroup"
                      value={category.id}
                      checked={currentItem.category === category.id}
                      onChange={() => handleCategoryChange(category.id)}
                    />
                    <CategoryIcon style={{ marginRight: '10px' }}>{category.icon}</CategoryIcon>
                    <CategoryLabel>{category.name}</CategoryLabel>
                  </RadioItem>
                ))}
              </RadioGroup>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="imageFile">Изображение</Label>
              <Input
                id="imageFile"
                name="imageFile"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              
              {currentItem.imageUrl && (
                <ImagePreview>
                  <PreviewImage 
                    src={currentItem.imageUrl} 
                    alt="Предпросмотр" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/333/555?text=Ошибка+загрузки';
                    }}
                  />
                </ImagePreview>
              )}
            </FormGroup>
            
            <CheckboxGroup>
              <Input
                id="available"
                name="available"
                type="checkbox"
                checked={currentItem.available === undefined ? true : currentItem.available}
                onChange={handleCheckboxChange}
                style={{ width: 'auto' }}
              />
              <Label htmlFor="available" style={{ fontWeight: 'normal' }}>Доступно для заказа</Label>
            </CheckboxGroup>
            
            <SubmitButton type="submit" disabled={!currentItem.name?.trim() || !currentItem.category || !currentItem.price || currentItem.price <= 0}>
              {currentItem.id ? 'Сохранить изменения' : 'Добавить блюдо'}
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </Container>
  );
};

export default OwnerMenuPage; 