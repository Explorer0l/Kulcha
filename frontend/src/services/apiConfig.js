// Конфигурация для API с динамическим определением URL
(function() {
  // Определяем базовый URL API на основе текущего окружения
  const determineApiUrl = () => {
    // Проверяем, запущено ли приложение в Telegram Web App
    const isTelegramWebApp = window.Telegram && window.Telegram.WebApp;
    
    // Получаем текущий хост и origin
    const currentOrigin = window.location.origin;
    const currentHostname = window.location.hostname;
    
    console.log('Current environment:', {
      hostname: currentHostname,
      origin: currentOrigin,
      isTelegramWebApp: !!isTelegramWebApp
    });
    
    // Если это localhost, используем прямое подключение к API на порту 8000
    if (currentHostname === 'localhost' || currentHostname === '127.0.0.1') {
      const apiUrl = 'http://localhost:8000/api';
      console.log('Using localhost API URL:', apiUrl);
      return apiUrl;
    }
    
    // Если это туннель localhost.run или serveo.net, используем настроенный туннель для бэкенда
    if (currentHostname.includes('lhr.life') || currentHostname.includes('serveo.net') || 
        currentHostname.includes('localhost.run')) {
      // Получаем URL бэкенда из переменной окружения или localStorage
      const backendTunnelUrl = 
        process.env.REACT_APP_API_URL || 
        localStorage.getItem('BACKEND_TUNNEL_URL') || 
        null;
      
      if (!backendTunnelUrl) {
        console.error(
          'Backend tunnel URL is not configured. Please set REACT_APP_API_URL ' +
          'environment variable or BACKEND_TUNNEL_URL in localStorage.'
        );
        // Показываем сообщение пользователю
        setTimeout(() => {
          alert('No tunnel configured for backend API. Please update your tunnel URL in the frontend configuration.');
        }, 1000);
        return 'NO_TUNNEL_CONFIGURED';
      }
      
      console.log('Using backend tunnel URL:', backendTunnelUrl);
      return backendTunnelUrl;
    }
    
    // Для мобильных устройств или других доменов
    // Можно настроить через переменную окружения
    if (process.env.REACT_APP_API_URL) {
      const envApiUrl = process.env.REACT_APP_API_URL;
      console.log('Using environment API URL:', envApiUrl);
      return envApiUrl;
    }
    
    // Для других случаев (включая Telegram WebApp) пробуем использовать тот же домен
    // ВАЖНО: Это предполагает, что бэкенд находится на том же домене по пути /api
    const fallbackUrl = `${currentOrigin}/api`;
    console.log('Using fallback API URL:', fallbackUrl);
    return fallbackUrl;
  };
  
  // Устанавливаем конфигурацию
  window.API_CONFIG = {
    API_BASE_URL: determineApiUrl()
  };
  
  console.log('API Config loaded with dynamically determined URL:', window.API_CONFIG.API_BASE_URL);
})(); 
