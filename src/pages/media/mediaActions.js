/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const FETCH_GET_MEDIA = 'FETCH_GET_MEDIA';
export const FETCH_GET_MEDIA_SUCCESS = 'FETCH_GET_MEDIA_SUCCESS';
export const FETCH_GET_MEDIA_FAILURE = 'FETCH_GET_MEDIA_FAILURE';
export const FETCH_GET_MEDIA_RESET = 'FETCH_GET_MEDIA_RESET';

/** actions */
/** apis */
/** logics */
/** utils */
/** files */

export const fetchMedia = () => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    // const currentUser = firebase.auth().currentUser;
    // debugger
    // const token = await currentUser.getIdToken(/* forceRefresh */ true);
    
    const response = await axios({
      method: 'get',
      url: `${process.env.API_ENDPOINT}/getMedia?userId=${userId}&websiteId=${websiteId}`,
      headers: {}
    });
    if (response.status===202) {
      dispatch({
        type: FETCH_GET_MEDIA_SUCCESS,
        media: response.data,
      });
    } else {
      dispatch({
        type: FETCH_GET_MEDIA_FAILURE,
        errorStatus: response.status,
        media: [],
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_GET_MEDIA_FAILURE,
      errorStatus: error.response.status,
      media: [],
    });
  }
};

/**
 * 
 */
export const getMedia = () => async (dispatch, getState) => {
  if (getState().media === 'empty') {
    dispatch({ 
      type: FETCH_GET_MEDIA ,
      media: 'fetching',
    });
    dispatch(fetchMedia());
  }
};