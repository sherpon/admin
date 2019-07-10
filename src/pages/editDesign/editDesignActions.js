/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE = 'EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE';
export const EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_SUCCESS = 'EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_SUCCESS';
export const EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_FAILURE = 'EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_FAILURE';
export const EDIT_DESIGN_FETCH_PUT_FILES_DESIGN = 'EDIT_DESIGN_FETCH_PUT_FILES_DESIGN';
export const EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_SUCCESS = 'EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_SUCCESS';
export const EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_FAILURE = 'EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_FAILURE';
export const EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_RESET = 'EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_RESET';
/** actions */
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** files */

export const backToDashboard = () => (dispatch, getState) => {
  const filename = getState().pages.editDesign.file.filename.split('.').join('-dot-');
  history.push(`/website/pages/edit-attributes/${filename}`);
};

export const getFile = (filename) => async (dispatch, getState) => {
  const files = getState().files;
  if ( typeof files === 'string' || files.lenght===0 ) {
    history.push('/website/pages');
  } else {
    const file = files.find(_file => _file.filename===filename);
    dispatch({
      type: EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE,
      file: {
        filename: file.filename,
        type: file.type,
        createdAt: file.createdAt,
        style: '',
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
          type: EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_SUCCESS,
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
          type: EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_FAILURE,
          errorStatus: response.status,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: EDIT_DESIGN_FETCH_GET_FILES_CODESOURCE_FAILURE,
        errorStatus: error.response.status,
      });
    }
  }
};

export const putFilesDesign = (style, sourceCode) => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    const file = getState().pages.editDesign.file;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: EDIT_DESIGN_FETCH_PUT_FILES_DESIGN 
    });
    const response = await axios({
      method: 'put',
      url: `${process.env.MICROSERVICES_ENDPOINT}/putFilesDesign?userId=${userId}&websiteId=${websiteId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        filename: file.filename,
        type: file.type,
        style: style,
        sourceCode: sourceCode,
      },
    });
    if (response.status===204) {
      let files = getState().files;
      if (file.type==='page') {
        // only for page type
        const fileIndex = files.findIndex(_file => _file.filename===file.filename);
        const fileTmp = files.find(_file => _file.filename===file.filename);
        files[fileIndex] = {...fileTmp, style};
      }
      dispatch({
        type: EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_SUCCESS,
        files: files,   // for files state
        file: {
          filename: file.filename,
          type: file.type,
          createdAt: file.createdAt,
          style: style,
          sourceCode: sourceCode,
        },
      });
    } else {
      dispatch({
        type: EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: EDIT_DESIGN_FETCH_PUT_FILES_DESIGN_FAILURE,
      errorStatus: error.response.status,
    });
  }
};
