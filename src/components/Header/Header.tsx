import { useTodo } from '@/utils/context';
import { observer } from 'mobx-react-lite';
import styles from './Header.module.scss';

export const Header = observer(() => {
  const { TodoStore, ThemeStore } = useTodo();

  return (
    <div className={`${styles.container} ${styles[ThemeStore.theme]}`}>
      Total task: {TodoStore.totalTodos}
      <button onClick={() => ThemeStore.isDarkMode('light')}>change theme</button>
    </div>
  );
});
