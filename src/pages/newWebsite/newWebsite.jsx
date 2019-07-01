/** libs */
import React from 'react';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Step1 from './step1.jsx';
/** containers */
/** styles */
import './newWebsite.scss';
/** files */
import step1 from './images/step1.svg';
import step2 from './images/step2.svg';
import step3 from './images/step3.svg';
import step4 from './images/step4.svg';
const steps = [step1, step2, step3, step4];
/** strings */
import strings from './newWebsite.strings.json';

const NewWebsite = ({
    language, 
    user, 
    step,
    stepForm1,
    stepForm2,
    stepForm3,
    stepForm4,
    handleOnChangeWebsiteName,
    handleOnChangeWebsiteDomain,
    nextToStep2,
  }) => {
  const stepForm = [
    <Step1
      strings={strings[language]}
      stepForm={stepForm1}
      handleOnChangeWebsiteName={handleOnChangeWebsiteName}
      handleOnChangeWebsiteDomain={handleOnChangeWebsiteDomain}
      nextToStep2={nextToStep2}
    />,
  ];

  return(
    <div className="new-website-page">
      <div className="new-website-page__wrapper">
        <div className="new-website-page__header">
          <img className="new-website-page__steps" src={steps[step]}/>
        </div>
        <div className="new-website-page__body sherpon-card">
          {stepForm[step]}
        </div>
      </div>
    </div>
  );
};

NewWebsite.propTypes = {
  language: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired,
};

export default NewWebsite;