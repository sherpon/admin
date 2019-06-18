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
/** containers */
/** styles */
import './settings.scss';
/** files */
/** strings */
import strings from './settings.strings.json';

const Settings = () => {
  return(
    <div className="settings-page">
      <div className="settings-page__container">
        <div className="sherpon-card">
          <h4>{'Settings'}</h4>
          <button className="sherpon-button-primary-candy settings-page__save-button" >{'Save'}</button>
        </div>
      </div>
    </div>
  );
};

Settings.propTypes = {};

export default Settings;