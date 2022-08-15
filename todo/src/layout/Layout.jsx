import React from 'react';
import './layout.css';
import Header from '../header/Header';
import Form from '../form/Form';
import TodoList from '../pages/TodoList';

function Layout() {
  return (
    <div id='layout_wrap'>
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default Layout;
