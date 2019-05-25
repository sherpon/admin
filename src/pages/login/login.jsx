import React from 'react';

import logo from './images/logo_primary.svg';
import './login.scss';

const Login = ({}) => {
  return(
    <div className="page-login">
      <div className="page-login__main">
        <div className="page-login__main__left">
          <div className="page-login__main__left__logo">
            <img src={logo}/>
          </div>
          <div className="page-login__main__left__content">
            <h4 className="page-login__main__left__content__title">Sign in to Account</h4>
            <hr className="page-login__main__left__content__hr"/>
            <button className="sherpon-button-facebook">Facebook</button>
          </div>
        </div>
        <div className="page-login__main__right">
          <h4 className="page-login__main__right__title">Hello, Friend!</h4>
          <hr className="page-login__main__right__hr"/>
          <div className="page-login__main__right__message">
            Welcome to your new website platform.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;