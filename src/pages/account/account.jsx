/** libs */
import React from 'react';
import { Link } from 'react-router-dom';
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
import './account.scss';
/** files */
import placeholderWebsite from './images/placeholderWebsite.svg';

/** strings */

const WebsiteCard = ({website, chooseWebsite}) => {
  const websitePicture = website.favicon === '' ? placeholderWebsite : website.favicon;
  return (
    <div 
      className="account-page__website"
      onClick={() => chooseWebsite(website.id)}
    >
      <img className="account-page__website__picture" src={websitePicture}/>
      <div className="account-page__website__information">
        <h5>{website.name}</h5>
        <div>{website.domain}</div>
      </div>
    </div>
  )
};

const Account = ({strings, user, handleOpenUserModal, handleOpenWebsiteModal, chooseWebsite}) => {
  const websitesArray = user.websites.map((website, index) => {
    return (<WebsiteCard key={website.id} website={website} chooseWebsite={chooseWebsite}/>)
  });

  return(
    <div className="account-page">
      <div className="account-page__wrapper">
        <div className="account-page__header">
          <h5>{user.name}</h5>
          <div>{user.email}</div>
          <div className="account-page__header__actions">
            <div className="account-page__header__actions__left">
              <div className="account-page__a" onClick={() => handleOpenUserModal()} >Edit</div>
            </div>
            <div className="account-page__header__actions__right">
              <Link to="/logout">Exit</Link>
            </div>
          </div>
        </div>

        <div className="account-page__websites sherpon-card">
          <h4>{strings.website_title}</h4>
          {/** website card --- START */}
          {websitesArray}
          {/** website card --- END */}
          <button className="sherpon-button-primary-candy" onClick={() => handleOpenWebsiteModal()}>{strings.new_website_button}</button>
        </div>
      </div>
    </div>
  );
};

Account.propTypes = {
  strings: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  handleOpenWebsiteModal: PropTypes.func.isRequired,
};

export default Account;
