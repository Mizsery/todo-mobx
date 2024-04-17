import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import '@assets/styles/global.scss';
import '@assets/styles/reset.scss';
import { TodoProvider } from './utils/context/TodoProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
