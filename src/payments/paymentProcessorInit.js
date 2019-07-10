import { culqiInit } from './culqi';

export default () => {
  switch (process.env.PAYMENT_PROCESSOR) {
    case 'FREE':
      break;
      
    case 'CULQI':
      culqiInit();
      break;
  
    default:
      console.log('Didn\'t find any payment processor');
      break;
  }
}