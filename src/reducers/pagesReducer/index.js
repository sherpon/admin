import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import accountReducer from './accountReducer';
import newWebsiteReducer from './newWebsiteReducer';
import editFileReducer from './editFileReducer';
import editCodeReducer from './editCodeReducer';
import editDesignReducer from './editDesignReducer';
import newPageReducer from './newPageReducer';
import newTemplateReducer from './newTemplateReducer';
import mediaReducer from './mediaReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  login: loginReducer,
  account: accountReducer,
  newWebsite: newWebsiteReducer,
  editFile: editFileReducer,
  editCode: editCodeReducer,
  editDesign: editDesignReducer,
  newPage: newPageReducer,
  newTemplate: newTemplateReducer,
  media: mediaReducer,
  settings: settingsReducer,
})