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
import placeholderUser from './images/placeholderUser.svg';
import iconEdit from './images/ui-edit.svg';
import iconLogout from './images/logout.svg';
import placeholderWebsite from './images/placeholderWebsite.svg';

/** strings */

const WebsiteCard = ({website, chooseWebsite}) => {
  const websitePicture = website.favicon === '' ? placeholderWebsite : website.favicon;
  return (
    <div 
      className="sherpon-card page-account__websites-row__card"
      onClick={() => chooseWebsite(website.id)}
    >
      <div className="page-account__websites-row__card__picture">
        <img src={websitePicture}/>
      </div>
      <div className="page-account__websites-row__card__information">
        <h5>{website.name}</h5>
        <div>{website.domain}</div>
      </div>
    </div>
  )
};

const Account = ({strings, user, handleOpenModal, chooseWebsite}) => {
  const websitesArray = user.websites.map((website, index) => {
    return (<WebsiteCard key={website.id} website={website} chooseWebsite={chooseWebsite}/>)
  });

  return(
    <div className="page-account">
      <div className="container">

        <div className="row page-account__user-row">
          <div className="twelve columns">
            <h4>{strings.account_title}</h4>
            {/** user card --- START */}
            <div className="sherpon-card page-account__user-row__user-card">
              <div className="page-account__user-row__user-card__content">
                <div className="page-account__user-row__user-card__content__picture">
                  <img src={placeholderUser}/>
                </div>
                <div className="page-account__user-row__user-card__content__information">
                  <h5>{user.name}</h5>
                  <div>{user.email}</div>
                  <div>{user.phone}</div>
                </div>
              </div>
              <div className="page-account__user-row__user-card__footer">
                <div className="page-account__user-row__user-card__footer__left">
                  <img src={iconEdit} />
                </div>
                <div className="page-account__user-row__user-card__footer__right">
                  <Link to="/logout"><img src={iconLogout} /></Link>
                </div>
              </div>
            </div>
            {/** user card --- END */}
          </div>
        </div>

        <div className="row page-account__websites-row">
          <div className="twelve columns">
            <h4>{strings.website_title}</h4>
            <div className="page-account__websites-row__list">
              {/** website card --- START */}
              {websitesArray}
              {/** website card --- END */}
            </div>
          </div>
        </div>

        <div className="row page-account__button-row">
          <div className="twelve columns">
            <button className="sherpon-button-primary-candy" onClick={() => handleOpenModal()}>{strings.new_website_button}</button>
          </div>
        </div>

      </div>
    </div>
  );
};

Account.propTypes = {
  strings: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default Account;