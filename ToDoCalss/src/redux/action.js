export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    id: new Date().getTime(),
    text,
  },
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: {
    id,
  },
});

export const fetchTodos = () => ({
  type: 'FETCH_TODOS',
});

export const setTodos = todos => ({
  type: 'SET_TODOS',
  payload: todos,
});
