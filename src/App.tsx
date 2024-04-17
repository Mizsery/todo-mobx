import { TodoPanel } from '@/components/TodoPanel/TodoPanel';
import { Header } from '@/components/Header/Header';
import styles from '@assets/styles/app.module.scss';
import { TodoList } from '@/components/TodoList/TodoList';

export const App = () => {
  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header />
        <TodoPanel />
        <TodoList />
      </div>
    </div>
  );
};
