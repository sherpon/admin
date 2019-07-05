/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const FETCH_PUBLISH_FILE = 'FETCH_PUBLISH_FILE';
export const FETCH_PUBLISH_FILE_SUCCESS = 'FETCH_PUBLISH_FILE_SUCCESS';
export const FETCH_PUBLISH_FILE_FAILURE = 'FETCH_PUBLISH_FILE_FAILURE';
export const FETCH_PUBLISH_FILE_RESET = 'FETCH_PUBLISH_FILE_RESET';

/** actions */
/** apis */
/** logics */
/** utils */
/** files */

/**
 * 
 */
export const publishFile = (filename) => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: FETCH_PUBLISH_FILE 
    });
    const response = await axios({
      method: 'post',
      url: `${process.env.PUBLISHER_ENDPOINT}/?userId=${userId}&websiteId=${websiteId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        filename: filename,
      },
    });
    if (response.status===204) {
      dispatch({
        type: FETCH_PUBLISH_FILE_SUCCESS,
      });
    } else {
      dispatch({
        type: FETCH_PUBLISH_FILE_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_PUBLISH_FILE_FAILURE,
      errorStatus: error.response.status,
    });
  }
};