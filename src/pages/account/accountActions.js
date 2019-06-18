/** libs */
import axios from 'axios';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** files */

export const FETCH_UPDATE_USER = 'FETCH_UPDATE_USER';
export const FETCH_UPDATE_USER_SUCCESS = 'FETCH_UPDATE_USER_SUCCESS';
export const FETCH_UPDATE_USER_FAILURE = 'FETCH_UPDATE_USER_FAILURE';
// export const FETCH_UPDATE_USER_RESET = 'FETCH_UPDATE_USER_RESET';

export const FETCH_CREATE_NEW_WEBSITE = 'FETCH_CREATE_NEW_WEBSITE';
export const FETCH_CREATE_NEW_WEBSITE_SUCCESS = 'FETCH_CREATE_NEW_WEBSITE_SUCCESS';
export const FETCH_CREATE_NEW_WEBSITE_FAILURE = 'FETCH_CREATE_NEW_WEBSITE_FAILURE';
export const FETCH_CREATE_NEW_WEBSITE_RESET = 'FETCH_CREATE_NEW_WEBSITE_RESET';
export const ACCOUNT_CHOOSE_WEBSITE = 'ACCOUNT_CHOOSE_WEBSITE';

export const updateUser = (name, email, phone) => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: FETCH_UPDATE_USER 
    });
    const response = await axios({
      method: 'put',
      url: `${process.env.API_ENDPOINT}/putUsers?userId=${userId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        name: name,
        email: email,
        phone: phone,
      }
    });
    if (response.status===204) {
      // CREATED
      dispatch({
        type: FETCH_UPDATE_USER_SUCCESS,
        name: name,
        email: email,
        phone: phone,
      });
    } else {
      console.log('Failed. Response status ', response.status);
      dispatch({
        type: FETCH_UPDATE_USER_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_UPDATE_USER_FAILURE,
      errorStatus: error.response.status,
    });
  }
};

export const createNewWebsiteReset = () => (dispatch) => {
  dispatch({
    type: FETCH_CREATE_NEW_WEBSITE_RESET
  });
};

export const createNewWebsite = (name, domain) => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: FETCH_CREATE_NEW_WEBSITE 
    });
    const response = await axios({
      method: 'post',
      url: `${process.env.API_ENDPOINT}/postWebsites?userId=${userId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        name: name,
        domain: domain,
      }
    });
    if (response.status===201) {
      // CREATED
      dispatch({
        type: FETCH_CREATE_NEW_WEBSITE_SUCCESS,
        website: response.data,
      });
      history.push('/website');
    } else if (response.status===406) {
      // NOT ACCEPTABLE domain is not available
      dispatch({
        type: FETCH_CREATE_NEW_WEBSITE_FAILURE,
        errorStatus: 406,
      });
      console.error('NOT ACCEPTABLE. Domain is not available');
    } else if (response.status===401) {
      // UNAUTHORIZED
      dispatch({
        type: FETCH_CREATE_NEW_WEBSITE_FAILURE,
        errorStatus: 401,
      });
      console.error('UNAUTHORIZED');
    } else {
      dispatch({
        type: FETCH_CREATE_NEW_WEBSITE_FAILURE,
        errorStatus: 400
      });
      console.error('the response status is not like expected');
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_CREATE_NEW_WEBSITE_FAILURE,
      errorStatus: error.response.status,
    });
  }
    
};

export const chooseWebsite = (websiteId) => (dispatch, getState) => {
  const websites = getState().user.websites;
  const website = websites.find(_website => _website.id===websiteId);
  dispatch({
    type: ACCOUNT_CHOOSE_WEBSITE,
    website: website,
  });
  history.push('/website');
};