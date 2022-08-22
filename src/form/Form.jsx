import React, { useState } from 'react';
import './form.css';

// import Todo from '../todo/Todo';
// import List from '../list/List';

// 01. 인풋창이랑 버튼 만들기
// 02. 인풋창에 값을 입력하고 버튼을 클릭하면 인풋밸류 추가[array]!
// 03. 삭제버튼 누르면 삭제!
const Form = ({ todos, setTodos }) => {
  // 제목, 내용 인풋 밸류 가져오기
  const [inputTitleValue, setInputTitleValue] = useState('');
  const [inputConValue, setInputConValue] = useState('');

  // 기존에 todoList는 유지하고 inputValue를 추가(버튼)
  const addItem = () => {
    setTodos([...todos, { id: todos.length + 1, title: inputTitleValue, con: inputConValue, isDone: false }]);
    setInputTitleValue('');
    setInputConValue('');
  };

  const onChageHandlerT = event => {
    const inputTitle = event.target.value;
    setInputTitleValue(inputTitle);
  };

  const onChageHandlerC = event => {
    const inputCon = event.target.value;
    setInputConValue(inputCon);
  };

  return (
    <div className='form_area'>
      <div className='allForm'>
        {/* 제목 */}
        <input className='todo_input' type='text' placeholder='제목' onChange={onChageHandlerT} value={inputTitleValue} />

        {/* 내용 */}
        <input className='todo_input' type='text' placeholder='뭐하려했더라' onChange={onChageHandlerC} value={inputConValue} />

        {/* 입력버튼 */}
        <button onClick={addItem} type='button'>입력</button>
      </div>
      {/* Todo한테 todoList값 전달 (=props) */}
      {/* <List todos={todos} /> */}
    </div>
  );
};

export default Form;

// const [todos, setTodos] = useState([
//   {
//     id: 1,
//     text: '{todoList}',
//     checked: true,
//   },
// ]);

// // const onRemove = () => {
// //   // 01.filter사용!
// //   // 02. id값으로 삭제가 가넝
// //   // 03. props로 id값 onRemove()내려주면 된다 -> 삭제
// // };

// // const onToggle = () => {};
