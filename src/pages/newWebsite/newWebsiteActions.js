export const NEW_WEBSITE_ACTION_NEXT_TO_STEP_2 = 'NEW_WEBSITE_ACTION_NEXT_TO_STEP_2';
export const NEW_WEBSITE_ACTION_NEXT_TO_STEP_3 = 'NEW_WEBSITE_ACTION_NEXT_TO_STEP_3';
export const NEW_WEBSITE_ACTION_NEXT_TO_STEP_4 = 'NEW_WEBSITE_ACTION_NEXT_TO_STEP_4';

export const NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1 = 'NEW_WEBSITE_ACTION_ONCHANGE_STEP_FORM_1';

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

export const nextToStep2 = () => (dispatch, getState) => {
  dispatch({
    type: NEW_WEBSITE_ACTION_NEXT_TO_STEP_2,
    step: 1,
  });
};
/**
 * END STEP FORM 1
 */