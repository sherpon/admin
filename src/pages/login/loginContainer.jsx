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
import Login from './login.jsx';

/** containers */
/** styles */
/** files */
/** strings */

const LoginContainer = ({ language }) => {
  return(
    <Login
      language={language}
    />
  );
};

LoginContainer.propTypes = {
  language: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  language: state.language,
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);