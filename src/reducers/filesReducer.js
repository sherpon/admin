import { FETCH_GET_FILES, FETCH_GET_FILES_SUCCESS, } from '../pages/pages/pagesActions';
import { FETCH_POST_PAGE_SUCCESS } from '../pages/newPage/newPageActions';
import { FETCH_POST_TEMPLATE_SUCCESS } from '../pages/newTemplate/newTemplateActions';

import { USERS_LOGOUT } from '../actions/users/logout';

// import { initFiles, setFiles, cleanFiles } from '../modules/session';

const initialState = 'empty';

/**
 * @function userReducer
 */
export default (state = initialState /* initFiles(initialState) */, action) => {
  switch (action.type) {
    case FETCH_GET_FILES:
      // setFiles(action.files);
      return action.files;

    case FETCH_GET_FILES_SUCCESS:
      // setFiles(action.files);
      return action.files;

    case FETCH_POST_PAGE_SUCCESS:
      // setFiles(action.files);
      return action.files;

    case FETCH_POST_TEMPLATE_SUCCESS:
      // setFiles(action.files);
      return action.files;
  
    case USERS_LOGOUT:
      // cleanFiles();
      return {
        ...initialState,
      };

    default:
      return state;
  }
};