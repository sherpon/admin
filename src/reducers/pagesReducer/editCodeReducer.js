import { 
  FETCH_PUT_FILES_GET_FILES_CODESOURCE,
  FETCH_PUT_FILES_GET_FILES_CODESOURCE_SUCCESS,
  FETCH_PUT_FILES_GET_FILES_CODESOURCE_FAILURE,
  FETCH_PUT_FILES_CODESOURCE,
  FETCH_PUT_FILES_CODESOURCE_SUCCESS,
  FETCH_PUT_FILES_CODESOURCE_FAILURE,
  FETCH_PUT_FILES_CODESOURCE_RESET,
} from '../../pages/editCode/editCodeActions';


const initialState = {
  isFetching: false,
  errorStatus: 200,
  error:'',
  file: {
    filename: '',
    type: '',
    createdAt: '',
    sourceCode: '',
  },
};

/**
 * 
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PUT_FILES_GET_FILES_CODESOURCE:
      return {
        ...state,
        isFetching: true,
        file: action.file,
      };

    case FETCH_PUT_FILES_GET_FILES_CODESOURCE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        file: action.file,
      };

    case FETCH_PUT_FILES_GET_FILES_CODESOURCE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };

    case FETCH_PUT_FILES_CODESOURCE:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_PUT_FILES_CODESOURCE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_PUT_FILES_CODESOURCE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };
    
    case FETCH_PUT_FILES_CODESOURCE_RESET:
      return initialState;

    default:
      return state;
  }
};