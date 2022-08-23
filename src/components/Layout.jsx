import React, { useReducer, useState } from 'react';
import './layout.css';

import Header from './Header';
import Form from './Form';
import List from './List';

function Layout() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: '',
      con: '',
      isDone: false,
    },
  ]);

  const onToggle = id => {
    setTodos(
      todos.map(todo => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const onRemove = id => {
    setTodos(todos.filter(todos => todos.id !== id));
  };

  return (
    <div id='layout_wrap'>
      <Header todos={todos} setTodos={setTodos} />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
}

export default Layout;
