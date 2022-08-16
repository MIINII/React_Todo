import React from 'react';
import TodoItem from './TodoItem';
import './todo_board.css';
// import {useTodoState} from './Form'

function TodoBoard(props) {
  console.log('호잇', props.todoList);
  // const todos = useTodoState();
  return (
    <div id='todoboard_wrap'>
      {props.todoList.map(item => (
        <TodoItem item={item} />
      ))}
      {/* {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} done={todo.done} />
      ))} */}
    </div>
  );
}

export default TodoBoard;
