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
/** containers */
/** styles */
import './header.scss';
/** files */
import placeholderWebsite from './images/placeholderWebsite.svg';
/** strings */

const Header = ({name, domain}) => {
  return(
    <header className="header">
      <div className="header__left">
        <img src={placeholderWebsite}/>
      </div>
      <div className="header__right">
        <h5>{name}</h5>
        <div>{domain}</div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;