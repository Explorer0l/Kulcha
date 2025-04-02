/**
 * Утилиты для работы с изображениями
 */

/**
 * Преобразует относительный путь изображения в корректный URL с проверкой существования
 * @param path - Относительный путь к изображению
 * @param fallback - Запасное изображение, если основное не найдено
 */
export const getImageUrl = (path: string, fallback: string = '/assets/images/placeholder.jpg'): string => {
  if (!path) return fallback;
  
  // Проверяем, если путь уже является URL
  if (path.startsWith('http') || path.startsWith('https') || path.startsWith('data:')) {
    return path;
  }
  
  // Преобразуем относительный путь
  const baseUrl = process.env.PUBLIC_URL || '';
  
  // Проверка существования картинки в нашем case
  const foodImagesMap: Record<string, boolean> = {
    '/assets/images/butter-chicken.jpg': true,
    '/assets/images/paneer-tikka.jpg': true,
    '/assets/images/chicken-biryani.jpg': true,
    '/assets/images/vegetable-samosa.jpg': true,
    '/assets/images/masala-dosa.jpg': true,
    '/assets/images/gulab-jamun.jpg': true,
    '/assets/images/logo.png': true,
  };
  
  // Если изображение существует в нашем маппинге - используем его, иначе placeholder
  return foodImagesMap[path] ? `${baseUrl}${path}` : `${baseUrl}${fallback}`;
};

/**
 * Возвращает заглушку изображения с текстом
 * @param text - Текст для отображения на заглушке
 * @param width - Ширина изображения
 * @param height - Высота изображения
 */
export const getPlaceholderImage = (
  text: string = 'Изображение недоступно',
  width: number = 400,
  height: number = 300
): string => {
  return `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(text)}`;
};

/**
 * Предзагрузка изображений для ускорения отображения
 * @param paths - Массив путей к изображениям
 */
export const preloadImages = (paths: string[]): void => {
  paths.forEach(path => {
    const img = new Image();
    img.src = getImageUrl(path);
  });
};

/**
 * Определяет, является ли устройство мобильным
 */
export const isMobileDevice = (): boolean => {
  return window.innerWidth <= 768;
};

/**
 * Возвращает оптимизированный размер изображения в зависимости от устройства
 * @param path - Путь к изображению
 * @param isMobile - Флаг мобильного устройства
 */
export const getOptimizedImageUrl = (path: string, isMobile: boolean = isMobileDevice()): string => {
  const imageUrl = getImageUrl(path);
  
  // Для placeholder изображений не применяем оптимизацию
  if (imageUrl.includes('placeholder.com')) {
    return imageUrl;
  }
  
  // В реальном проекте здесь можно добавить логику для разных размеров изображений
  // Например, использовать CDN с параметрами размера
  // Пример: return `${imageUrl}?width=${isMobile ? 400 : 800}`;
  
  return imageUrl;
}; 