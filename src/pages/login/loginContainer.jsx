/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { login, handleOnLoginResult } from '../../actions/users/login';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import Login from './login.jsx';

/** containers */
/** styles */
/** files */
/** strings */

const LoginContainer = ({ language, isFetching, login, handleOnLoginResult }) => {
  handleOnLoginResult();

  return(
    <div className="login-container">
      <Spinner isFetching={isFetching}/>
      <Login
        language={language}
        login={login}
      />
    </div>
  );
};

LoginContainer.propTypes = {
  language: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  handleOnLoginResult: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  language: state.language,
  isFetching: state.pages.login.isFetching,
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  handleOnLoginResult: () => dispatch(handleOnLoginResult()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);