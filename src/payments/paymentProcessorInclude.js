import { culqiInclude } from './culqi';

export default () => {
  switch (process.env.PAYMENT_PROCESSOR) {
    case 'FREE':
      break;
      
    case 'CULQI':
      culqiInclude();
      break;
  
    default:
      console.log('Didn\'t find any payment processor');
      break;
  }
}