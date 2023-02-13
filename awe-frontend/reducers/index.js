import { combineReducers } from 'redux';
import authReducer from './auth';

// So can call by 'auth' instead of 'authReducer'
export default combineReducers({
    auth: authReducer,
    // Add more here
});