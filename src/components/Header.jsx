import React from 'react';
import { useSelector } from 'react-redux';
import './header.css';

const Header = props => {
  const state = useSelector(state => {
    return state.todos.todos;
  });

  const undoneTasks = (todos, isDone) => {
    return todos.filter(todo => todo.isDone !== isDone);
  };

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
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
