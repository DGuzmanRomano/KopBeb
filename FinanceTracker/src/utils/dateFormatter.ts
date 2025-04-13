// src/utils/dateFormatter.ts
import { format, parseISO } from 'date-fns';

export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'MMM dd, yyyy');
};

export const formatDatetime = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'MMM dd, yyyy - HH:mm');
};

export const getCurrentISODate = (): string => {
  return new Date().toISOString();
};