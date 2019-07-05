import { 
  FETCH_UPDATE_WEBSITE,
  FETCH_UPDATE_WEBSITE_SUCCESS,
  FETCH_UPDATE_WEBSITE_FAILURE,
  FETCH_UPDATE_WEBSITE_RESET,
} from '../../pages/settings/settingsActions';


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
    case FETCH_UPDATE_WEBSITE:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_UPDATE_WEBSITE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_UPDATE_WEBSITE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };
    
    case FETCH_UPDATE_WEBSITE_RESET:
      return initialState;

    default:
      return state;
  }
};