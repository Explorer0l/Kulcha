import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  :root {
    --primary-color: #FF9F0D;
    --primary-light: #FFB846;
    --primary-dark: #E58D00;
    --background-color: #000000;
    --background-light: #121212;
    --background-dark: #050505;
    --card-bg: #1A1A1A;
    --card-hover: #252525;
    --text-color: #FFFFFF;
    --text-secondary: #AAAAAA;
    --text-tertiary: #666666;
    --button-bg: #FFFFFF;
    --button-text: #888888;
    --border-radius-sm: 8px;
    --border-radius-md: 12px;
    --border-radius-lg: 16px;
    --border-radius-xl: 24px;
    --box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --bottom-nav-height: 80px;  /* Высота нижней навигации */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* Добавляем отступ снизу для нижней навигации */
    padding-bottom: calc(var(--bottom-nav-height) + 20px);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: var(--spacing-md);
  }

  button {
    font-family: 'Poppins', sans-serif;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    border-radius: var(--border-radius-md);
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all var(--transition-normal);
    outline: none;

    &:hover {
      background-color: var(--primary-color);
      color: var(--text-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255, 159, 13, 0.25);
    }

    &:active {
      transform: translateY(0);
    }
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--primary-light);
    }
  }

  input, select {
    font-family: 'Poppins', sans-serif;
    background-color: var(--card-bg);
    color: var(--text-color);
    border: 1px solid #333;
    border-radius: var(--border-radius-sm);
    padding: 12px 16px;
    font-size: 1rem;
    transition: all var(--transition-fast);
    outline: none;
    width: 100%;
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
    }
  }

  /* Основной контент с учетом шапки и нижней навигации */
  main {
    min-height: calc(100vh - var(--bottom-nav-height) - 75px);
    width: 100%;
    padding-bottom: var(--bottom-nav-height);
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-dark);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }
`;

export default GlobalStyles; 