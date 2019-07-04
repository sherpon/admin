/** libs */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
import paymentProcessorForm from '../../payments/paymentProcessorForm';
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
    userForm,
    handleChangeStep,
    handleOnChangePaymentForm,
    handleOnClickPay,
  }) => {
  return(
    <div className="step">
      <h4>{strings.step4Title}</h4>
      {paymentProcessorForm({ strings, stepForm, plan, userForm, handleChangeStep, handleOnChangePaymentForm, handleOnClickPay })}
    </div>
  );
};

Step4.propTypes = {
  strings: PropTypes.object.isRequired, 
  stepForm: PropTypes.object.isRequired,
  plan: PropTypes.object.isRequired,
  handleChangeStep: PropTypes.func.isRequired,
  handleOnChangePaymentForm: PropTypes.func.isRequired,
  handleOnClickPay: PropTypes.func.isRequired,
};

export default Step4;