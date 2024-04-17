import axios from 'axios';

export const getTodos = async () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
