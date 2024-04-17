import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useTodo } from '@/utils/context';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = observer(() => {
  const { TodoStore } = useTodo();

  useEffect(() => {
    TodoStore.fetchTodo();
  }, []);

  if (TodoStore.isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {TodoStore.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
});
