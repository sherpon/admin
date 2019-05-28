import { combineReducers } from 'redux'
import isFetchingReducer from './isFetchingReducer';
import languageReducer from './languageReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
  isFetching: isFetchingReducer,
  language: languageReducer,
  session: sessionReducer
})