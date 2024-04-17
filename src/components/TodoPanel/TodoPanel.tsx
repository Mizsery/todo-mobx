import { Button } from '../Button/Button';
import styles from './TodoPanel.module.scss';
import { observer } from 'mobx-react-lite';
import { useTodo } from '@/utils/context';
import { useState } from 'react';

export const TodoPanel = observer(() => {
  const [title, setTitle] = useState('');
  const { TodoStore } = useTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    TodoStore.addTodo(title);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor='title'>Task</label>
        <div className={styles.inputContainer}>
          <input
            type='text'
            placeholder='title'
            name='task'
            id='title'
            onChange={handleChange}
            value={title}
          />
          {title.length > 0 ? (
            <Button type='submit'>Add task</Button>
          ) : (
            <Button type='submit' disabled>
              Add task
            </Button>
          )}
        </div>
      </form>
    </div>
  );
});
