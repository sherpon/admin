/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const EDIT_CODE_FETCH_GET_FILES_CODESOURCE = 'EDIT_CODE_FETCH_GET_FILES_CODESOURCE';
export const EDIT_CODE_FETCH_GET_FILES_CODESOURCE_SUCCESS = 'EDIT_CODE_FETCH_GET_FILES_CODESOURCE_SUCCESS';
export const EDIT_CODE_FETCH_GET_FILES_CODESOURCE_FAILURE = 'EDIT_CODE_FETCH_GET_FILES_CODESOURCE_FAILURE';

export const EDIT_CODE_HANDLE_ONCHANGE_FILE_SOURCECODE = 'EDIT_CODE_HANDLE_ONCHANGE_FILE_SOURCECODE';

export const EDIT_CODE_FETCH_PUT_FILES_CODESOURCE = 'EDIT_CODE_FETCH_PUT_FILES_CODESOURCE';
export const EDIT_CODE_FETCH_PUT_FILES_CODESOURCE_SUCCESS = 'EDIT_CODE_FETCH_PUT_FILES_CODESOURCE_SUCCESS';
export const EDIT_CODE_FETCH_PUT_FILES_CODESOURCE_FAILURE = 'EDIT_CODE_FETCH_PUT_FILES_CODESOURCE_FAILURE';
export const EDIT_CODE_FETCH_PUT_FILES_CODESOURCE_RESET = 'EDIT_CODE_FETCH_PUT_FILES_CODESOURCE_RESET';

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
      type: EDIT_CODE_FETCH_GET_FILES_CODESOURCE,
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
        url: `${process.env.MICROSERVICES_ENDPOINT}/getFilesSourceCode?userId=${userId}&websiteId=${websiteId}&type=${file.type}&filename=${file.filename}`,
        headers: {},
        data: {},
      });
      if (response.status===202) {
        dispatch({
          type: EDIT_CODE_FETCH_GET_FILES_CODESOURCE_SUCCESS,
          file: {
            filename: file.filename,
            type: file.type,
            createdAt: file.createdAt,
            style: file.style,
            sourceCode: response.data.sourceCode,
          }
        });
      } else {
        dispatch({
          type: EDIT_CODE_FETCH_GET_FILES_CODESOURCE_FAILURE,
          errorStatus: response.status,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: EDIT_CODE_FETCH_GET_FILES_CODESOURCE_FAILURE,
        errorStatus: error.response.status,
      });
    }
  }
};

export const handleOnChangeFileSourceCode = (sourceCode) => (dispatch, getState) => {
  dispatch({
    type: EDIT_CODE_HANDLE_ONCHANGE_FILE_SOURCECODE,
    sourceCode: sourceCode,
  });
};

export const putFiles = () => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    const file = getState().pages.editCode.file;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: EDIT_CODE_FETCH_PUT_FILES_CODESOURCE 
    });
    const response = await axios({
      method: 'put',
      url: `${process.env.MICROSERVICES_ENDPOINT}/putFilesSourceCode?userId=${userId}&websiteId=${websiteId}`,
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
        type: EDIT_CODE_FETCH_PUT_FILES_CODESOURCE_SUCCESS,
      });
    } else {
      dispatch({
        type: EDIT_CODE_FETCH_PUT_FILES_CODESOURCE_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: EDIT_CODE_FETCH_PUT_FILES_CODESOURCE_FAILURE,
      errorStatus: error.response.status,
    });
  }
};
