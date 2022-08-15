import React from 'react';
import './header.css';

const Header = props => {
  return (
    <div id='header_wrap'>
      <h1 className='title'>🎲오늘 할 일🎲</h1>
      <div className='day'>2022년 8월 15일</div>
      <span className='task'>3개 남앗슈</span>
    </div>
  );
};

export default Header;
