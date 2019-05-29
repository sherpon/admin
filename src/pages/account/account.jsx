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
import './account.scss';
/** files */
import placeholderUser from './images/placeholderUser.svg';
import iconEdit from './images/ui-edit.svg';
import iconLogout from './images/logout.svg';
import placeholderWebsite from './images/placeholderWebsite.svg';

/** strings */

const WebsiteCard = ({website}) => {
  const websitePicture = website.favicon === '' ? placeholderWebsite : website.favicon;
  return (
    <div className="sherpon-card page-account__websites-row__card">
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

const Account = ({strings}) => {
  const websites = [
    {
      id: 10,
      name: 'Rose Boutique',
      domain: 'https://rose-boutique.com',
      favicon: '',
    },
    {
      id: 24,
      name: 'Blue Jewelry',
      domain: 'https://blue-jewelry.com',
      favicon: '',
    },
    {
      id: 104,
      name: 'Banana Republic',
      domain: 'https://brepublic.com',
      favicon: '',
    }
  ];

  const websitesArray = websites.map((website, index) => {
    return (<WebsiteCard key={website.id} website={website}/>)
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
                  <h5>Anna Farris</h5>
                  <div>anna@gmail.com</div>
                  <div>+1 909 876 2365</div>
                </div>
              </div>
              <div className="page-account__user-row__user-card__footer">
                <div className="page-account__user-row__user-card__footer__left">
                  <img src={iconEdit} />
                </div>
                <div className="page-account__user-row__user-card__footer__right">
                  <img src={iconLogout} />
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
            <button className="sherpon-button-accent">{strings.new_website_button}</button>
          </div>
        </div>

      </div>
    </div>
  );
};

Account.propTypes = {
  strings: PropTypes.object.isRequired
};

export default Account;