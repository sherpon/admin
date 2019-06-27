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
import EditorGrapesJs from '../../components/editorGrapesJs/editorGrapesJs.jsx';
/** containers */
/** styles */
import './editDesign.scss';
/** files */
/** strings */
import strings from './editDesign.strings.json';

const EditDesign = ({
    language,
    isFileLoaded,
    file,
    backToDashboard,
    handleOnChangeFileSourceCode,
    handleOnClickSaveFile,
    handleOnClickPublishFile,
  }) => {
  return(
    <div className="edit-design-page">
      <EditorGrapesJs
        isFileLoaded={isFileLoaded}
        file={file}
        backToDashboard={backToDashboard}
      />
    </div>
  );
};

EditDesign.propTypes = {
  language: PropTypes.string.isRequired,
  isFileLoaded: PropTypes.bool.isRequired,
  file: PropTypes.object.isRequired,
  handleOnChangeFileSourceCode: PropTypes.func.isRequired,
  handleOnClickSaveFile: PropTypes.func.isRequired,
  handleOnClickPublishFile: PropTypes.func.isRequired,
};

export default EditDesign;