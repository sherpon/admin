import { 
  FETCH_POST_PAGE,
  FETCH_POST_PAGE_SUCCESS,
  FETCH_POST_PAGE_FAILURE,
  FETCH_POST_PAGE_RESET,
} from '../../pages/newPage/newPageActions';


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
    case FETCH_POST_PAGE:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_POST_PAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_POST_PAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };
    
    case FETCH_POST_PAGE_RESET:
      return initialState;

    default:
      return state;
  }
};