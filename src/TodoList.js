import React from 'react';
import { useState } from 'react';

function TodoList(props) {
  const [inputValue, setValue] = useState('뭐해야 헀더라');
  const [click, setClick] = useState('');
  return (
    <div>
      <div>
        <input type='text' id='todo' name='todo' placeholder={inputValue} />
      </div>
      <p>{click}</p>
      <button type='button' onClick={() => setClick(setValue(inputValue))}>
        입력
      </button>
    </div>
  );
}

export default TodoList;
