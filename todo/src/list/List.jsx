import React from 'react';
import Todo from '../todo/Todo';
import './list.css';
// import Form from './Form'

function List({ todos, onToggle, onRemove }) {
  return (
    <div id='todoboard_wrap'>
      <div className='todos'>
        {todos.map((todos)=> {
          return(
            <Todo todos={todos} key={todos.id} onRemove={onRemove} onToggle={onToggle} />
          )
        })}
      </div>
    </div>
  );
}

export default List;

// {todoList.map(item => ( <TodoList item={item} />))}
// {todos.map(todo=> ( <TodoList todo={todo} key={todo.id} done={todo.checked} onRemove={todo.onRemove} />
// ))}
