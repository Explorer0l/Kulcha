import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import CitySelectionPage from './pages/CitySelectionPage';
import RestaurantSelectionPage from './pages/RestaurantSelectionPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city-selection" element={<CitySelectionPage />} />
          <Route path="/restaurant-selection" element={<RestaurantSelectionPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App; 