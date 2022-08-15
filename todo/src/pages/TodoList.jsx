import React from 'react';
import './todo_list.css';

import Form from '../form/Form';
import Todo from '../todo/Todo';

function TodoList() {
  return (
    <div id='todolist_wrap'>
      <Todo text="잘되는거 마즈?" done={true} />
      <Todo text="잘되는거 마즈?" done={true} />
      <Todo text="잘되는거 마즈?" done={false} />
      <Todo text="잘되는거 마즈?" done={true} />
      <Form />
    </div>
  );
}

export default TodoList;
