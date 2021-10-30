export const setUserInfo = (data) => {
  return (dispatch) => {
    dispatch({type: 'USER_INFO', payload: data});
  };
};
//
export const setUserName = (data) => {
  return (dispatch) => {
    dispatch({type: 'USER_NAME', payload: data});
  };
};
//
export const setUserTodos = (data) => {
  return (dispatch) => {
    dispatch({type: 'USER_TODOS', payload: data});
  };
};
