import { makeAutoObservable, runInAction } from 'mobx';
import { getTodos } from '../api/getTodos';

export default class TodoStore {
  todos: Todo[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get totalTodos() {
    return this.todos.length;
  }

  addTodo = (title: string) => {
    this.todos.push({
      id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0,
      title: title,
      completed: false
    });
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((t) => t.id !== id);
  };

  checkedTodo = (todo: Todo) => {
    todo.completed = !todo.completed;
  };

  changeTodo = (todo: Todo, newTitle: string) => {
    todo.title = newTitle;
  };

  fetchTodo = async () => {
    try {
      this.isLoading = true;
      const res = (await getTodos()).data;
      runInAction(() => {
        this.todos = res;
        this.isLoading = false;
      });
    } catch (error) {
      console.log(error);
    }
  };
}
