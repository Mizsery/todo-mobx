import { useContext } from 'react';
import { TodoContext } from './TodoContext';

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === null) {
    throw new Error('Component not wrap in Root context');
  }
  return context;
};
