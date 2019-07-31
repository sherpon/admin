import paymentProcessorPay from '../../payments/paymentProcessorPay';

export const NEW_WEBSITE_ACTION_CHANGE_STEP = 'NEW_WEBSITE_ACTION_CHANGE_STEP';
export const NEW_WEBSITE_ACTION_ERROR = 'NEW_WEBSITE_ACTION_ERROR';
export const NEW_WEBSITE_ACTION_CLEAR_ERROR = 'NEW_WEBSITE_ACTION_CLEAR_ERROR';

export const NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1 = 'NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1';
export const NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_2 = 'NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_2';
export const NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_3 = 'NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_3';
export const NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_4 = 'NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_4';

export const FETCH_CREATE_NEW_WEBSITE = 'FETCH_CREATE_NEW_WEBSITE';
export const FETCH_CREATE_NEW_WEBSITE_SUCCESS = 'FETCH_CREATE_NEW_WEBSITE_SUCCESS';
export const FETCH_CREATE_NEW_WEBSITE_FAILURE = 'FETCH_CREATE_NEW_WEBSITE_FAILURE';
export const FETCH_CREATE_NEW_WEBSITE_RESET = 'FETCH_CREATE_NEW_WEBSITE_RESET';


export const handleErrorClose = () => (dispatch) => {
  dispatch({
    type: NEW_WEBSITE_ACTION_CLEAR_ERROR,
  });
};

const ERROR_MESSAGE = 'You have an empty field';

const validForm = (newStep, dispatch, getState) => {
  if (newStep===2) {
    // check if the website form is empty
    const {websiteName, websiteDomain} = getState().pages.newWebsite.stepForm1;
    if (websiteName==='' || websiteDomain==='') {
      dispatch({
        type: NEW_WEBSITE_ACTION_ERROR,
        error: ERROR_MESSAGE,
      });
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};

export const handleChangeStep = (newStep) => (dispatch, getState) => {

  if (validForm(newStep, dispatch, getState) === false) {
    return 0;
  }

  dispatch({
    type: NEW_WEBSITE_ACTION_CHANGE_STEP,
    step: newStep,
  });
};

/**
 * START STEP FORM 1
 */
export const handleOnChangeWebsiteName = (websiteName) => (dispatch, getState) => {
  const form = {...getState().pages.newWebsite.stepForm1, websiteName: websiteName};
  dispatch({
    type: NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1,
    form: form,
  });
};

export const handleOnChangeWebsiteDomain = (websiteDomain) => (dispatch, getState) => {
  const form = {...getState().pages.newWebsite.stepForm1, websiteDomain: websiteDomain};
  dispatch({
    type: NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1,
    form: form,
  });
};

/**
 * END STEP FORM 1
 */

/**
 * START STEP FORM 2
 */
export const handleOnChoosePlan = (plan) => (dispatch, getState) => {
  dispatch({
    type: NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_2,
    plan: plan,
    nextStep: 3,
  });
};
/**
 * END STEP FORM 2
 */

/**
 * START STEP FORM 3
 */
export const handleOnChangeUserForm = (newForm) => (dispatch, getState) => {
  dispatch({
    type: NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_3,
    form: newForm,
  });
};
/**
 * END STEP FORM 3
 */

/**
 * START STEP FORM 4
 */
export const handleOnChangePaymentForm = (newForm) => (dispatch, getState) => {
  dispatch({
    type: NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_4,
    form: newForm,
  });
};

export const handleOnClickPay = () => (dispatch) => {
  dispatch(paymentProcessorPay());
};
/**
 * END STEP FORM 4
 */