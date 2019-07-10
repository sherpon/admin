/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const FETCH_POST_TEMPLATE = 'FETCH_POST_TEMPLATE';
export const FETCH_POST_TEMPLATE_SUCCESS = 'FETCH_POST_TEMPLATE_SUCCESS';
export const FETCH_POST_TEMPLATE_FAILURE = 'FETCH_POST_TEMPLATE_FAILURE';
export const FETCH_POST_TEMPLATE_RESET = 'FETCH_POST_TEMPLATE_RESET';

/** actions */
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** files */

export const postTemplate = (page) => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: FETCH_POST_TEMPLATE 
    });
    const response = await axios({
      method: 'post',
      url: `${process.env.MICROSERVICES_ENDPOINT}/postFiles?userId=${userId}&websiteId=${websiteId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        type: 'template',
        filename: page.filename,
      }
    });
    if (response.status===201) {
      const newFile = {
        type: 'template',
        filename: page.filename,
        createdAt: response.data.createdAt,
      };
      const newFilesList = [newFile, ...getState().files];
      dispatch({
        type: FETCH_POST_TEMPLATE_SUCCESS,
        files: newFilesList,
      });
      history.replace('/website/pages');
    } else {
      dispatch({
        type: FETCH_POST_TEMPLATE_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_POST_TEMPLATE_FAILURE,
      errorStatus: error.response.status,
    });
  }
};