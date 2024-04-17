import { RootStore } from '../store/root-store';
import { TodoContext } from './TodoContext';

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  return <TodoContext.Provider value={new RootStore()}>{children}</TodoContext.Provider>;
};
