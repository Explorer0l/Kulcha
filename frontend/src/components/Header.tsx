import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header as HeaderContainer, LogoContainer, LogoImage, ProfileButton } from '../styles/Components';
import { useAppContext } from '../contexts/AppContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { selectedCity, selectedRestaurant } = useAppContext();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src="/assets/images/logo.png" alt="Kulcha" />
      </LogoContainer>
      <ProfileButton onClick={handleProfileClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </ProfileButton>
    </HeaderContainer>
  );
};

export default Header; 