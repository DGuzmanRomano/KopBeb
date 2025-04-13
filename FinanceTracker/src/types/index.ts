// src/types/index.ts

export type TransactionType = 'income' | 'expense';

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: string; // ISO format
  type: TransactionType;
  categoryId: string | null; // null for income
}

export interface TransactionFormData {
  amount: string;
  description: string;
  type: TransactionType;
  categoryId: string | null;
}