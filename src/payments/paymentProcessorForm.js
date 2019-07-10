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
import { FreeForm } from './free';
/** containers */
/** styles */
/** files */
/** strings */

const paymentProcessorForm = (props) => {
  switch (process.env.PAYMENT_PROCESSOR) {
    case 'FREE':
      return(<FreeForm {...props} />);
    case 'CULQI':
      return(<CulqiForm {...props} />);
  
    default:
      console.log('Didn\'t find any payment processor');
      return(<React.Fragment/>);
  }
};

export default paymentProcessorForm;