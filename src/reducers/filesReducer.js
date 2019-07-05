import { FETCH_GET_FILES, FETCH_GET_FILES_SUCCESS, } from '../pages/pages/pagesActions';
import { FETCH_POST_PAGE_SUCCESS } from '../pages/newPage/newPageActions';
import { FETCH_POST_TEMPLATE_SUCCESS } from '../pages/newTemplate/newTemplateActions';
import { FETCH_PUT_FILES_SUCCESS } from '../pages/editFile/editFileActions';
import { EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_SUCCESS } from '../pages/editDesign/editDesignActions';

import { USERS_LOGOUT } from '../actions/users/logout';

// import { initFiles, setFiles, cleanFiles } from '../modules/session';

const initialState = 'empty';

/**
 * @function filesReducer
 */
export default (state = initialState /* initFiles(initialState) */, action) => {
  switch (action.type) {
    case FETCH_GET_FILES:
      return action.files;

    case FETCH_GET_FILES_SUCCESS:
      return action.files;

    case FETCH_POST_PAGE_SUCCESS:
      return action.files;

    case FETCH_POST_TEMPLATE_SUCCESS:
      return action.files;
  
    case FETCH_PUT_FILES_SUCCESS:
      return action.files;

    case EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_SUCCESS:
      return action.files;

    case USERS_LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};