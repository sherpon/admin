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
import './newPage.scss';
/** files */
/** strings */
import strings from './newPage.strings.json';

const NewPage = ({
    language,
    file,
    handleOnChangeFileFilename,
    handleOnChangeFileUrl,
    handleOnChangeFileTitle,
    handleOnClickSaveFile,
  }) => {
  return(
    <div className="new-page-page">
      <div className="new-page-page__container">
        <div className="new-page-page__left">
          <div className="new-page-page__file-form">
            <div className="sherpon-card">
              <h4>{strings[language].pageTitle}</h4>
              {/** START FILENAME */}
              <label htmlFor="file-form__filename">{strings[language].filenameLabel}</label>
              <input 
                id="file-form__filename" type="text"
                placeholder={'e.g. about.ejs'}
                value={file.filename}
                onChange={ (event) => handleOnChangeFileFilename(event.target.value)}
              />
              {/** END FILENAME */}

              {/** START URL */}
              <label htmlFor="file-form__url">{strings[language].urlLabel}</label>
              <input 
                id="file-form__url" type="text"
                placeholder={'e.g. About'}
                value={file.url}
                onChange={ (event) => handleOnChangeFileUrl(event.target.value)}
              />
              {/** END URL */}

              {/** START TITLE */}
              <label htmlFor="file-form__title">{strings[language].titleLabel}</label>
              <input 
                id="file-form__title" type="text"
                placeholder={'e.g. About'}
                value={file.title}
                onChange={ (event) => handleOnChangeFileTitle(event.target.value)}
              />
              {/** END TITLE */}

              <button 
                className="sherpon-button-primary-candy new-page-page__file-form__save-button" 
                onClick={() => handleOnClickSaveFile()}
                >
                {strings[language].saveButton}
              </button>
            </div>
          </div>
        </div>

        <div className="new-page-page__right"></div>
      </div>
    </div>
  );
};

NewPage.propTypes = {
  language: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  handleOnChangeFileFilename: PropTypes.func.isRequired,
  handleOnChangeFileUrl: PropTypes.func.isRequired,
  handleOnChangeFileTitle: PropTypes.func.isRequired,
  handleOnClickSaveFile: PropTypes.func.isRequired,
};

export default NewPage;