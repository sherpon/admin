import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import accountReducer from './accountReducer';
import editFileReducer from './editFileReducer';
import newPageReducer from './newPageReducer';
import newTemplateReducer from './newTemplateReducer';
import mediaReducer from './mediaReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  login: loginReducer,
  account: accountReducer,
  editFile: editFileReducer,
  newPage: newPageReducer,
  newTemplate: newTemplateReducer,
  media: mediaReducer,
  settings: settingsReducer,
})