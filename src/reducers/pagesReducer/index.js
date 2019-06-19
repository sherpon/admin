import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import accountReducer from './accountReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  login: loginReducer,
  account: accountReducer,
  settings: settingsReducer,
})