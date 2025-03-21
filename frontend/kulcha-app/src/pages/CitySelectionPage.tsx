import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, MainContent, ProfileHeading, FormGroup, Label, Select } from '../styles/Components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CartButton from '../components/CartButton';
import { useAppContext } from '../contexts/AppContext';
import useTelegram from '../hooks/useTelegram';
import { FoodGrid, CityCard, CityName, AddToCartButton } from '../styles/Components';

const CitySelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { cities, selectedCity, setSelectedCity } = useAppContext();
  const { showBackButton, hideBackButton, setBackButtonCallback, showMainButton, setMainButtonCallback } = useTelegram();

  useEffect(() => {
    if (cities.length === 0) {
      // If no cities available, redirect back to home
      navigate('/');
    }
  }, [cities, navigate]);

  useEffect(() => {
    hideBackButton();
    showMainButton('Continue');
    
    setMainButtonCallback(() => {
      if (selectedCity) {
        navigate('/restaurants');
      }
    });

    return () => {
      hideBackButton();
    };
  }, [hideBackButton, navigate, selectedCity, setBackButtonCallback, setMainButtonCallback, showMainButton]);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = parseInt(e.target.value, 10);
    const city = cities.find(c => c.id === cityId);
    if (city) {
      setSelectedCity(city);
    }
  };

  const handleCitySelect = (cityId: number) => {
    const city = cities.find(c => c.id === cityId);
    if (city) {
      setSelectedCity(city);
      navigate('/restaurant-selection');
    }
  };

  return (
    <Container>
      <Header />
      <Navigation />
      <MainContent>
        <ProfileHeading>Выберите ваш город</ProfileHeading>
        <div>
          <FormGroup>
            <Label htmlFor="city">Выберите город</Label>
            <Select 
              id="city" 
              value={selectedCity?.id || ''} 
              onChange={handleCityChange}
            >
              <option value="" disabled>Выберите город</option>
              {cities.map(city => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </Select>
          </FormGroup>
          
          <h3 style={{ marginTop: '30px' }}>Популярные города</h3>
          <FoodGrid>
            {cities.map(city => (
              <CityCard 
                key={city.id} 
                onClick={() => handleCitySelect(city.id)}
              >
                <CityName>{city.name}</CityName>
                <AddToCartButton>
                  Выбрать город
                </AddToCartButton>
              </CityCard>
            ))}
          </FoodGrid>
        </div>
      </MainContent>
      <CartButton />
    </Container>
  );
};

export default CitySelectionPage; 