import { combineReducers } from 'redux';
import UserReducer from './reducer-user';
import ActiveUserReducer from './reducer-active-user';

export const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
})