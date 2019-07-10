/** libs */
import axios from 'axios';
// import axios from './mockAxios';
/** constants */
export const FETCH_GET_MEDIA = 'FETCH_GET_MEDIA';
export const FETCH_GET_MEDIA_SUCCESS = 'FETCH_GET_MEDIA_SUCCESS';
export const FETCH_GET_MEDIA_FAILURE = 'FETCH_GET_MEDIA_FAILURE';
export const FETCH_GET_MEDIA_RESET = 'FETCH_GET_MEDIA_RESET';

export const FETCH_POST_MEDIA = 'FETCH_POST_MEDIA';
export const FETCH_POST_MEDIA_FILE_UPLOADED = 'FETCH_POST_MEDIA_FILE_UPLOADED';
export const FETCH_POST_MEDIA_SUCCESS = 'FETCH_POST_MEDIA_SUCCESS';
export const FETCH_POST_MEDIA_FAILURE = 'FETCH_POST_MEDIA_FAILURE';
export const FETCH_POST_MEDIA_RESET = 'FETCH_POST_MEDIA_RESET';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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
      url: `${process.env.MICROSERVICES_ENDPOINT}/getMedia?userId=${userId}&websiteId=${websiteId}`,
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

export const uploadPictureRequest = (file, directory) => async (dispatch, getState) => {
  try {
    const formData = new FormData();
    const filenameParsed = file.name.split(' ').join('--');
    formData.append('filename', filenameParsed);
    formData.append('directory', directory);
    formData.append('media', file);
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    const response = await axios({
      method: 'post',
      url: `${process.env.MICROSERVICES_ENDPOINT}/postMedia?userId=${userId}&websiteId=${websiteId}`,
      headers: {
        'Content-type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
      data: formData,
    });
    if (response.status===201) {
      // CREATED
      dispatch({
        type: FETCH_POST_MEDIA_FILE_UPLOADED,
        media: {
          filename: file.name,
          directory: directory,
          url: response.data.url,
          size: response.data.size,
          createdAt: response.data.createdAt,
        },
      });
    } else {
      console.log('Failed. Response status ', response.status);
    }
  } catch (error) {
    console.error(error);
  }
};

export const uploadPictures = (files, directory) => async (dispatch) => {
  console.table(files);
  dispatch({ 
    type: FETCH_POST_MEDIA, 
  });
  try {
    let arrayPromises = [];
    files.forEach(file => {
      arrayPromises.push(dispatch(uploadPictureRequest(file, directory)));
    });
    await Promise.all(arrayPromises);
    dispatch({ 
      type: FETCH_POST_MEDIA_SUCCESS, 
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_POST_MEDIA_FAILURE,
      errorStatus: error.response.status,
    });
  }
};

export const handleOpenModal = () => (dispatch) => {
  dispatch({
    type: OPEN_MODAL,
  });
};

export const handleCloseModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
  });
};