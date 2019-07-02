/**
 * https://www.culqi.com/docs/#/suscripciones/inicio
 * https://www.culqi.com/docs/#/pagos/js
 */

/** libs */
import React from 'react';
import PropTypes from 'prop-types';
/** constants */
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
    handleChangeStep,
    handleOnChangePaymentForm,
    handleOnClickPay
  }) => {
  return(
    <div className="culqi-form">

      <label htmlFor="new-website-page__card__number">{strings.cardNumberLabel}</label>
      <input 
        id="new-website-page__card__number" type="text"
        placeholder={'e.g. 1234 1234 1234 1234'}
        value={stepForm.cardNumber}
        onChange={ (event) => handleOnChangePaymentForm({...stepForm, cardNumber: event.target.value})}
      />

      <label htmlFor="new-website-page__card__expiration">{strings.expirationLabel}</label>
      <input 
        id="new-website-page__card__expiration" type="text"
        placeholder={'e.g. 02/2040'}
        value={stepForm.expiration}
        onChange={ (event) => handleOnChangePaymentForm({...stepForm, expiration: event.target.value})}
      />

      <label htmlFor="new-website-page__card__cvv">{strings.cvvLabel}</label>
      <input 
        id="new-website-page__card__cvv" type="text"
        placeholder={'e.g. 123'}
        value={stepForm.cvv}
        onChange={ (event) => handleOnChangePaymentForm({...stepForm, cvv: event.target.value})}
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
  window.culqi = () => {
    if (Culqi.token) { // ¡Objeto Token creado exitosamente!
        var token = Culqi.token.id;
        alert('Se ha creado un token:' + token);
    } else { // ¡Hubo algún problema!
        // Mostramos JSON de objeto error en consola
        console.log(Culqi.error);
        alert(Culqi.error.user_message);
    }
  };

  // place the charge
  Culqi.createToken();
};