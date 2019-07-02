export const NEW_WEBSITE_ACTION_CHANGE_STEP = 'NEW_WEBSITE_ACTION_CHANGE_STEP';

export const NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1 = 'NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1';
export const NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_2 = 'NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_2';
export const NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_3 = 'NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_3';

export const handleChangeStep = (newStep) => (dispatch) => {
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
    nextStep: 2,
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