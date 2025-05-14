FROM python:3.9-slim

WORKDIR /app

# Установка зависимостей для сборки пакетов Python
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Установка зависимостей
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копирование проекта
COPY . .

# Создание медиа-директории с правильными разрешениями
RUN mkdir -p /app/media && chmod 777 /app/media

# Создание папки для статических файлов
RUN mkdir -p /app/static && chmod 777 /app/static

# Экспозиция порта
EXPOSE 8000

# Команда запуска
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] 