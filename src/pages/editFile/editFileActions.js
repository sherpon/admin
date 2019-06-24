/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const FETCH_PUT_FILES = 'FETCH_PUT_FILES';
export const FETCH_PUT_FILES_SUCCESS = 'FETCH_PUT_FILES_SUCCESS';
export const FETCH_PUT_FILES_FAILURE = 'FETCH_PUT_FILES_FAILURE';
export const FETCH_PUT_FILES_RESET = 'FETCH_PUT_FILES_RESET';

/** actions */
/** apis */
/** logics */
/** utils */
// import history from '../../modules/history';
/** files */

export const putFiles = (file) => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: FETCH_PUT_FILES 
    });
    const response = await axios({
      method: 'put',
      url: `${process.env.API_ENDPOINT}/putFilesAttributes?userId=${userId}&websiteId=${websiteId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: file,
    });
    if (response.status===204) {
      let files = getState().files;
      const fileIndex = files.findIndex(_file => {
        return _file.filename===file.filename
      });
      files[fileIndex] = file;
      dispatch({
        type: FETCH_PUT_FILES_SUCCESS,
        files: files,
      });
    } else {
      dispatch({
        type: FETCH_PUT_FILES_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_PUT_FILES_FAILURE,
      errorStatus: error.response.status,
    });
  }
};