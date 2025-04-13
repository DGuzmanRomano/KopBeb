// src/storage/transactionStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Transaction } from '../types';

const TRANSACTION_STORAGE_KEY = '@finance_tracker:transactions';

export const saveTransactions = async (transactions: Transaction[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(transactions);
    await AsyncStorage.setItem(TRANSACTION_STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving transactions', error);
    throw error;
  }
};

export const loadTransactions = async (): Promise<Transaction[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(TRANSACTION_STORAGE_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading transactions', error);
    return [];
  }
};

export const addTransaction = async (transaction: Transaction): Promise<void> => {
  try {
    const transactions = await loadTransactions();
    transactions.push(transaction);
    await saveTransactions(transactions);
  } catch (error) {
    console.error('Error adding transaction', error);
    throw error;
  }
};

export const removeTransaction = async (id: string): Promise<void> => {
  try {
    const transactions = await loadTransactions();
    const updatedTransactions = transactions.filter(t => t.id !== id);
    await saveTransactions(updatedTransactions);
  } catch (error) {
    console.error('Error removing transaction', error);
    throw error;
  }
};

export const updateTransaction = async (updatedTransaction: Transaction): Promise<void> => {
  try {
    const transactions = await loadTransactions();
    const index = transactions.findIndex(t => t.id === updatedTransaction.id);
    
    if (index !== -1) {
      transactions[index] = updatedTransaction;
      await saveTransactions(transactions);
    }
  } catch (error) {
    console.error('Error updating transaction', error);
    throw error;
  }
};