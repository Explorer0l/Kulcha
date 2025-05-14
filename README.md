# Kulcha - Платформа для ресторанов

Kulcha - это современная платформа для управления ресторанами и заказа еды. Проект представляет собой веб-приложение с React фронтендом и Django бэкендом, упакованное в Docker-контейнеры для простого развертывания.

## Как запустить проект

### Предварительные требования

#### Установка Docker и Docker Compose

Docker - это платформа, которая позволяет упаковывать приложения в контейнеры для удобного запуска на любой системе.

##### Для Windows
1. Скачайте [Docker Desktop для Windows](https://www.docker.com/products/docker-desktop)
2. Запустите установщик и следуйте инструкциям
3. При запросе включите WSL 2 (Windows Subsystem for Linux)
4. После установки запустите Docker Desktop
5. Дождитесь, пока в трее появится иконка Docker и остановится анимация загрузки

##### Для macOS
1. Скачайте [Docker Desktop для Mac](https://www.docker.com/products/docker-desktop)
2. Перетащите иконку Docker в папку Applications
3. Запустите Docker из Launchpad или папки Applications
4. Дождитесь, пока в строке меню появится иконка Docker и остановится анимация загрузки

##### Для Linux (Ubuntu/Debian)
1. Обновите пакеты:
   ```bash
   sudo apt-get update
   ```
2. Установите необходимые пакеты:
   ```bash
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   ```
3. Добавьте официальный GPG-ключ Docker:
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```
4. Добавьте репозиторий Docker:
   ```bash
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```
5. Обновите пакеты и установите Docker:
   ```bash
   sudo apt-get update
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```
6. Установите Docker Compose:
   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```
7. Добавьте своего пользователя в группу docker, чтобы запускать контейнеры без sudo:
   ```bash
   sudo usermod -aG docker $USER
   ```
8. Перезагрузите систему или выполните:
   ```bash
   newgrp docker
   ```
9. Проверьте установку:
   ```bash
   docker --version
   docker-compose --version
   ```

### Шаги по запуску

1. Клонируйте репозиторий:
   ```bash
   git clone <url-репозитория>
   cd Kulcha
   ```

2. Запустите приложение с Docker Compose:
   ```bash
   docker-compose up -d
   ```
   > Флаг `-d` запускает контейнеры в фоновом режиме. Если вы хотите видеть логи в реальном времени, запустите без этого флага: `docker-compose up`

3. Дождитесь, пока все контейнеры запустятся. Вы можете проверить их статус:
   ```bash
   docker-compose ps
   ```
   Вы должны увидеть статус `Up` для всех контейнеров.

4. Приложение будет доступно по следующим адресам:
   - Фронтенд: [http://localhost:3000](http://localhost:3000)
   - API (бэкенд): [http://localhost:8000/api/](http://localhost:8000/api/)
   - API Health Check: [http://localhost:8000/api/health/](http://localhost:8000/api/health/)

### Остановка проекта
Чтобы остановить контейнеры, выполните:
```bash
docker-compose down
```

Для остановки и удаления всех данных (будьте осторожны!):
```bash
docker-compose down -v
```

### Просмотр логов
Чтобы увидеть логи всех контейнеров:
```bash
docker-compose logs
```

Для просмотра логов конкретного контейнера:
```bash
docker-compose logs frontend  # логи фронтенда
docker-compose logs backend   # логи бэкенда
```

Чтобы видеть логи в реальном времени, добавьте флаг `-f`:
```bash
docker-compose logs -f
```

## Настройка доступа через локальный туннель

Для предоставления доступа к вашему локальному серверу из интернета, вы можете использовать `localhost.run`.

### Настройка туннеля через localhost.run

1. Убедитесь, что у вас установлен SSH:
   - Для Windows: OpenSSH обычно устанавливается вместе с Git
   - Для macOS и Linux: SSH обычно предустановлен

2. Запустите туннель для порта 3000 (фронтенд):
   ```bash
   ssh -R 80:localhost:3000 nokey@localhost.run
   ```
   Для порта 8000 (бэкенд):
   ```bash
   ssh -R 80:localhost:8000 nokey@localhost.run
   ```

3. После запуска команды, вы увидите вывод примерно такого вида:
   ```
   ===============================================================================
   Welcome to localhost.run!

   Follow your connection in real-time:
   https://localhost.run/ssh/XXXXXXXXXXXXXXXXX

   Your connection has been authorized:
   https://XXXXX-XXXX-XXXX.lhr.life
   ```

4. Скопируйте предоставленный URL (`https://XXXXX-XXXX-XXXX.lhr.life`) - это публичный адрес вашего локального сервера.

5.Этот публичный адресс мы должны вставить как сайт кнопку внутри телеграм бота для web-app платформы и потом вуаля должно все работать.

6. Важно! Если вы используете туннель для бэкенд API, вам нужно изменить настройки в `frontend/src/services/apiConfig.js`:
   ```javascript
   // Замените эту строку
   const backendTunnelUrl = 'https://XXXXX-XXXX-XXXX.lhr.life/api';
   ```
   После изменения перезапустите frontend контейнер:
   ```bash
   docker-compose restart frontend
   ```

### Проверка туннеля

1. Откройте предоставленный URL в браузере.
2. Вы должны увидеть интерфейс приложения Kulcha.
3. Если вы настроили туннель для API, проверьте работу API:
   ```
   https://XXXXX-XXXX-XXXX.lhr.life/api/health/
   ```
   Вы должны получить ответ с информацией о статусе API.

### Решение проблем с туннелем

1. Если туннель не работает, проверьте:
   - Запущены ли контейнеры (выполните `docker-compose ps`)
   - Работает ли приложение локально (http://localhost:3000 или http://localhost:8000)
   - Нет ли блокировки портов брандмауэром

2. Если нужно перезапустить туннель:
   - Нажмите `Ctrl+C` для остановки текущего туннеля
   - Запустите команду SSH снова

3. Если вам нужен постоянный туннель, рассмотрите использование других сервисов, таких как [ngrok](https://ngrok.com/) или [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/).

### Запуск для разработки

Для разработки вы можете запустить фронтенд и бэкенд по отдельности:

#### Фронтенд:
```bash
cd frontend
npm install
npm start
```
Фронтенд будет доступен по адресу [http://localhost:3000](http://localhost:3000)

#### Бэкенд:
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
API будет доступно по адресу [http://localhost:8000/api/](http://localhost:8000/api/)


### Как применять изменения в docker чтоб все работало правильно
Чтобы изменения в коде React-приложения отобразились в Docker-контейнере, нужно пересобрать образ и перезапустить контейнеры. Вот пошаговая инструкция:
1.  Сначала остановим любые запущенные контейнеры:
 docker-compose down


## Структура проекта

```
Kulcha/
├── frontend/               # React фронтенд
│   ├── public/             # Статические файлы
│   │   └── assets/         # Изображения и другие ресурсы
│   └── src/                # Исходный код
│       ├── components/     # Компоненты React
│       ├── contexts/       # Контексты React (AuthContext, AppContext, etc.)
│       ├── data/           # Моки данных и управление состоянием
│       ├── hooks/          # Пользовательские хуки
│       ├── pages/          # Страницы приложения
│       ├── services/       # Сервисы для работы с API
│       ├── styles/         # Стили и темы
│       └── types/          # TypeScript типы
├── backend/                # Django бэкенд
│   ├── cafes/              # Приложение для работы с ресторанами
│   ├── orders/             # Приложение для управления заказами
│   ├── users/              # Приложение для управления пользователями
│   └── api/                # API endpoints
├── docker-compose.yml      # Конфигурация Docker Compose
└── nginx.conf              # Конфигурация Nginx
```

## О проекте

Kulcha - это платформа, которая соединяет рестораны и клиентов. Проект обладает следующими особенностями:

### Функциональность для клиентов:
- Выбор города и ресторана
- Просмотр меню ресторанов
- Добавление блюд в корзину
- Оформление заказа с выбором типа доставки
- Отслеживание статуса заказа
- Просмотр истории заказов

### Функциональность для владельцев ресторанов:
- Управление меню ресторана
- Просмотр и обработка заказов
- Статистика и аналитика
- Управление профилем ресторана

## Технологии

### Фронтенд:
- React.js
- TypeScript
- Styled Components
- React Router
- Context API для управления состоянием

### Бэкенд:
- Django
- Django REST Framework
- PostgreSQL

### Развертывание:
- Docker & Docker Compose
- Nginx для обратного прокси

## API Endpoints

### Авторизация
- `/api/auth/login/` - Авторизация пользователя
- `/api/auth/register/` - Регистрация нового пользователя

### Города и рестораны
- `/api/cities/` - Список городов
- `/api/cafes/?city={id}` - Список ресторанов по городу

### Меню
- `/api/menu-items/?cafe={id}` - Элементы меню ресторана
- `/api/categories/` - Категории блюд

### Заказы
- `/api/orders/` - Работа с заказами (GET, POST)
- `/api/orders/{id}/` - Получение деталей заказа
- `/api/orders/{id}/update_status/` - Обновление статуса заказа

### Системные
- `/api/health/` - Проверка работоспособности API

## Устранение неисправностей

### 404 ошибки при запросах к API
Если вы видите ошибки 404 при запросах к API, проверьте:
1. Запущены ли все Docker контейнеры: `docker-compose ps`
2. Корректно ли настроена конфигурация Nginx
3. Правильно ли сформированы запросы к API в файле `frontend/src/services/api.ts`

### Проблемы с URL API при использовании туннелей
Если ваше приложение не может подключиться к API при использовании туннеля:
1. Проверьте, что в `frontend/src/services/apiConfig.js` правильно настроен URL API
2. Убедитесь, что туннель работает и доступен извне
3. Проверьте консоль браузера на наличие ошибок CORS

### Проблемы с соединением между контейнерами
При проблемах с соединением проверьте:
1. Правильно ли указаны порты в `docker-compose.yml`
2. Доступность сервисов внутри Docker-сети: `docker network inspect kulcha_kulcha-network`
3. Запустите `docker network ls` чтобы убедиться, что сеть создана

### Проблемы с Docker
Если у вас возникают проблемы с Docker:
1. Проверьте, работает ли Docker: `docker info`
2. Перезапустите Docker Desktop (для Windows и macOS)
3. Для полной перезагрузки системы контейнеров:
   ```bash
   docker-compose down
   docker system prune -a --volumes
   docker-compose up -d
   ```
   > Внимание: команда `docker system prune -a --volumes` удалит все неиспользуемые контейнеры, образы и тома. Используйте с осторожностью!

### Логирование
Для просмотра логов:
- Фронтенд: `docker-compose logs frontend`
- Бэкенд: `docker-compose logs backend`
- Nginx: `docker-compose exec frontend cat /var/log/nginx/error.log`

### Проблемы с зависимостями
При проблемах с зависимостями пересоберите контейнеры:
```bash
docker-compose build --no-cache
docker-compose up -d
```
