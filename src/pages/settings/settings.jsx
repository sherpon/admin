/** libs */
import React from 'react';
import PropTypes from 'prop-types';
import pretty from'prettysize';
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

const Settings = ({
    language, 
    website,
    handleUpdateWebsiteName,
    handleUpdateWebsiteDomain,
    handleUpdateWebsiteFavicon,
    handleUpdateWebsite,
  }) => {
  const createdAt = (new Date(website.createdAt)).toString();
  const storage = pretty(website.storage, false, false, 2);
  return(
    <div className="settings-page">
      <div className="settings-page__container">
        {/** START SETTINGS */}
        <div className="settings-page__settings">
          <div className="sherpon-card">
            <h4>{strings[language].settingsTitle}</h4>

            <label htmlFor="settings-page__form__name">{strings[language].nameLabel}</label>
            <input 
              id="settings-page__form__name" type="text"
              placeholder={'e.g. Rose Boutique'}
              value={website.name}
              onChange={ (event) => handleUpdateWebsiteName(event.target.value)}
            />

            <label htmlFor="settings-page__form__domain">{strings[language].domainLabel}</label>
            <input 
              id="settings-page__form__domain" type="text"
              placeholder={'e.g. rose-boutique.com'}
              value={website.domain}
              onChange={ (event) => handleUpdateWebsiteDomain(event.target.value)}
            />

            <label htmlFor="settings-page__form__favicon">{strings[language].faviconLabel}</label>
            <input 
              id="settings-page__form__favicon" type="text"
              placeholder={'e.g. https://storage.googleapis.com/sherpon/my-website/media/picture/my-favicon.icon'}
              value={website.favicon}
              onChange={ (event) => handleUpdateWebsiteFavicon(event.target.value)}
            />

            <button 
              className="sherpon-button-primary-candy settings-page__save-button" 
              onClick={() => handleUpdateWebsite()}
              >
              {strings[language].saveButton}
            </button>
          </div>
        </div>
        {/** END SETTINGS */}

        {/** START INFORMATION */}
        <div className="settings-page__information">
          <div className="sherpon-card">
            <h4>{strings[language].informationTitle}</h4>

            <label htmlFor="settings-page__form__id">{strings[language].idLabel}</label>
            <input 
              id="settings-page__form__id" type="text"
              value={website.id}
              disabled={true}
            />

            <label htmlFor="settings-page__form__storage">{strings[language].storageLabel}</label>
            <input 
              id="settings-page__form__storage" type="text"
              value={storage}
              disabled={true}
            />

            <label htmlFor="settings-page__form__date">{strings[language].createdAtLabel}</label>
            <input 
              id="settings-page__form__date" type="text"
              value={createdAt}
              disabled={true}
            />

          </div>
        </div>
        {/** END INFORMATION */}
        
      </div>
    </div>
  );
};

Settings.propTypes = {
  language: PropTypes.string.isRequired,
  website: PropTypes.object.isRequired,
};

export default Settings;