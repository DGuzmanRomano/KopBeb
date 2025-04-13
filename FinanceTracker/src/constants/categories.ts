// src/constants/categories.ts
import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'food',
    name: 'Food',
    icon: 'food',
    color: '#FF8A65',
  },
  {
    id: 'going-out',
    name: 'Going Out',
    icon: 'glass-cocktail',
    color: '#BA68C8',
  },
  {
    id: 'services',
    name: 'Services',
    icon: 'home-lightning-bolt',
    color: '#64B5F6',
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: 'shopping',
    color: '#4DB6AC',
  },
  {
    id: 'transportation',
    name: 'Transportation',
    icon: 'car',
    color: '#FFD54F',
  },
  {
    id: 'health',
    name: 'Health',
    icon: 'medical-bag',
    color: '#F06292',
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'movie',
    color: '#7986CB',
  },
  {
    id: 'other',
    name: 'Other',
    icon: 'dots-horizontal',
    color: '#A1887F',
  },
];

export const getCategoryById = (id: string | null): Category | undefined => {
  if (!id) return undefined;
  return CATEGORIES.find(category => category.id === id);
};