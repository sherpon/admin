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
import Modal from '../../components/modal/modal.jsx';
/** containers */
/** styles */
/** files */
/** strings */

const CreateNewWebsiteModal = ({show, handleCloseModal}) => {
  return(
    <Modal
      show={show}
      handleCloseModal={handleCloseModal}
      title={'Create a new Website'}
      content={'Form'}
      footer={'Create'}
    />
  );
};

CreateNewWebsiteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default CreateNewWebsiteModal;