import { 
  FETCH_CREATE_NEW_WEBSITE_SUCCESS, 
  ACCOUNT_CHOOSE_WEBSITE 
} from '../pages/account/accountActions';

import { USERS_LOGOUT } from '../actions/users/logout';

import { initFiles, setFiles, cleanFiles } from '../modules/session';

const initialState = [];

/**
 * @function userReducer
 */
export default (state = initFiles(initialState), action) => {
  switch (action.type) {
    /*case FETCH_CREATE_NEW_WEBSITE_SUCCESS:
      setFiles(action.files);
      return {
        ...state,
        ...action.files
      };*/

    /*case ACCOUNT_CHOOSE_WEBSITE:
      setFiles(action.files);
      return {
        ...state,
        ...action.files
      };*/
  
    case USERS_LOGOUT:
      cleanFiles();
      return {
        ...initialState,
      };

    default:
      return state;
  }
};