import { FETCH_LOGIN_SUCCESS } from '../actions/users/login'
import { FETCH_UPDATE_USER_SUCCESS, FETCH_CREATE_NEW_WEBSITE_SUCCESS } from '../pages/account/accountActions';
import { FETCH_UPDATE_WEBSITE_SUCCESS } from '../pages/settings/settingsActions';
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

    case FETCH_UPDATE_USER_SUCCESS:
      setUser({...state, name: action.name, email: action.email, phone: action.phone});
      return {...state, name: action.name, email: action.email, phone: action.phone};

    case FETCH_CREATE_NEW_WEBSITE_SUCCESS:
      state.websites.push(action.website);
      setUser(state);
      return {...state};

    case FETCH_UPDATE_WEBSITE_SUCCESS:
      const websiteIndex = state.websites.findIndex( website => website.id===action.websiteId);
      let newState = {...state};
      newState.websites[websiteIndex].name = action.name;
      newState.websites[websiteIndex].domain = action.domain;
      newState.websites[websiteIndex].favicon = action.favicon;
      setUser(newState);
      return newState;

    case USERS_LOGOUT:
      cleanUser();
      return {
        ...initialState,
      };
    
    default:
      return state;
  }
}