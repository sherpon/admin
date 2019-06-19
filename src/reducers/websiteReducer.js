import { 
  FETCH_CREATE_NEW_WEBSITE_SUCCESS, 
  ACCOUNT_CHOOSE_WEBSITE 
} from '../pages/account/accountActions';
import { FETCH_UPDATE_WEBSITE_SUCCESS } from '../pages/settings/settingsActions';

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

    case FETCH_UPDATE_WEBSITE_SUCCESS:
      setWebsite({
        ...state,
        name: action.name,
        domain: action.domain,
        favicon: action.favicon,
      });
      return {
        ...state,
        name: action.name,
        domain: action.domain,
        favicon: action.favicon,
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