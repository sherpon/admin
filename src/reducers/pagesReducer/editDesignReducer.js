import { 
  EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE,
  EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_SUCCESS,
  EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_FAILURE,
  EDIT_DESIGN_FETCH_PUT_FILES_DESIGN,
  EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_SUCCESS,
  EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_FAILURE,
  EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_RESET,
} from '../../pages/editDesign/editDesignActions';
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
    style: '',
    sourceCode: '',
  },
  isFileLoaded: false,
};

/**
 * 
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE:
      return {
        ...state,
        isFetching: true,
        isFileLoaded: false,
        file: action.file,
      };

    case EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFileLoaded: true,
        file: action.file,
      };

    case EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };

    case EDIT_DESIGN_FETCH_PUT_FILES_DESIGN:
      return {
        ...state,
        isFetching: true,
      };

    case EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorStatus: action.errorStatus,
      };
    
    case EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_RESET:
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