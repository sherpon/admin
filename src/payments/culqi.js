/**
 * https://www.culqi.com/docs/#/suscripciones/inicio
 * https://www.culqi.com/docs/#/pagos/js
 */

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
/** components */
/** containers */
/** styles */
/** files */
/** strings */

export const culqiInclude = () => {
  const culqiTag = document.createElement('script');
  culqiTag.setAttribute('src', 'https://checkout.culqi.com/v2');
  document.body.appendChild(culqiTag);
};

export const culqiInit = () => {
  Culqi.publicKey = process.env.PAYMENT_PROCESSOR_PUBLIC_KEY;
  Culqi.init();
};

export const CulqiForm = ({
    strings, 
    stepForm,
    plan,
    userForm,
    handleChangeStep,
    handleOnChangePaymentForm,
    handleOnClickPay
  }) => {
  return(
    <div className="culqi-form">

      <label htmlFor="new-website-page__card__email">{strings.userEmailLabel}</label>
      <input 
        id="new-website-page__card__email" type="text"
        placeholder={'e.g. anna.ferris@gmail.com'}
        value={userForm.email}
        disabled={true}
        size="50"
        data-culqi="card[email]" id="card[email]"
      />

      <label htmlFor="new-website-page__card__number">{strings.cardNumberLabel}</label>
      <input 
        id="new-website-page__card__number" type="text"
        placeholder={'e.g. 1234 1234 1234 1234'}
        value={stepForm.cardNumber}
        onChange={ (event) => handleOnChangePaymentForm({...stepForm, cardNumber: event.target.value})}
        size="20"
        data-culqi="card[number]" id="card[number]"
      />

      <label>
        <span>{strings.expirationLabel}</span>
        <input 
          type="text"
          placeholder={'e.g. 02'}
          value={stepForm.expirationMM}
          onChange={ (event) => handleOnChangePaymentForm({...stepForm, expirationMM: event.target.value})}
          size="2"
          data-culqi="card[exp_month]" id="card[exp_month]"
        />
        <input 
          type="text"
          placeholder={'e.g. 2040'}
          value={stepForm.expirationYYYY}
          onChange={ (event) => handleOnChangePaymentForm({...stepForm, expirationYYYY: event.target.value})}
          size="4"
          data-culqi="card[exp_year]" id="card[exp_year]"
        />
      </label>

      <label htmlFor="new-website-page__card__cvv">{strings.cvvLabel}</label>
      <input 
        id="new-website-page__card__cvv" type="text"
        placeholder={'e.g. 123'}
        value={stepForm.cvv}
        onChange={ (event) => handleOnChangePaymentForm({...stepForm, cvv: event.target.value})}
        size="4"
        data-culqi="card[cvv]" id="card[cvv]"
      />

      <button 
        className="sherpon-button-primary button" 
        onClick={() => handleOnClickPay()}
      >
        {`${strings.payLabel} ${plan.planPriceLabel}`}
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

export const culqiPay = () => (dispatch, getState) => {
  // first, create the callback
  window.culqi = async () => {
    if (Culqi.token) { // ¡Objeto Token creado exitosamente!
      console.log('¡Objeto Token creado exitosamente!');
        // var token = Culqi.token.id;
        try {
          const userId = getState().user.id;
          const newWebsiteState = getState().pages.newWebsite;
          const websiteForm = newWebsiteState.stepForm1;
          const planForm = newWebsiteState.stepForm2;
          const customerForm = newWebsiteState.stepForm3;
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
              paymentProcessorParameters: {
                tokenId: Culqi.token.id,  // culqi token
                planId: planForm.planId,
                customerId: customerForm.customerId,
                firstName: customerForm.userFirstName,
                lastName: customerForm.userLastName,
                address: customerForm.address,
                addressCity: customerForm.addressCity,
                countryCode: customerForm.countryCode,
                email: customerForm.email,
                phoneNumber: customerForm.phone,
              },
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
        // alert('Se ha creado un token:' + token);
    } else { // ¡Hubo algún problema!
        // Mostramos JSON de objeto error en consola
        // console.log(Culqi.error);
        // alert(Culqi.error.user_message);
        console.error(Culqi.error);
        console.error(Culqi.error.user_message);
        dispatch({
          type: FETCH_CREATE_NEW_WEBSITE_FAILURE,
          errorStatus: 400,
        });
    }
  };

  // place the charge
  dispatch({ 
    type: FETCH_CREATE_NEW_WEBSITE 
  });
  Culqi.createToken();
};