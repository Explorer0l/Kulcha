// Типы данных, перенесенные из mockData.ts

export interface City {
  id: number;
  name: string;
}

export interface Restaurant {
  id: number;
  name: string;
  cityId: number;
  address: string;
  description: string;
  coverImage: string;
  rating: number;
}

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  description: string;
  img?: string;
} 