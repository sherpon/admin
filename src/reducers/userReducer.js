import { 
  FETCH_LOGIN_SUCCESS,
} from '../actions/users/login'

import { initUser, setUser } from '../modules/session';

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
    
    default:
      return state;
  }
}