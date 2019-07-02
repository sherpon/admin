
import {
  NEW_WEBSITE_ACTION_CHANGE_STEP,
  NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1,
  NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_2,
  NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_3,
  NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_4,
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
    planName: '',
    planDescription: '',
    planCurrency: '',
    planPrice: 0,
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

    case NEW_WEBSITE_ACTION_CHANGE_STEP:
      return {
        ...state,
        step: action.step,
      };

    /**
     * START STEP FORM 1
     */

    case NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1:
      return {
        ...state,
        stepForm1: action.form,
      };

    /**
     * END STEP FORM 1
     */

     /**
     * START STEP FORM 2
     */

    case NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_2:
      return {
        ...state,
        stepForm2: action.plan,
        step: action.nextStep,
      };
  
    /**
     * END STEP FORM 2
     */

    /**
     * START STEP FORM 3
     */

    case NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_3:
      return {
        ...state,
        stepForm3: action.form,
      };

    /**
     * END STEP FORM 3
     */

    /**
     * START STEP FORM 4
     */

    case NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_4:
      return {
        ...state,
        stepForm4: action.form,
      };

    /**
     * END STEP FORM 4
     */
  
    default:
      return state;
  }
}