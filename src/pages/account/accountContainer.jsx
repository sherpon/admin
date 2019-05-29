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

const AccountContainer = ({language}) => {
  return(
    <Account
      strings={strings[language]}
    />
  );
};

AccountContainer.propTypes = {
  language: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  language: state.language
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);