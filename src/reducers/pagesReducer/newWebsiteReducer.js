
import {
  NEW_WEBSITE_ACTION_NEXT_TO_STEP_2,
  NEW_WEBSITE_ACTION_NEXT_TO_STEP_3,
  NEW_WEBSITE_ACTION_NEXT_TO_STEP_4,
  NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1,
} from '../../pages/newWebsite/newWebsiteActions';

const initialState = {
  isFetching: false,
  errorStatus: 200,
  error:'',
  step: 0,
  stepForm1: {
    websiteName: '',
    websiteDomain: '',
  },
  stepForm2: {
    planId: '',
    planCurrency: '',
    planAmount: 0,
    planPriceLabel: '',
  },
  stepForm3: {
    customerId: '',   // payment processor customer id
    userFirstName: '',
    userLastName: '',
    address: '',
    addressCity: '',
    countryCode: '',
    email: '',
    phone: '',
  },
  stepForm4: {
    cardNumber: '',
    expiration: '',
    cvv: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {

    /**
     * START STEP FORM 1
     */

    case NEW_WEBSITE_ACTION_NEXT_TO_STEP_2:
      return {
        ...state,
        step: action.step,
      };

    case NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1:
      return {
        ...state,
        stepForm1: action.form,
      };

    /**
     * END STEP FORM 1
     */
  
    default:
      return state;
  }
}