import React from 'react';
import { useState } from 'react';
import './form.css';

function FormInput(props) {
  // const [inputValue, setValue] = useState('뭐해야 헀더라');
  // const [click, setClick] = useState('');
  return (
    <div className='allForm'>
      <input type="text" name="todo" placeholder='힝'></input>
      <button>입력</button>
      {/* <input type='text' name='todo' placeholder={inputValue} />

      <button type='button' onClick={() => setClick(setValue(inputValue))}>
        입력
      </button> */}
    </div>
  );
}

export default FormInput;
