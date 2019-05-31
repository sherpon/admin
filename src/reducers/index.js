import { combineReducers } from 'redux'
// import isFetchingReducer from './isFetchingReducer';
import languageReducer from './languageReducer';
import userReducer from './userReducer';
import pagesReducer from './pagesReducer';

export default combineReducers({
  // isFetching: isFetchingReducer,
  language: languageReducer,
  user: userReducer,
  // websiteReducer
  pages: pagesReducer,
})