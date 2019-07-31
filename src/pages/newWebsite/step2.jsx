/** libs */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
/** styles */
/** files */
const plansObj = require(process.env.PLANS_JSON_PATH);
/** strings */

const Plan = ({plan, handleOnChoosePlan}) => {
  return(
    <div className="plan" onClick={() => handleOnChoosePlan(plan)}>
      <h5>{plan.planName}</h5>
      <div>{plan.planDescription}</div>
    </div>
  );
};

const Step2 = ({
    strings, 
    handleChangeStep,
    handleOnChoosePlan,
  }) => {
  console.table(plansObj);
  const plansList = plansObj.map( (plan, i) => (
    <Plan
      key={i}
      plan={plan}
      handleOnChoosePlan={handleOnChoosePlan}
    />
  ));

  return(
    <div className="step">
      <h4>{strings.step2Title}</h4>

      {plansList}

      <button 
        className="sherpon-button-primary-outline button" 
        onClick={() => handleChangeStep(1)}
      >
        {strings.goBackButton}
      </button>

    </div>
  );
};

Step2.propTypes = {
  strings: PropTypes.object.isRequired, 
  handleChangeStep: PropTypes.func.isRequired,
  handleOnChoosePlan: PropTypes.func.isRequired,
};

export default Step2;

/**

      <label htmlFor="new-website-page__name">{strings.websiteNameLabel}</label>
      <input 
        id="new-website-page__name" type="text"
        placeholder={'e.g. Rose Boutique'}
        value={stepForm.websiteName}
        onChange={ (event) => handleOnChangeWebsiteName(event.target.value)}
      />

      <label htmlFor="new-website-page__domain">{strings.websiteDomainLabel}</label>
      <input 
        id="new-website-page__domain" type="text"
        placeholder={'e.g. rose-boutique.com'}
        value={stepForm.websiteDomain}
        onChange={ (event) => handleOnChangeWebsiteDomain(event.target.value)}
      />

      <button 
        className="sherpon-button-primary button" 
        onClick={() => handleOnChoosePlan()}
      >
        {strings.nextToStep3Button}
      </button>
 */