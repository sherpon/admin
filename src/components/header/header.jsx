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

const Header = ({name, domain, favicon}) => {
  const faviconPicture = favicon==='' ? placeholderWebsite : favicon;
  return(
    <header className="header">
      <div className="header__left">
        <img src={faviconPicture}/>
      </div>
      <div className="header__right">
        <div>
          <h5>{name}</h5>
          <div><a href={'https://' + domain} target="__blank" className="header__domain">{domain}</a></div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;