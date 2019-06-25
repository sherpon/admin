/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const FETCH_PUT_FILES_GET_FILES_CODESOURCE = 'FETCH_PUT_FILES_GET_FILES_CODESOURCE';
export const FETCH_PUT_FILES_GET_FILES_CODESOURCE_SUCCESS = 'FETCH_PUT_FILES_GET_FILES_CODESOURCE_SUCCESS';
export const FETCH_PUT_FILES_GET_FILES_CODESOURCE_FAILURE = 'FETCH_PUT_FILES_GET_FILES_CODESOURCE_FAILURE';
export const FETCH_PUT_FILES_CODESOURCE = 'FETCH_PUT_FILES_CODESOURCE';
export const FETCH_PUT_FILES_CODESOURCE_SUCCESS = 'FETCH_PUT_FILES_CODESOURCE_SUCCESS';
export const FETCH_PUT_FILES_CODESOURCE_FAILURE = 'FETCH_PUT_FILES_CODESOURCE_FAILURE';
export const FETCH_PUT_FILES_CODESOURCE_RESET = 'FETCH_PUT_FILES_CODESOURCE_RESET';

/** actions */
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** files */

export const getFile = (filename) => async (dispatch, getState) => {
  const files = getState().files;
  if ( typeof files === 'string' || files.lenght===0 ) {
    history.push('/website/pages');
  } else {
    const file = files.find(_file => _file.filename===filename);
    dispatch({
      type: FETCH_PUT_FILES_GET_FILES_CODESOURCE,
      file: {
        filename: file.filename,
        type: file.type,
        createdAt: file.createdAt,
        sourceCode: '',
      }
    });
    try {
      const userId = getState().user.id;
      const websiteId = getState().website.id;
      const response = await axios({
        method: 'get',
        url: `${process.env.API_ENDPOINT}/getFilesSourceCode?userId=${userId}&websiteId=${websiteId}&type=${file.type}&filename=${file.filename}`,
        headers: {},
        data: {},
      });
      if (response.status===202) {
        dispatch({
          type: FETCH_PUT_FILES_GET_FILES_CODESOURCE_SUCCESS,
          file: {
            filename: file.filename,
            type: file.type,
            createdAt: file.createdAt,
            sourceCode: response.data.sourceCode,
          }
        });
      } else {
        dispatch({
          type: FETCH_PUT_FILES_GET_FILES_CODESOURCE_FAILURE,
          errorStatus: response.status,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: FETCH_PUT_FILES_GET_FILES_CODESOURCE_FAILURE,
        errorStatus: error.response.status,
      });
    }
  }
};

export const handleOnChangeFileSourceCode = (sourceCode) => (dispatch, getState) => {};

export const putFiles = () => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    const file = getState().pages.editCode.file;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: FETCH_PUT_FILES_CODESOURCE 
    });
    const response = await axios({
      method: 'put',
      url: `${process.env.API_ENDPOINT}/putFilesSourceCode?userId=${userId}&websiteId=${websiteId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        filename: file.filename,
        type: file.type,
        sourceCode: file.sourceCode,
      },
    });
    if (response.status===204) {
      dispatch({
        type: FETCH_PUT_FILES_CODESOURCE_SUCCESS,
      });
    } else {
      dispatch({
        type: FETCH_PUT_FILES_CODESOURCE_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_PUT_FILES_CODESOURCE_FAILURE,
      errorStatus: error.response.status,
    });
  }
};

export const handleOnClickPublishFile = () => (dispatch, getState) => {};