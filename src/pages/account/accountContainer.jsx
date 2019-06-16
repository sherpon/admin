/** libs */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { createNewWebsite, createNewWebsiteReset, chooseWebsite } from './accountActions';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import Account from './account.jsx';
import UpdateUserModal from '../../components/updateUserModal/updateUserModal.jsx';
import CreateNewWebsiteModal from '../../components/createNewWebsiteModal/createNewWebsiteModal.jsx';

/** containers */
/** styles */
/** files */
/** strings */
import strings from './account.strings.json';

const AccountContainer = ({
    language, 
    isFetching, 
    errorStatus, 
    error, 
    user, 
    createNewWebsite, 
    createNewWebsiteReset,
    chooseWebsite
  }) => {
  const [showUserModal, toggleUserModal] = useState(false);
  const [userForm, updateUserForm] = useState({name: user.name, email: user.email, phone: user.phone});
  const [showWebsiteModal, toggleWebsiteModal] = useState(false);
  const [websiteForm, updateWebsiteForm] = useState({name:'', domain:''});

  /** START USER */
  const handleOpenUserModal = () => {
    toggleUserModal(true);
  };
  const handleCloseUserModal = () => {
    updateUserForm({name: user.name, email: user.email, phone: user.phone});
    toggleUserModal(false);
    // createNewWebsiteReset();
  };
  const handleUpdateUserName = () => {};
  const handleUpdateUserEmail = () => {};
  const handleUpdateUserPhone = () => {};
  const handleUpdateUser = () => {};
  /** END USER */

  /** START WEBSITE */
  const handleOpenWebsiteModal = () => {
    toggleWebsiteModal(true);
  };
  const handleCloseWebsiteModal = () => {
    updateWebsiteForm({name:'', domain:''});
    toggleWebsiteModal(false);
    createNewWebsiteReset();
  };

  const handleUpdateWebsiteName = (name) => {
    const newForm = {...websiteForm, name};
    updateWebsiteForm(newForm);
  };
  const handleUpdateWebsiteDomain = (domain) => {
    const newForm = {...websiteForm, domain};
    updateWebsiteForm(newForm);
  };

  const handleCreateNewWebsite = () => {
    createNewWebsite(websiteForm.name, websiteForm.domain);
  };
  /** END WEBSITE */

  return(
    <div className="account-container">
      <Spinner isFetching={isFetching}/>
      <UpdateUserModal
        language={language}
        show={showUserModal}
        handleCloseModal={handleCloseUserModal}
        form={userForm}
        handleUpdateName={handleUpdateUserName}
        handleUpdateEmail={handleUpdateUserEmail}
        handleUpdatePhone={handleUpdateUserPhone}
        handleUpdateUser={handleUpdateUser}
      />
      <CreateNewWebsiteModal
        language={language}
        show={showWebsiteModal}
        handleCloseModal={handleCloseWebsiteModal}
        errorStatus={errorStatus}
        error={error}
        form={websiteForm}
        handleUpdateName={handleUpdateWebsiteName}
        handleUpdateDomain={handleUpdateWebsiteDomain}
        handleCreateNewWebsite={handleCreateNewWebsite}
      />
      <Account
        strings={strings[language]}
        user={user}
        handleOpenUserModal={handleOpenUserModal}
        handleOpenWebsiteModal={handleOpenWebsiteModal}
        chooseWebsite={chooseWebsite}
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
  isFetching: state.pages.account.isFetching,
  errorStatus: state.pages.account.errorStatus,
  error: state.pages.account.error,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  createNewWebsite: (name, domain) => dispatch(createNewWebsite(name, domain)),
  createNewWebsiteReset: () => dispatch(createNewWebsiteReset()),
  chooseWebsite: (websiteId) => dispatch(chooseWebsite(websiteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);