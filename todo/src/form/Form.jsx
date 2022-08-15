import React from 'react';
import './form.css';
import { useState } from 'react';

const Form = props => {
  const [inputValue, setValue] = useState('뭐해야 헀더라');
  const [click, setClick] = useState('');
  return (
    <div className='allForm'>
      <input className='todo_input' type='text' name='todo_title' placeholder={inputValue}></input>
      <input className='todo_input' type='text' name='todo_con' placeholder={inputValue}></input>

      <button type='button' onClick={() => setClick(setValue(inputValue))}>
        입력
      </button>
    </div>
  );
};

export default Form
