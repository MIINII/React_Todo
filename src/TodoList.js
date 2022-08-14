import React from 'react';
import { useState } from 'react';

// function upload(props) {
//   const upload = document.getElementsByClassName('todo_btn');
//   if()
// }

function TodoList(props) {
  const[click,setClick] = useState('');
  return (
    <button type='button' onClick={props.onClick}>
      입력
    </button>
  );
}

export default TodoList;
