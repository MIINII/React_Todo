import React from 'react';
import './header.css';

const Header = props => {
  // const todos = useTodoState();
  const undoneTasks = props.todos.filter(todo => !props.todos.isdone);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR',{weekday: 'long'})
  return (
    <div id='header_wrap'>
      <h1 className='title'>π²μ€λ ν  μΌπ²</h1>
      <div className='day'>{dateString}</div>
      <div className='dow'>{dayName}</div>
      <span className='task'>π {undoneTasks.length}κ° λ¨μμ</span>
    </div>
  );
};

export default Header;
