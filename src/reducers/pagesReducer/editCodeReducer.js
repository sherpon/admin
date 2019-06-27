import { 
  FETCH_PUT_FILES_GET_FILES_CODESOURCE,
  FETCH_PUT_FILES_GET_FILES_CODESOURCE_SUCCESS,
  FETCH_PUT_FILES_GET_FILES_CODESOURCE_FAILURE,
  HANDLE_ONCHANGE_FILE_SOURCECODE,
  FETCH_PUT_FILES_CODESOURCE,
  FETCH_PUT_FILES_CODESOURCE_SUCCESS,
  FETCH_PUT_FILES_CODESOURCE_FAILURE,
  FETCH_PUT_FILES_CODESOURCE_RESET,
} from '../../pages/editCode/editCodeActions';
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
  file: {
    filename: '',
    type: '',
    createdAt: '',
    sourceCode: '',
  },
  isFileLoaded: false,
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
        isFileLoaded: false,
        file: action.file,
      };

    case FETCH_PUT_FILES_GET_FILES_CODESOURCE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFileLoaded: true,
        file: action.file,
      };

    case FETCH_PUT_FILES_GET_FILES_CODESOURCE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };

    case HANDLE_ONCHANGE_FILE_SOURCECODE:
      return {
        ...state,
        file: {
          filename: state.file.filename,
          type: state.file.type,
          createdAt: state.file.createdAt,
          sourceCode: action.sourceCode,
        },
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
      };

    case FETCH_PUBLISH_FILE_RESET:
      return initialState;

    default:
      return state;
  }
};