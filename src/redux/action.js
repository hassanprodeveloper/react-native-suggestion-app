// this function get data from splash screen from local storage and set the data in redux store
const initilizeTodos = (data) => {
  return (dispatch) => {
    dispatch({type: 'INITILIZE', payload: data});
  };
};
// this function add todos in todos list in redux store
const todoData = (data) => {
  return (dispatch) => {
    dispatch({type: 'SET_TODOS', payload: data});
  };
};
// this function is used for deleting data from list
const deleteTodo = (data) => {
  return (dispatch) => {
    dispatch({type: 'DELETE_TODOS', payload: data});
  };
};
// this function is used for deleting data from list
const resetTodo = (data) => {
  return (dispatch) => {
    dispatch({type: 'RESET_TODOS', payload: data});
  };
};
// this function update the status of todos
const todoStatus = (data) => {
  return (dispatch) => {
    dispatch({type: 'SET_TODOS_STATUS', payload: data});
  };
};

export {todoData,resetTodo, deleteTodo, todoStatus, initilizeTodos};
