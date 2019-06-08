/** libs */
import axios from 'axios';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** files */

export const FETCH_CREATE_NEW_WEBSITE = 'FETCH_CREATE_NEW_WEBSITE';
export const FETCH_CREATE_NEW_WEBSITE_SUCCESS = 'FETCH_CREATE_NEW_WEBSITE_SUCCESS';
export const FETCH_CREATE_NEW_WEBSITE_FAILURE = 'FETCH_CREATE_NEW_WEBSITE_FAILURE';
export const FETCH_CREATE_NEW_WEBSITE_RESET = 'FETCH_CREATE_NEW_WEBSITE_RESET';

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
      history.push('/');
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