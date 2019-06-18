import { combineReducers } from 'redux'

import languageReducer from './languageReducer';
import userReducer from './userReducer';
import websiteReducer from './websiteReducer';
import filesReducer from './filesReducer';
import pagesReducer from './pagesReducer';

export default combineReducers({
  language: languageReducer,
  user: userReducer,
  website: websiteReducer,
  files: filesReducer,
  pages: pagesReducer,
})