#!/bin/bash

# Определение цветных выводов
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Функция для вывода сообщений
print_message() {
  echo -e "${GREEN}[Kulcha]${NC} $1"
}

print_error() {
  echo -e "${RED}[Error]${NC} $1"
}

print_warning() {
  echo -e "${YELLOW}[Warning]${NC} $1"
}

# Проверка наличия необходимых утилит
check_requirements() {
  print_message "Проверка необходимых утилит..."
  
  if ! command -v python &> /dev/null; then
    print_error "Python не установлен"
    exit 1
  fi
  
  if ! command -v npm &> /dev/null; then
    print_warning "npm не установлен, фронтенд не будет собран"
  fi
  
  if ! command -v docker &> /dev/null; then
    print_warning "Docker не установлен, docker-режим недоступен"
  fi
}

# Запуск бэкенда
run_backend() {
  print_message "Запуск бэкенда..."
  cd backend || exit
  
  if [ ! -f "db.sqlite3" ]; then
    print_message "Применение миграций..."
    python manage.py migrate
  fi
  
  print_message "Запуск Django сервера на http://localhost:8000"
  python manage.py runserver 0.0.0.0:8000
}

# Запуск фронтенда
run_frontend() {
  print_message "Запуск фронтенда..."
  cd frontend || exit
  
  if [ ! -d "node_modules" ]; then
    print_message "Установка зависимостей..."
    npm install
  fi
  
  print_message "Запуск React-приложения на http://localhost:3000"
  npm start
}

# Запуск проекта в docker
run_docker() {
  print_message "Запуск проекта в Docker..."
  
  if [ ! -f "docker-compose.yml" ]; then
    print_error "Файл docker-compose.yml не найден"
    exit 1
  fi
  
  print_message "Сборка и запуск контейнеров..."
  docker-compose up --build
}

# Настройка CORS на всех возможных IP
setup_cors() {
  print_message "Настройка CORS для различных IP..."
  
  # Получаем список IP адресов
  ip_list=$(ip addr | grep 'inet ' | grep -v '127.0.0.1' | awk '{print $2}' | cut -d'/' -f1)
  
  print_message "Обнаружены следующие IP адреса: $ip_list"
  print_message "Можно использовать любой из них для подключения с других устройств"
  
  # Возвращаемся в корневую директорию
  cd "$(dirname "$0")" || exit
}

# Вывод справки
show_help() {
  echo "Использование: ./run.sh [опция]"
  echo "Опции:"
  echo "  backend     Запуск только бэкенда"
  echo "  frontend    Запуск только фронтенда"
  echo "  all         Запуск и бэкенда, и фронтенда (в разных терминалах)"
  echo "  docker      Запуск проекта в Docker"
  echo "  cors        Настройка CORS для разных IP"
  echo "  help        Показать справку"
}

# Основная логика
main() {
  check_requirements
  
  case $1 in
    backend)
      run_backend
      ;;
    frontend)
      run_frontend
      ;;
    all)
      setup_cors
      print_message "Запуск бэкенда и фронтенда..."
      
      # Запуск бэкенда в отдельном терминале
      if command -v gnome-terminal &> /dev/null; then
        gnome-terminal -- bash -c "cd \"$(pwd)\"; ./run.sh backend; exec bash"
      elif command -v xterm &> /dev/null; then
        xterm -e "cd \"$(pwd)\"; ./run.sh backend; exec bash" &
      else
        print_warning "Не найден подходящий терминал для запуска бэкенда"
        print_message "Запуск бэкенда в фоновом режиме..."
        ./run.sh backend &
      fi
      
      # Небольшая пауза перед запуском фронтенда
      sleep 2
      run_frontend
      ;;
    docker)
      run_docker
      ;;
    cors)
      setup_cors
      ;;
    help|--help|-h)
      show_help
      ;;
    *)
      print_error "Неизвестная опция: $1"
      show_help
      exit 1
      ;;
  esac
}

# Запуск основной функции с переданными аргументами
main "$@" 