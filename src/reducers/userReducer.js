import { FETCH_LOGIN_SUCCESS } from '../actions/users/login'
import { FETCH_CREATE_NEW_WEBSITE_SUCCESS } from '../actions/websites/createNewWebsite';
import { USERS_LOGOUT } from '../actions/users/logout';

import { initUser, setUser, cleanUser } from '../modules/session';

const initialState = {
  id: '',
  name: '',
  email: '',
  phone: '',
  websites: []
};

/**
 * @function userReducer
 */
export default (state = initUser(initialState), action) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      setUser(action.user);
      return { 
        ...state, 
        ...action.user 
      };

    case FETCH_CREATE_NEW_WEBSITE_SUCCESS:
      state.websites.push(action.website);
      setUser(state);
      return {...state};

    case USERS_LOGOUT:
      cleanUser();
      return {
        ...initialState,
      };
    
    default:
      return state;
  }
}