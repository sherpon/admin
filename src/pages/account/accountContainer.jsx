/** libs */
import React from 'react';
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

/** containers */
/** styles */
/** files */
/** strings */
import strings from './account.strings.json';

const AccountContainer = ({language, user}) => {
  return(
    <Account
      strings={strings[language]}
      user={user}
    />
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