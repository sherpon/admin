import {
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_RESET,
} from '../../actions/users/login';

const initialState = {
  isFetching: localStorage.getItem('loginIsFetching') !== null ? true : false,
  error:'',
};

/**
 * @function loginReducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN:
      localStorage.setItem('loginIsFetching',true);
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_LOGIN_SUCCESS:
      localStorage.removeItem('loginIsFetching');
      return {
        ...state,
        isFetching: false,
      };
    
    case FETCH_LOGIN_FAILURE:
      localStorage.removeItem('loginIsFetching');
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case FETCH_LOGIN_RESET:
      localStorage.removeItem('loginIsFetching');
      return initialState;
  
    default:
      return state;
  }
};