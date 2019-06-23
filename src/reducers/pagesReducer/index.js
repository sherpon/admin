import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import accountReducer from './accountReducer';
import newPageReducer from './newPageReducer';
import mediaReducer from './mediaReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  login: loginReducer,
  account: accountReducer,
  newPage: newPageReducer,
  media: mediaReducer,
  settings: settingsReducer,
})