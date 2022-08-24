const ADD_TODO = 'ADD_TODO';

// Action Creator
export const addTodo = payload => {
  return { type: ADD_TODO, payload };
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
    default:
      return state;
  }
};

export default todos; // Action value
