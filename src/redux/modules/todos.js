import { createAction } from '@reduxjs/toolkit';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELTE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creator
export const addTodo = createAction(ADD_TODO, payload => payload);
export const delteTodo = createAction(DELETE_TODO, payload => payload);
export const toggleTodo = createAction(TOGGLE_TODO, payload => payload);

// initial State
const initialState = {
  todos: [{ id: 0, title: '', con: '', isDone: false }],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todos => todos.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        // 상태만 바꿔줘도 되기때문에 : map() 사용
        todos: state.todos.map(todo => {
          return todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo;
        }),
      };
    default:
      return state;
  }
};

export default todos; // Action value
