/** libs */
import axios from 'axios';
/** constants */
export const FETCH_UPDATE_WEBSITE = 'FETCH_UPDATE_WEBSITE';
export const FETCH_UPDATE_WEBSITE_SUCCESS = 'FETCH_UPDATE_WEBSITE_SUCCESS';
export const FETCH_UPDATE_WEBSITE_FAILURE = 'FETCH_UPDATE_WEBSITE_FAILURE';
export const FETCH_UPDATE_WEBSITE_RESET = 'FETCH_UPDATE_WEBSITE_RESET';

/** actions */
/** apis */
/** logics */
/** utils */
/** files */

export const updateWebsite = (name, favicon, newDomain) => async (dispatch, getState) => {
  try {
    const userId = getState().user.id;
    const websiteId = getState().website.id;
    const oldDomain = getState().website.domain;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    dispatch({ 
      type: FETCH_UPDATE_WEBSITE 
    });
    const response = await axios({
      method: 'put',
      url: `${process.env.MICROSERVICES_ENDPOINT}/putWebsites?userId=${userId}&websiteId=${websiteId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        name: name,
        favicon: favicon,
        newDomain: newDomain,
        oldDomain: oldDomain,
      }
    });
    if (response.status===204) {
      // CREATED
      dispatch({
        type: FETCH_UPDATE_WEBSITE_SUCCESS,
        websiteId: websiteId,
        name: name,
        favicon: favicon,
        domain: newDomain,
      });
    } else {
      console.log('Failed. Response status ', response.status);
      dispatch({
        type: FETCH_UPDATE_WEBSITE_FAILURE,
        errorStatus: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_UPDATE_WEBSITE_FAILURE,
      errorStatus: error.response.status,
    });
  }
};