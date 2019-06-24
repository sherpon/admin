import { 
  FETCH_POST_TEMPLATE,
  FETCH_POST_TEMPLATE_SUCCESS,
  FETCH_POST_TEMPLATE_FAILURE,
  FETCH_POST_TEMPLATE_RESET,
} from '../../pages/newTemplate/newTemplateActions';


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
    case FETCH_POST_TEMPLATE:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_POST_TEMPLATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_POST_TEMPLATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };
    
    case FETCH_POST_TEMPLATE_RESET:
      return initialState;

    default:
      return state;
  }
};