import ThemeStore from './theme-store';
import TodoStore from './todo-store';

export class RootStore {
  TodoStore = new TodoStore();
  ThemeStore = new ThemeStore();
}
