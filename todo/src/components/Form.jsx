import React, { useState } from 'react';
import './form.css';
import TodoBoard from './TodoBoard';

// 01. 인풋창이랑 버튼 만들기
// 02. 인풋창에 값을 입력하고 버튼을 클릭하면 인풋밸류 추가[array]!
// 03. 삭제버튼 누르면 삭제!
const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  // 기존에 todoList는 유지하고 inputValue를 추가
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '{todoList}',
      done: true,
    },
  ]);

  return (
    <div className='form_area'>
      {/* Todo한테 todoList값 전달 (=props) */}
      <TodoBoard todoList={todoList} todos={todos}/>

      <div className='allForm'>
        <input value={inputValue} className='todo_input' type='text' placeholder='뭐하려했더라' onChange={event => setInputValue(event.target.value)} />

        <button onClick={addItem} type='button'>
          입력
        </button>
      </div>
    </div>
  );
};

export default Form;
