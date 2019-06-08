import { 
  FETCH_CREATE_NEW_WEBSITE_SUCCESS, 
  ACCOUNT_CHOOSE_WEBSITE 
} from '../pages/account/accountActions';

import { USERS_LOGOUT } from '../actions/users/logout';

import { initWebsite, setWebsite, cleanWebsite } from '../modules/session';

const initialState = {
  id: '',
  name: '',
  favicon: '',
  domain: '',
  storage: 0,
  createdAt: null,
  permission: '',
};

/**
 * @function userReducer
 */
export default (state = initWebsite(initialState), action) => {
  switch (action.type) {
    case FETCH_CREATE_NEW_WEBSITE_SUCCESS:
      setWebsite(action.website);
      return {
        ...state,
        ...action.website
      };

    case ACCOUNT_CHOOSE_WEBSITE:
      setWebsite(action.website);
      return {
        ...state,
        ...action.website
      };
  
    case USERS_LOGOUT:
        cleanWebsite();
      return {
        ...initialState,
      };

    default:
      return state;
  }
};