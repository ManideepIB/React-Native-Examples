const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    case 'SET_TODOS':
      return {
        todos: action.payload,
      };
    default:
      return state;
  }
};
export default todoReducer;
