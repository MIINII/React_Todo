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
      <h1 className='title'>🎲오늘 할 일🎲</h1>
      <div className='day'>{dateString}</div>
      <div className='dow'>{dayName}</div>
      <span className='task'>🚀 {undoneTasks.length}개 남앗슈</span>
    </div>
  );
};

export default Header;
