import { useTodo } from '@/utils/context';
import { Button } from '../Button/Button';
import styles from './TodoItem.module.scss';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = observer(({ todo }: TodoItemProps) => {
  const { TodoStore } = useTodo();
  const [newTitle, setNewTitle] = useState('');
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(!change);
    if (change) {
      TodoStore.changeTodo(todo, newTitle);
    }
  };

  return (
    <div style={{ background: todo.completed ? 'beige' : '' }} className={styles.container}>
      <div className={styles.text_container}>
        {change ? (
          <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        ) : (
          <p
            onClick={() => TodoStore.checkedTodo(todo)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.5 : 1
            }}
          >
            {todo.title}
          </p>
        )}
      </div>
      <div className={styles.button_container}>
        <Button color='orange' onClick={handleChange}>
          {change ? 'save' : 'change'}
        </Button>
        <Button color='red' onClick={() => TodoStore.removeTodo(todo.id)}>
          delete
        </Button>
      </div>
    </div>
  );
});
