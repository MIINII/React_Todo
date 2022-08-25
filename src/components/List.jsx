import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';
import './list.css';

const List = () => {
  const state = useSelector(state => {
    return state.todos.todos;
  });
  const _getTodosByIsDone = (todos, isDone) => {
    return todos.filter(todo => todo.isDone === isDone);
  };

  const workingList = _getTodosByIsDone(state, false);
  const doneList = _getTodosByIsDone(state, true);

  return (
    <div id='todoboard_wrap'>
      <div className='Doing'>
        <h2>🧃 하는중이야</h2>
        {workingList.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
      <div className='Done'>
        <h2>📌 끝!</h2>
        {doneList.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

// function List({ todos, onToggle, onRemove }) {
//   return (
//     <div id='todoboard_wrap'>
//       <div className='todos'>
//         {todos.map(todos => {
//           return <Todo todos={todos} key={todos.id} onRemove={onRemove} onToggle={onToggle} />;
//         })}
//       </div>
//     </div>
//   );
// }

export default List;

// {todoList.map(item => ( <TodoList item={item} />))}
// {todos.map(todo=> ( <TodoList todo={todo} key={todo.id} done={todo.checked} onRemove={todo.onRemove} />
// ))}
