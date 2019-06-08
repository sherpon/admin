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
import strings from './createNewWebsiteModal.strings.json';

const CreateNewWebsiteModal = ({
    language,
    show, 
    handleCloseModal, 
    errorStatus,
    error,
    form, 
    handleUpdateName, 
    handleUpdateDomain, 
    handleCreateNewWebsite
  }) => {
  let errorComponent = <React.Fragment/>;
  switch (errorStatus) {
    case 200: // does nothing
      break;

    case 406:
      errorComponent = <div className="create-new-website-modal__error">{strings[language].error406}</div>;
      break;

    case 401:
        errorComponent = <div className="create-new-website-modal__error">{strings[language].error401}</div>;
      break;

    default:
      errorComponent = <div className="create-new-website-modal__error">{strings[language].error400}</div>;
      break;
  }

  return(
    <Modal
      show={show}
      handleCloseModal={handleCloseModal}
      title={strings[language].title}
      content={
        <form id="create-new-website-modal__form">
          <label htmlFor="create-new-website-modal__name">{strings[language].labelName}</label>
          <input 
            id="create-new-website-modal__name" type="text"
            placeholder={'ejm: Rose Boutique'}
            value={form.name}
            onChange={ (event) => handleUpdateName(event.target.value)}
          />
          <label htmlFor="create-new-website-modal__domain">{strings[language].labelDomain}</label>
          <input 
            id="create-new-website-modal__domain" type="text"
            placeholder={'ejm: rose-boutique.com'}
            value={form.domain}
            onChange={ (event) => handleUpdateDomain(event.target.value)}
          />
          {errorComponent}
        </form>
      }
      footer={
        <div>
          <button className="sherpon-button-primary" onClick={() => handleCreateNewWebsite()}>{strings[language].buttonCreate}</button>
          <button className="sherpon-button-primary-outline" onClick={() => handleCloseModal()}>{strings[language].buttonCancel}</button>
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