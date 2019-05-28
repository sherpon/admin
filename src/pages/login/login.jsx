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
/** containers */
/** styles */
import './login.scss';

/** files */
import logo from './images/logo_primary.svg';

/** strings */
import strings from './login.strings.json';

const Login = ({ language }) => {
  return(
    <div className="page-login">
      <div className="page-login__main">
        <div className="page-login__main__left">
          <div className="page-login__main__left__logo">
            <img src={logo}/>
          </div>
          <div className="page-login__main__left__content">
            <h4 className="page-login__main__left__content__title">{strings[language].left_title}</h4>
            <hr className="page-login__main__left__content__hr"/>
            <button className="sherpon-button-facebook">Facebook</button>
          </div>
        </div>
        <div className="page-login__main__right">
          <h4 className="page-login__main__right__title">{strings[language].right_title}</h4>
          <hr className="page-login__main__right__hr"/>
          <div className="page-login__main__right__message">
            {strings[language].right_message}
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  language: PropTypes.string.isRequired
};

export default Login;