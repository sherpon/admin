/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const FETCH_POST_PAGE = 'FETCH_POST_PAGE';
export const FETCH_POST_PAGE_SUCCESS = 'FETCH_POST_PAGE_SUCCESS';
export const FETCH_POST_PAGE_FAILURE = 'FETCH_POST_PAGE_FAILURE';
export const FETCH_POST_PAGE_RESET = 'FETCH_POST_PAGE_RESET';

/** actions */
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** files */

export const postPage = (page) => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: FETCH_POST_PAGE 
    });
    const response = await axios({
      method: 'post',
      url: `${process.env.MICROSERVICES_ENDPOINT}/postFiles?userId=${userId}&websiteId=${websiteId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        type: 'page',
        filename: page.filename,
        url: page.url,
        title: page.title,
      }
    });
    if (response.status===201) {
      const newFile = {
        type: 'page',
        filename: page.filename,
        createdAt: response.data.createdAt,
        url: page.url,
        title: page.title,
        keywords: '',
        description: '',
        themeColor: '',
        meta: '',
        script: '',
        style: '',
      };
      const newFilesList = [newFile, ...getState().files];
      dispatch({
        type: FETCH_POST_PAGE_SUCCESS,
        files: newFilesList,
      });
      history.replace('/website/pages');
    } else {
      dispatch({
        type: FETCH_POST_PAGE_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_POST_PAGE_FAILURE,
      errorStatus: error.response.status,
    });
  }
};