import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import GlobalStyles from './styles/GlobalStyles';
import LazyLoader from './components/LazyLoader';
import ErrorBoundary from './components/ErrorBoundary';
import { initializeAdminDatabase } from './data/adminDatabase';
import RoleRedirect from './components/RoleRedirect';

// Lazy loaded components
const HomePage = lazy(() => import('./pages/HomePage'));
const CitySelectionPage = lazy(() => import('./pages/CitySelectionPage'));
const RestaurantSelectionPage = lazy(() => import('./pages/RestaurantSelectionPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const OrderSuccessPage = lazy(() => import('./pages/OrderSuccessPage'));
const OrderDetailsPage = lazy(() => import('./pages/OrderDetailsPage'));
const RoleSelectionPage = lazy(() => import('./pages/RoleSelectionPage'));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const AdminMenuManagementPage = lazy(() => import('./pages/AdminMenuManagementPage'));
const OwnerStatisticsPage = lazy(() => import('./pages/owner/OwnerStatisticsPage'));
const OwnerMenuPage = lazy(() => import('./pages/owner/OwnerMenuPage'));

function App() {
  // Инициализация базы данных администратора при загрузке приложения
  useEffect(() => {
    const initializeApp = () => {
      console.log('Initializing app and checking database...');
      
      // Проверяем существует ли уже база данных
      const hasOrders = localStorage.getItem('adminOrders');
      const hasRestaurantData = localStorage.getItem('restaurantAdminData');
      
      console.log('Current database state:', { 
        hasOrders: !!hasOrders, 
        hasRestaurantData: !!hasRestaurantData 
      });
      
      // Если данных нет, инициализируем базу
      if (!hasOrders || !hasRestaurantData) {
        console.log('Database not found, initializing...');
        initializeAdminDatabase();
        console.log('Database initialized with default data');
      } else {
        console.log('Database already exists, preserving data');
        // Проверяем, не повреждены ли данные
        try {
          // Проверяем формат данных
          JSON.parse(hasOrders);
          JSON.parse(hasRestaurantData);
          console.log('Database format is valid');
        } catch (error) {
          // Если формат данных неверный, инициализируем заново
          console.error('Database format invalid, reinitializing...', error);
          initializeAdminDatabase();
          console.log('Database reinitialized with default data');
        }
      }
    };
    
    // Инициализируем при запуске
    initializeApp();
  }, []);

  return (
    <ErrorBoundary>
      <AppProvider>
        <GlobalStyles />
        <Router>
          <div className="App">
            <LazyLoader>
              <Routes>
                {/* Всегда перенаправляем с корневого пути на страницу выбора роли */}
                <Route path="/" element={<Navigate to="/role-selection" replace />} />
                
                {/* Специальный путь для перенаправления с role-selection на city-selection */}
                <Route path="/role-to-city" element={<RoleRedirect fromPath="/role-selection" toPath="/city-selection" />} />
                
                <Route path="/home" element={<HomePage />} />
                <Route path="/city-selection" element={<CitySelectionPage />} />
                <Route path="/restaurant-selection" element={<RestaurantSelectionPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-success" element={<OrderSuccessPage />} />
                <Route path="/orders/:orderId" element={<OrderDetailsPage />} />
                <Route path="/role-selection" element={<RoleSelectionPage />} />
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
                <Route path="/admin/menu" element={<AdminMenuManagementPage />} />
                <Route path="/owner/statistics" element={<OwnerStatisticsPage />} />
                <Route path="/owner/menu" element={<OwnerMenuPage />} />
              </Routes>
            </LazyLoader>
          </div>
        </Router>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App; 