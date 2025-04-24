import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, MainContent, ProfileHeading, FormGroup, Label, Select } from '../styles/Components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CartButton from '../components/CartButton';
import { useAppContext } from '../contexts/AppContext';
import useTelegram from '../hooks/useTelegram';
import { FoodGrid, CityCard, CityName, AddToCartButton } from '../styles/Components';
import { api } from '../services/api';
import { City } from '../types/apiTypes';

const CitySelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { selectedCity, setSelectedCity } = useAppContext();
  const { hideBackButton, hideMainButton } = useTelegram();
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  // Загрузка городов при монтировании компонента
  useEffect(() => {
    const loadCities = async () => {
      try {
        setLoading(true);
        const citiesData = await api.getCities();
        setCities(citiesData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load cities:", error);
        setLoading(false);
      }
    };
    
    loadCities();
  }, []);

  useEffect(() => {
    if (!loading && cities.length === 0) {
      // If no cities available, redirect back to home
      navigate('/');
    }
  }, [cities, navigate, loading]);

  useEffect(() => {
    hideBackButton();
    hideMainButton();
    
    return () => {
      hideBackButton();
    };
  }, [hideBackButton, hideMainButton]);

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

  if (loading) {
    return (
      <Container>
        <Header />
        <Navigation />
        <MainContent>
          <ProfileHeading>Загрузка городов...</ProfileHeading>
        </MainContent>
      </Container>
    );
  }

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