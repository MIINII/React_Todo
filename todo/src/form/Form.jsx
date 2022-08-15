import React from 'react';
import './form.css';
import { useState } from 'react';

const Form = todo => {
  const [click, setClick] = useState(false);
  const onToggle = () => setClick(!click);
  return (
    <div className='allForm'>
      <input className='todo_input' type='text' placeholder='뭐해야했더라' />

      <button onclick={onToggle} click={click} type='button'>
        입력
      </button>
    </div>
  );
};

export default Form;
