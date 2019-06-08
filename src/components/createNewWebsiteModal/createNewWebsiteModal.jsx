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
import Modal from '../modal/modal.jsx';
/** containers */
/** styles */
import './createNewWebsiteModal.scss';
/** files */
/** strings */

const CreateNewWebsiteModal = ({show, handleCloseModal, form, handleUpdateName, handleUpdateDomain, handleCreateNewWebsite}) => {
  return(
    <Modal
      show={show}
      handleCloseModal={handleCloseModal}
      title={'Create a new Website'}
      content={
        <form id="create-new-website-modal__form">
          <label htmlFor="create-new-website-modal__name">Website name</label>
          <input 
            id="create-new-website-modal__name" type="text"
            placeholder={'ejm: Rose Boutique'}
            value={form.name}
            onChange={ (event) => handleUpdateName(event.target.value)}
          />
          <label htmlFor="create-new-website-modal__domain">Website domain</label>
          <input 
            id="create-new-website-modal__domain" type="text"
            placeholder={'ejm: rose-boutique.com'}
            value={form.domain}
            onChange={ (event) => handleUpdateDomain(event.target.value)}
          />
        </form>
      }
      footer={
        <div>
          <button className="sherpon-button-primary" onClick={() => handleCreateNewWebsite()}>Create</button>
          <button className="sherpon-button-primary-outline" onClick={() => handleCloseModal()}>Cancel</button>
        </div>
      }
    />
  );
};

CreateNewWebsiteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default CreateNewWebsiteModal;