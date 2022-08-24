import React from 'react';
import { useSelector } from 'react-redux';
import { addTodo, delteTodo, toggleTodo } from '../redux/modules/todos';

import Todo from './Todo';
import './list.css';

const List = () => {
  const state = useSelector(state => state.todos.todos);

  const workingList = state.filter(todo => todo.isDone === false).map((todo, i) => <Todo todo={todo} key={todo.id} ></Todo>);

  const doneList = state.filter(todo => todo.isDone === true).map((todo, i) => <Todo todo={todo} key={todo.id}></Todo>);

  return (
    <div id="todoboard_wrap">
      <div className='Doing'>
        <h2>🧃 하는중이야</h2>
        {workingList}
      </div>
      <div className='Done'>
        <h2>📌 끝!</h2>
        {doneList}
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
