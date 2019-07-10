import { culqiPay } from './culqi';
import { freePay } from './free';

export default () => (dispatch) => {
  switch (process.env.PAYMENT_PROCESSOR) {
    case 'FREE':
      dispatch(freePay());
      break;

    case 'CULQI':
      dispatch(culqiPay());
      break;
  
    default:
      console.log('Didn\'t find any payment processor');
      break;
  }
}