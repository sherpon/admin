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

const Settings = ({}) => {
  return(
    <div className="settings-page">
      <div className="settings-page__container">
        {/** START SETTINGS */}
        <div className="settings-page__settings">
          <div className="sherpon-card">
            <h4>{'Settings'}</h4>

            <label htmlFor="settings-page__form__name">{'Name'}</label>
            <input 
              id="settings-page__form__name" type="text"
              placeholder={'ejm: Rose Boutique'}
              value={''}
              onChange={ (event) => console.log(event.target.value)}
            />

            <label htmlFor="settings-page__form__domain">{'Domain'}</label>
            <input 
              id="settings-page__form__domain" type="text"
              placeholder={'ejm: rose-boutique.com'}
              value={''}
              onChange={ (event) => console.log(event.target.value)}
            />

            <label htmlFor="settings-page__form__favicon">{'Favicon'}</label>
            <input 
              id="settings-page__form__favicon" type="text"
              placeholder={'ejm: https://storage.googleapis.com/sherpon/my-website/media/picture/my-favicon.icon'}
              value={''}
              onChange={ (event) => console.log(event.target.value)}
            />

            <button className="sherpon-button-primary-candy settings-page__save-button" >{'Save settings'}</button>
          </div>
        </div>
        {/** END SETTINGS */}

        {/** START INFORMATION */}
        <div className="settings-page__information">
          <div className="sherpon-card">
            <h4>{'Information (read only)'}</h4>

            <label htmlFor="settings-page__form__id">{'ID'}</label>
            <input 
              id="settings-page__form__id" type="text"
              value={'1qaz2wsx3edc4rfv'}
              disabled={true}
            />

            <label htmlFor="settings-page__form__storage">{'Storage'}</label>
            <input 
              id="settings-page__form__storage" type="text"
              value={'260Mb'}
              disabled={true}
            />

            <label htmlFor="settings-page__form__date">{'Created at'}</label>
            <input 
              id="settings-page__form__date" type="text"
              value={'Sat May 18 2019 18:29:09'}
              disabled={true}
            />

          </div>
        </div>
        {/** END INFORMATION */}
        
      </div>
    </div>
  );
};

Settings.propTypes = {};

export default Settings;