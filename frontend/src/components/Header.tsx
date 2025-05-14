import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppContext } from '../contexts/AppContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: rgba(18, 18, 18, 0.5);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 36px;
  }
`;

const LogoText = styled.span`
  font-weight: 700; 
  font-size: 22px;
  margin-left: 10px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: var(--text-color);
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--primary-color);
    transform: translateY(-2px);
  }
  
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useAppContext();

  const handleLogoClick = () => {
    navigate('/home');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };
  
  const handleConfigClick = () => {
    navigate('/config/tunnel');
  };

  const hasCartItems = cart.length > 0;

  return (
    <HeaderContainer>
      <LogoContainer onClick={handleLogoClick}>
        <LogoImage src="/assets/images/logo.png" alt="Kulcha" />
        <LogoText>Kulcha</LogoText>
      </LogoContainer>
      
      <ActionsContainer>
        <ActionButton onClick={handleConfigClick} title="Configure Tunnel">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </ActionButton>
      
        <ActionButton onClick={handleCartClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {hasCartItems && (
            <span style={{ 
              position: 'absolute', 
              top: '0px', 
              right: '0px', 
              background: 'var(--primary-color)', 
              borderRadius: '50%', 
              width: '14px', 
              height: '14px', 
              fontSize: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}></span>
          )}
        </ActionButton>
      </ActionsContainer>
    </HeaderContainer>
  );
};

export default Header; 