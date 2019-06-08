/** libs */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { createNewWebsite } from '../../actions/websites/createNewWebsite';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Account from './account.jsx';
import CreateNewWebsiteModal from '../../components/createNewWebsiteModal/createNewWebsiteModal.jsx';

/** containers */
/** styles */
/** files */
/** strings */
import strings from './account.strings.json';

const AccountContainer = ({language, user, createNewWebsite}) => {
  const [showModal, toggleModal] = useState(false);
  const handleOpenModal = () => {
    toggleModal(true);
  };
  const handleCloseModal = () => {
    toggleModal(false);
  };

  const [form, updateForm] = useState({name:'', domain:''});
  const handleUpdateName = (name) => {
    const newForm = {...form, name};
    updateForm(newForm);
  };
  const handleUpdateDomain = (domain) => {
    const newForm = {...form, domain};
    updateForm(newForm);
  };

  const handleCreateNewWebsite = () => {
    createNewWebsite(form.name, form.domain);
  };

  return(
    <div className="account-container">
      <CreateNewWebsiteModal
        show={showModal}
        handleCloseModal={handleCloseModal}
        form={form}
        handleUpdateName={handleUpdateName}
        handleUpdateDomain={handleUpdateDomain}
        handleCreateNewWebsite={handleCreateNewWebsite}
      />
      <Account
        strings={strings[language]}
        user={user}
        handleOpenModal={handleOpenModal}
      />
    </div>
    
  );
};

AccountContainer.propTypes = {
  language: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  createNewWebsite: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  language: state.language,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  createNewWebsite: (name, domain) => dispatch(createNewWebsite(name, domain))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);