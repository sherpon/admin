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
import EditorCode from '../../components/editorCode/editorCode.jsx';
/** containers */
/** styles */
import './editCode.scss';
/** files */
/** strings */
import strings from './editCode.strings.json';

const EditCode = ({
    language,
    file,
    handleOnChangeFileSourceCode,
    handleOnClickSaveFile,
    handleOnClickPublishFile,
  }) => {
  const createdAt = (new Date(file.createdAt)).toString();
  return(
    <div className="edit-code-page">
      <div className="edit-code-page__container">
        <div className="edit-code-page__left">
          <div className="sherpon-card">
            <h4>{strings[language].title}</h4>
            <EditorCode
              code={file.sourceCode}
              handleOnChange={handleOnChangeFileSourceCode}
              style={{
                height: '400px',
                borderRadius: '3px',
                marginBottom: '15px',
              }}
            />
            <button 
              className="sherpon-button-primary-candy edit-code-page__save-button" 
              onClick={() => handleOnClickSaveFile()}
              >
              {strings[language].saveButton}
            </button>
          </div>
        </div>

        <div className="edit-code-page__right">
          <div className="sherpon-card">
            <h4>{strings[language].actionTitle}</h4>
            <div className="edit-code-page__information">
              <label htmlFor="edit-code-page__filename">{strings[language].filenameLabel}</label>
              <input 
                id="edit-code-page__filename" type="text"
                placeholder={'e.g. about.ejs'}
                value={file.filename}
                disabled={true}
              />
              <label htmlFor="edit-code-page__type">{strings[language].typeLabel}</label>
              <input 
                id="edit-code-page__type" type="text"
                placeholder={'e.g. about.ejs'}
                value={file.type}
                disabled={true}
              />
              <label htmlFor="edit-code-page__created-at">{strings[language].createdAtLabel}</label>
              <input 
                id="edit-code-page__created-at" type="text"
                placeholder={'e.g. about.ejs'}
                value={createdAt}
                disabled={true}
              />
            </div>
            <div className="edit-code-page__actions">
              <Link 
                className="sherpon-button-primary-candy edit-code-page__action-button" 
                to={`/website/pages/edit-attributes/${file.filename.split('.').join('-dot-')}`}>
                {strings[language].editAttributesButton}
              </Link>
              <Link 
                className="sherpon-button-primary-candy edit-code-page__action-button" 
                to={`/page-builder/${file.filename.split('.').join('-dot-')}`}>
                {strings[language].editDesignButton}
              </Link>
              <button 
                className="sherpon-button-accent-candy edit-code-page__action-button" 
                onClick={() => handleOnClickPublishFile(file.filename)}
                >
                {strings[language].publishButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditCode.propTypes = {
  language: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  handleOnChangeFileSourceCode: PropTypes.func.isRequired,
  handleOnClickSaveFile: PropTypes.func.isRequired,
  handleOnClickPublishFile: PropTypes.func.isRequired,
};

export default EditCode;