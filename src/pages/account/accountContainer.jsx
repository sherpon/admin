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
  const [showModal, toggleModal] = useState(false);
  const [websiteForm, updateWebsiteForm] = useState({name:'', domain:''});

  const handleOpenModal = () => {
    toggleModal(true);
  };
  const handleCloseModal = () => {
    updateWebsiteForm({name:'', domain:''});
    toggleModal(false);
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

  return(
    <div className="account-container">
      <Spinner isFetching={isFetching}/>
      <CreateNewWebsiteModal
        language={language}
        show={showModal}
        handleCloseModal={handleCloseModal}
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
        handleOpenModal={handleOpenModal}
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