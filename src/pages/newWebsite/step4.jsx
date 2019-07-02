/** libs */
import React from 'react';
import { Link } from 'react-router-dom';
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

const Step4 = ({
    strings, 
    stepForm,
    plan,
    handleChangeStep,
    handleOnChangePaymentForm,
  }) => {
  return(
    <div className="step">
      <h4>{strings.step4Title}</h4>

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
        onClick={() => console.log('holi')}
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

Step4.propTypes = {
  strings: PropTypes.object.isRequired, 
  stepForm: PropTypes.object.isRequired,
  handleChangeStep: PropTypes.func.isRequired,
  handleOnChangePaymentForm: PropTypes.func.isRequired,
};

export default Step4;