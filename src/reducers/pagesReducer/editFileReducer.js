import { 
  FETCH_PUT_FILES,
  FETCH_PUT_FILES_SUCCESS,
  FETCH_PUT_FILES_FAILURE,
  FETCH_PUT_FILES_RESET,
} from '../../pages/editFile/editFileActions';
import {
  FETCH_PUBLISH_FILE,
  FETCH_PUBLISH_FILE_SUCCESS,
  FETCH_PUBLISH_FILE_FAILURE,
  FETCH_PUBLISH_FILE_RESET,
} from '../../actions/files/publishFile';

const initialState = {
  isFetching: false,
  errorStatus: 200,
  error:'',
};

/**
 * 
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PUT_FILES:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_PUT_FILES_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_PUT_FILES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
        error: action.error,
      };
    
    case FETCH_PUT_FILES_RESET:
      return initialState;

    case FETCH_PUBLISH_FILE:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_PUBLISH_FILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_PUBLISH_FILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
        error: action.error,
      };

    case FETCH_PUBLISH_FILE_RESET:
      return initialState;

    default:
      return state;
  }
};