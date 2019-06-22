import { 
  FETCH_POST_MEDIA,
  FETCH_POST_MEDIA_SUCCESS,
  FETCH_POST_MEDIA_FAILURE,
  FETCH_POST_MEDIA_RESET,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../../pages/media/mediaActions';


const initialState = {
  isFetching: false,
  errorStatus: 200,
  error:'',
  showModal: false,
};

/**
 * @function loginReducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };

    case FETCH_POST_MEDIA:
      return {
        ...state,
        isFetching: true,
        showModal: false,
      };

    case FETCH_POST_MEDIA_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_POST_MEDIA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };
    
    case FETCH_POST_MEDIA_RESET:
      return initialState;

    default:
      return state;
  }
};