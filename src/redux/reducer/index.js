import {combineReducers} from 'redux';
import todos from './todos'
import user from './user'
// import other reducers here

export default combineReducers({
    todos: todos,
    user: user,
    // other reducers will come here
})