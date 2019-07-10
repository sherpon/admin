/** libs */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
/** constants */
import { 
  FETCH_CREATE_NEW_WEBSITE,
  FETCH_CREATE_NEW_WEBSITE_SUCCESS,
  FETCH_CREATE_NEW_WEBSITE_FAILURE,
} from '../pages/newWebsite/newWebsiteActions';
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
import history from '../modules/history';
/** components */
/** containers */
/** styles */
/** files */
/** strings */

export const FreeForm = ({
  strings,
  handleChangeStep,
  handleOnClickPay,
}) => {
  return(
    <div className="free-form">
      <p>
        {strings.freeMessage}
      </p>
      <button 
        className="sherpon-button-primary button" 
        onClick={() => handleOnClickPay()}
      >
        {strings.freeButton}
      </button>

      <button 
        className="sherpon-button-primary-outline button" 
        onClick={() => handleChangeStep(2)}
      >
        {strings.goBackButton}
      </button>
    </div>
  );
};

export const freePay = () => async (dispatch, getState) => {
  try {
    dispatch({ 
      type: FETCH_CREATE_NEW_WEBSITE 
    });

    const userId = getState().user.id;
    const newWebsiteState = getState().pages.newWebsite;
    const websiteForm = newWebsiteState.stepForm1;
    const planForm = newWebsiteState.stepForm2;
    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    
    const response = await axios({
      method: 'post',
      url: `${process.env.MICROSERVICES_ENDPOINT}/postWebsites?userId=${userId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        name: websiteForm.websiteName,
        domain: websiteForm.websiteDomain,
        type: planForm.websiteType,
        paymentProcessorParameters: {},
      }
    });
    if (response.status===201) {
      // CREATED
      dispatch({
        type: FETCH_CREATE_NEW_WEBSITE_SUCCESS,
        website: response.data,
      });
      history.push('/website');
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
}