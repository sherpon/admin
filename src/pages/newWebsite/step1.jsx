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
import './newWebsite.scss';
/** files */
/** strings */

const Step1 = ({
    strings, 
    stepForm,
    handleOnChangeWebsiteName,
    handleOnChangeWebsiteDomain,
    nextToStep2,
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
        placeholder={'e.g. Rose Boutique'}
        value={stepForm.websiteDomain}
        onChange={ (event) => handleOnChangeWebsiteDomain(event.target.value)}
      />

      <button 
        className="sherpon-button-primary button" 
        onClick={() => nextToStep2()}
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
  handleOnChangeWebsiteName: PropTypes.func.isRequired,
  handleOnChangeWebsiteDomain: PropTypes.func.isRequired,
  nextToStep2: PropTypes.func.isRequired,
};

export default Step1;