import { combineReducers } from 'redux'

import languageReducer from './languageReducer';
import userReducer from './userReducer';
import pagesReducer from './pagesReducer';

export default combineReducers({
  language: languageReducer,
  user: userReducer,
  // websiteReducer
  pages: pagesReducer,
})