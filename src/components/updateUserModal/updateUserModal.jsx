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
import './updateUserModal.scss';
/** files */
/** strings */
import strings from './updateUserModal.strings.json';

const UpdateUserModal = ({
    language,
    show, 
    handleCloseModal, 
    form, 
    handleUpdateName, 
    handleUpdateEmail, 
    handleUpdatePhone, 
    handleUpdateUser
  }) => {

  return(
    <Modal
      show={show}
      size={'small'}
      handleCloseModal={handleCloseModal}
      title={strings[language].title}
      content={
        <form id="update-user-modal__form">
          <label htmlFor="update-user-modal__name">{strings[language].labelName}</label>
          <input 
            id="update-user-modal__name" type="text"
            placeholder={'ejm: Anna Farris'}
            value={form.name}
            onChange={ (event) => handleUpdateName(event.target.value)}
          />
          <label htmlFor="update-user-modal__email">{strings[language].labelEmail}</label>
          <input 
            id="update-user-modal__email" type="text"
            placeholder={'ejm: anna@gmail.com'}
            value={form.email}
            onChange={ (event) => handleUpdateEmail(event.target.value)}
          />
          <label htmlFor="update-user-modal__phone">{strings[language].labelPhone}</label>
          <input 
            id="update-user-modal__phone" type="text"
            placeholder={'ejm: +1 909 455 9811'}
            value={form.phone}
            onChange={ (event) => handleUpdatePhone(event.target.value)}
          />
        </form>
      }
      footer={
        <div>
          <button className="sherpon-button-primary" onClick={() => handleUpdateUser()}>{strings[language].buttonUpdate}</button>
          <button className="sherpon-button-primary-outline" onClick={() => handleCloseModal()}>{strings[language].buttonCancel}</button>
        </div>
      }
    />
  );
};

UpdateUserModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default UpdateUserModal;