/** libs */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Account from './account.jsx';
import CreateNewWebsiteModal from './createNewWebsiteModal.jsx';

/** containers */
/** styles */
/** files */
/** strings */
import strings from './account.strings.json';

const AccountContainer = ({language, user}) => {
  const [showModal, toggleModal] = useState(false);
  const handleOpenModal = () => {
    toggleModal(true);
  };
  const handleCloseModal = () => {
    toggleModal(false);
  };

  return(
    <div className="account-container">
      <Account
        strings={strings[language]}
        user={user}
        handleOpenModal={handleOpenModal}
      />
      <CreateNewWebsiteModal
        show={showModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
    
  );
};

AccountContainer.propTypes = {
  language: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  language: state.language,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);