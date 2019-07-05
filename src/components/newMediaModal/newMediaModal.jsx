/** libs */
import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Modal from '../modal/modal.jsx';
/** containers */
/** styles */
import './newMediaModal.scss';

/** files */
/** strings */
import strings from './newMediaModal.strings.json';

const NewMediaModal = ({language, show, uploadPictures, handleCloseModal}) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      uploadPictures(acceptedFiles, 'pictures');
    }
  });

  return(
    <Modal
      show={show}
      size={'small'}
      handleCloseModal={handleCloseModal}
      title={strings[language].title}
      content={
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>{strings[language].message}</p>
        </div>
      }
      footer={
        <div>
          <button className="sherpon-button-primary-outline" onClick={() => handleCloseModal()}>{strings[language].buttonCancel}</button>
        </div>
      }
    />
  );
};

NewMediaModal.propTypes = {
  language: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default NewMediaModal;