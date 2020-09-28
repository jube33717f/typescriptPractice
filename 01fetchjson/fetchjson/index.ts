import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';
// 限制变量类型
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(ID, title, finished);
});
//限制变量和标题一一对应
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID:${id}
    Title:${title}
    finished:${completed}
    `);
};
