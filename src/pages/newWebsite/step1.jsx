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
/** strings */

const Step1 = ({
    strings, 
    stepForm,
    handleChangeStep,
    handleOnChangeWebsiteName,
    handleOnChangeWebsiteDomain,
  }) => {
  return(
    <div className="step">
      <h4>{strings.step1Title}</h4>

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

      <p>{strings.instructionsPart1}<b>{process.env.VIRTUALHOST_IP}</b>{strings.instructionsPart2}</p>

      <p>
        {strings.instructionsPart3}
        <b>{strings.instructionsPart4}{process.env.BUSINESS_DOMAIN}</b>
        {strings.instructionsPart5}
        <b>{strings.instructionsPart6}{process.env.BUSINESS_DOMAIN}</b>
      </p>

      <button 
        className="sherpon-button-primary button" 
        onClick={() => handleChangeStep(2)}
      >
        {strings.nextToStep2Button}
      </button>

      <Link 
        className="sherpon-button-primary-outline button" 
        to="/account"
      >
        {strings.cancelButton}
      </Link>

    </div>
  );
};

Step1.propTypes = {
  strings: PropTypes.object.isRequired, 
  stepForm: PropTypes.object.isRequired,
  handleChangeStep: PropTypes.func.isRequired,
  handleOnChangeWebsiteName: PropTypes.func.isRequired,
  handleOnChangeWebsiteDomain: PropTypes.func.isRequired,
};

export default Step1;