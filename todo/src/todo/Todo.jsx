import React from 'react';
import './todo.css'

const Todo =(props) => {
  return (
    <div id='todo_wrap'>
      <div className='todo_con'>
        <h3>밥먹기</h3>
        <span>반찬 꼭 만들어먹기</span>
        <button>완료!</button>
      </div>
    </div>
  );
}

export default Todo;
