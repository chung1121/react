import { useState } from 'react';
import list from './list';
import form from './form';
const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: '店予約する',
    },
    {
      id: 2,
      content: '卵買う',
    },
    {
      id: 3,
      content: '郵便出す',
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <>
      <list todos={todos} deleteTodo={deleteTodo} />
      <form createTodo={createTodo} />
    </>
  );
};
export default Todo;
