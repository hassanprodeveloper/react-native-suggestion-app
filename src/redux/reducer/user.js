const INITIAL_STATE = {
  name: 'Guest',
  totalTodos: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_INFO':
      return action.payload;
  }
  switch (action.type) {
    case 'USER_NAME':
      return (state.name = action.payload);
  }
  switch (action.type) {
    case 'USER_TODOS':
      return (state.totalTodos = action.payload);
  }
  return state;
};
