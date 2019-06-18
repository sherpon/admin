/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const FETCH_GET_FILES = 'FETCH_GET_FILES';
export const FETCH_GET_FILES_SUCCESS = 'FETCH_GET_FILES_SUCCESS';
export const FETCH_GET_FILES_FAILURE = 'FETCH_GET_FILES_FAILURE';
export const FETCH_GET_FILES_RESET = 'FETCH_GET_FILES_RESET';

/** actions */
/** apis */
/** logics */
/** utils */
/** files */

/**
 * 
 */
export const getFiles = () => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    // const currentUser = firebase.auth().currentUser;
    // debugger
    // const token = await currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: FETCH_GET_FILES 
    });
    const response = await axios({
      method: 'get',
      url: `${process.env.API_ENDPOINT}/getFiles?userId=${userId}&websiteId=${websiteId}`,
      headers: {}
    });
    if (response.status===202) {
      dispatch({
        type: FETCH_GET_FILES_SUCCESS,
        files: response.data,
      });
    } else {
      dispatch({
        type: FETCH_GET_FILES_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_GET_FILES_FAILURE,
      errorStatus: error.response.status,
    });
  }
};