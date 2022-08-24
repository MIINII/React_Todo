const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELTE_TODO';
const TOGGLE_STATUS_TODO = 'TOGGLE_STATUS_TODO';

// Action Creator
export const addTodo = payload => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = payload => {
  return { type: DELETE_TODO, payload };
};

export const toggleStatusTodo = payload => {
  return { type: TOGGLE_STATUS_TODO, payload };
};

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
        todos: state.todos.filter(todos => todos.isDone !== action.payload.isDone),
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.filter(todos => (todos.id !== action.payload.id ? { ...todos, isDone: !todos.isDone } : todos)),
      };
    default:
      return state;
  }
};

export default todos; // Action value
