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

        <div className="edit-file-page__right"></div>
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