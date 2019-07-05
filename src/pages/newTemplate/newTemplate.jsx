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
import './newTemplate.scss';
/** files */
/** strings */
import strings from './newTemplate.strings.json';

const NewTemplate = ({
    language,
    file,
    handleOnChangeFileFilename,
    handleOnClickSaveFile,
  }) => {
  return(
    <div className="new-template-page">
      <div className="new-template-page__container">
        <div className="new-template-page__left">
          <div className="new-template-page__file-form">
            <div className="sherpon-card">
              <h4>{strings[language].templateTitle}</h4>
              {/** START FILENAME */}
              <label htmlFor="file-form__filename">{strings[language].filenameLabel}</label>
              <input 
                id="file-form__filename" type="text"
                placeholder={'e.g. about.ejs'}
                value={file.filename}
                onChange={ (event) => handleOnChangeFileFilename(event.target.value)}
              />
              {/** END FILENAME */}

              <button 
                className="sherpon-button-primary-candy new-template-page__file-form__save-button" 
                onClick={() => handleOnClickSaveFile()}
                >
                {strings[language].saveButton}
              </button>
            </div>
          </div>
        </div>

        <div className="new-template-page__right"></div>
      </div>
    </div>
  );
};

NewTemplate.propTypes = {
  language: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  handleOnChangeFileFilename: PropTypes.func.isRequired,
  handleOnClickSaveFile: PropTypes.func.isRequired,
};

export default NewTemplate;