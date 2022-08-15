import React from 'react';
import "./layout.css"
import Header from '../header/Header';
import FormInput from '../form/Form';
// import TodoList from '../pages/TodoList';


function Layout() {
  return (
    <div id='wrap'>
      <div className='todo'>
        <Header />
        <FormInput />
      </div>
    </div>
  );
}

export default Layout;
