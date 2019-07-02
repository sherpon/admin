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
import { CulqiForm } from './culqi';
/** containers */
/** styles */
/** files */
/** strings */

const paymentProcessorForm = (props) => {
  switch (process.env.PAYMENT_PROCESSOR) {
    case 'CULQI':
      return(<CulqiForm {...props} />);
  
    default:
      console.log('Didn\'t find any payment processor');
      return(<React.Fragment/>);
  }
};

export default paymentProcessorForm;