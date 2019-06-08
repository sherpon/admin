import { 
  FETCH_CREATE_NEW_WEBSITE,
  FETCH_CREATE_NEW_WEBSITE_SUCCESS,
  FETCH_CREATE_NEW_WEBSITE_FAILURE,
  FETCH_CREATE_NEW_WEBSITE_RESET
} from '../../actions/websites/createNewWebsite';


const initialState = {
  isFetching: false,
  errorStatus: 200,
  error:'',
};

/**
 * @function loginReducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREATE_NEW_WEBSITE:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_CREATE_NEW_WEBSITE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_CREATE_NEW_WEBSITE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };

    case FETCH_CREATE_NEW_WEBSITE_RESET:
      return initialState;
  
    default:
      return state;
  }
};