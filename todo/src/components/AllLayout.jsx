import React,{useState} from 'react';
import {useCallback} from 'react';
import './all_layout.css';

import Form from './Form';
import Header from './Header';
import TodoBoard from './TodoBoard';
// import { nextPowerTwo } from 'add';

function AllLayout() {
  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos(todos.map((todo)=>(todo.id === id? {...todo, checked: !todo.checked} : todo)))
  //   },
  //   [todos],
  // )
  
  
  return (
    <div id='layout_wrap'>
      <Header />
      {/* <TodoBoard todos={todos} /> */}
      <Form />
    </div>
  );
}

export default AllLayout;
