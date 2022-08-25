// import { createAction } from '@reduxjs/toolkit';ㄴ
import { v4 as uuidv4 } from 'uuid';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELTE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creator
export const addTodo = todo => {
  return { type: ADD_TODO, todo };
};
export const deleteTodo = todo => {
  return { type: DELETE_TODO, todo };
};
export const toggleTodo = todo => {
  return { type: TOGGLE_TODO, todo };
};
// export const delteTodo = createAction(DELETE_TODO, payload => payload);
// export const toggleTodo = createAction(TOGGLE_TODO, payload => payload);

// const initialState = {
//   todos: new Array(3).fill({ id: null, title: '', desc: '', isDone: false }).map((el, i) => {
//     return {
//       id: uuidv4(),
//       title: `title${i}`,
//       con: `con${i}`,
//       isDone: i % 2 === 0 ? true : false,
//     };
//   }),
// };
const initialState = {
  todos: [],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // const newTodoList = [...state.todos, action.todo];
      return {
        ...state,
        todos: [...state.todos, action.todo],
        // todos: newTodoList
      };
    case DELETE_TODO:
      return {
        // ...state,
        todos: state.todos.filter(todos => todos.id !== action.todo),
      };
    case TOGGLE_TODO:
      return {
        // 상태만 바꿔줘도 되기때문에 : map() 사용
        todos: state.todos.map(todo => {
          return todo.id === action.todo ? { ...todo, isDone: !todo.isDone } : todo;
        }),
      };
    default:
      return state;
  }
};

export default todos; // Action value
