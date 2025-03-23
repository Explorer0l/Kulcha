import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import CitySelectionPage from './pages/CitySelectionPage';
import RestaurantSelectionPage from './pages/RestaurantSelectionPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import OrderDetailsPage from './pages/OrderDetailsPage';

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/city-selection" element={<CitySelectionPage />} />
            <Route path="/restaurant-selection" element={<RestaurantSelectionPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/orders/:orderId" element={<OrderDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App; 