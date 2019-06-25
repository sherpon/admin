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
import FileForm from '../../components/fileForm/fileForm.jsx';
/** containers */
/** styles */
import './editFile.scss';
/** files */
/** strings */
import strings from './editFile.strings.json';

const EditFile = ({
    language,
    file,
    handles,
  }) => {
  return(
    <div className="edit-file-page">
      <div className="edit-file-page__container">
        <div className="edit-file-page__left">
          <FileForm
            language={language}
            fileType={file.type}
            file={file}
            handles={handles}
          />
        </div>

        <div className="edit-file-page__right">
          <div className="sherpon-card">
            <h4>{strings[language].actionTitle}</h4>
            <div className="edit-file-page__actions">
              <Link 
                className="sherpon-button-primary-candy edit-file-page__action-button" 
                to={`/website/pages/edit-code/${file.filename.split('.').join('-dot-')}`}>
                {strings[language].editCodeButton}
              </Link>
              <Link 
                className="sherpon-button-primary-candy edit-file-page__action-button" 
                to={`/website/pages/edit-design/${file.filename.split('.').join('-dot-')}`}>
                {strings[language].editDesignButton}
              </Link>
              <button 
                className="sherpon-button-accent-candy edit-file-page__action-button" 
                onClick={() => handles.handleOnClickSaveFile()}
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

EditFile.propTypes = {
  language: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  handles: PropTypes.object.isRequired,
};

export default EditFile;