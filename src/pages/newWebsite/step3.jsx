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

const Step3 = ({
    strings, 
    stepForm,
    handleChangeStep,
    handleOnChangeUserForm,
  }) => {
  return(
    <div className="step">
      <h4>{strings.step3Title}</h4>

      <label htmlFor="new-website-page__user__first-name">{strings.userFirstNameLabel}</label>
      <input 
        id="new-website-page__user__first-name" type="text"
        placeholder={'e.g. Anna'}
        value={stepForm.userFirstName}
        onChange={ (event) => handleOnChangeUserForm({...stepForm, userFirstName: event.target.value})}
      />

      <label htmlFor="new-website-page__user__last-name">{strings.userLastNameLabel}</label>
      <input 
        id="new-website-page__user__last-name" type="text"
        placeholder={'e.g. Ferris'}
        value={stepForm.userLastName}
        onChange={ (event) => handleOnChangeUserForm({...stepForm, userLastName: event.target.value})}
      />

      <label htmlFor="new-website-page__user__address">{strings.userAddressLabel}</label>
      <input 
        id="new-website-page__user__address" type="text"
        placeholder={'e.g. 4206 skywalk st'}
        value={stepForm.address}
        onChange={ (event) => handleOnChangeUserForm({...stepForm, address: event.target.value})}
      />

      <label htmlFor="new-website-page__user__address-city">{strings.userAddressCityLabel}</label>
      <input 
        id="new-website-page__user__address-city" type="text"
        placeholder={'e.g. NY'}
        value={stepForm.addressCity}
        onChange={ (event) => handleOnChangeUserForm({...stepForm, addressCity: event.target.value})}
      />

      <label htmlFor="new-website-page__user__country-code">{strings.userCountryCodeLabel}</label>
      <input 
        id="new-website-page__user__country-code" type="text"
        placeholder={'e.g. US'}
        value={stepForm.countryCode}
        onChange={ (event) => handleOnChangeUserForm({...stepForm, countryCode: event.target.value})}
      />

      <label htmlFor="new-website-page__user__email">{strings.userEmailLabel}</label>
      <input 
        id="new-website-page__user__email" type="text"
        placeholder={'e.g. anna.ferris@gmail.com'}
        value={stepForm.email}
        onChange={ (event) => handleOnChangeUserForm({...stepForm, email: event.target.value})}
      />

      <label htmlFor="new-website-page__user__phone">{strings.userPhoneLabel}</label>
      <input 
        id="new-website-page__user__phone" type="text"
        placeholder={'e.g. +1 909 657 8933'}
        value={stepForm.phone}
        onChange={ (event) => handleOnChangeUserForm({...stepForm, phone: event.target.value})}
      />

      <button 
        className="sherpon-button-primary button" 
        onClick={() => handleChangeStep(3)}
      >
        {strings.nextToStep2Button}
      </button>

      <button 
        className="sherpon-button-primary-outline button" 
        onClick={() => handleChangeStep(1)}
      >
        {strings.goBackButton}
      </button>

    </div>
  );
};

Step3.propTypes = {
  strings: PropTypes.object.isRequired, 
  stepForm: PropTypes.object.isRequired,
  handleChangeStep: PropTypes.func.isRequired,
  handleOnChangeUserForm: PropTypes.func.isRequired,
};

export default Step3;