/** libs */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { createNewWebsite, createNewWebsiteReset } from '../../actions/websites/createNewWebsite';
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
    createNewWebsiteReset
  }) => {
  const [showModal, toggleModal] = useState(false);
  const [form, updateForm] = useState({name:'', domain:''});

  const handleOpenModal = () => {
    toggleModal(true);
  };
  const handleCloseModal = () => {
    updateForm({name:'', domain:''});
    toggleModal(false);
    createNewWebsiteReset();
  };

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
      <Spinner isFetching={isFetching}/>
      <CreateNewWebsiteModal
        language={language}
        show={showModal}
        handleCloseModal={handleCloseModal}
        errorStatus={errorStatus}
        error={error}
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
  isFetching: state.pages.account.isFetching,
  errorStatus: state.pages.account.errorStatus,
  error: state.pages.account.error,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  createNewWebsite: (name, domain) => dispatch(createNewWebsite(name, domain)),
  createNewWebsiteReset: () => dispatch(createNewWebsiteReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);