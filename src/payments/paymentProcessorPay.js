import { culqiPay } from './culqi';

export default () => (dispatch) => {
  switch (process.env.PAYMENT_PROCESSOR) {
    case 'CULQI':
        dispatch(culqiPay());
      break;
  
    default:
      console.log('Didn\'t find any payment processor');
      break;
  }
}