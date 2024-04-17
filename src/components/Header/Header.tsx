import { useTodo } from '@/utils/context';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  const { TodoStore } = useTodo();
  return <div>Total task: {TodoStore.totalTodos}</div>;
});
