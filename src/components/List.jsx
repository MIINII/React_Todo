import React from 'react';
// import { useSelector } from 'react-redux';

import Todo from './Todo';
import './list.css';
// import Form from './Form'

// const List = ({ todos, id, onRemove, onToggle }) => {
//   const state = useSelector(state => state.todos);
//   const WorkingList = state.filter(todos => todos.isDone === false).map((todos, i) => <Todo todos={todos} key={todos.id} onRemove={onRemove} onToggle={onToggle}></Todo>);
//   const DoneList = state.filter(todos => todos.isDone === true).map((todos, i) => <Todo todos={todos} key={todos.id} onRemove={onRemove} onToggle={onToggle}></Todo>);

//   return (
//     <>
//       <div className='Doing'>
//         <h2>🧃 하는중이야</h2>
//         {WorkingList}
//       </div>
//       <div className='Done'>
//         <h2>📌 끝!</h2>
//         {DoneList}
//       </div>
//     </>
//   );
// };

function List({ todos, onToggle, onRemove }) {
  console.log('🚀 ~ List ~ todos', todos);

  return (
    <div id='todoboard_wrap'>
      <div className='Doing'>
        <h2>🧃 하는중이야</h2>
        <div className='todos'>
          {todos.map(todos => {
            if (todos.isDone === false) {
              return <Todo todos={todos} key={todos.id} onRemove={onRemove} onToggle={onToggle} />;
            }
          })}
        </div>
      </div>

      <div className='Done'>
        <h2>📌 끝!</h2>
        <div className='todos'>
          {todos.map(todos => {
            if (todos.isDone === true) {
              return <Todo todos={todos} key={todos.id} onRemove={onRemove} onToggle={onToggle} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default List;

// {todoList.map(item => ( <TodoList item={item} />))}
// {todos.map(todo=> ( <TodoList todo={todo} key={todo.id} done={todo.checked} onRemove={todo.onRemove} />
// ))}
