import { combineReducers } from 'redux';
import UserReducer from './reducer-user';

export const allReducers = combineReducers({
  users: UserReducer
})