import { createContext } from 'react';
import { RootStore } from '../store/root-store';

export const TodoContext = createContext<RootStore | null>(null);
