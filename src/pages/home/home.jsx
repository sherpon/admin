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
import './home.scss';
/** files */
import customizeImage from './images/customize.svg';
import faviconImage from './images/favicon.svg';
import pageImage from './images/page.svg';
import addImage from './images/add.svg';

/** strings */
import strings from './home.strings.json';

const Home = ({language}) => {
  return(
    <div className="home-page">
      <div className="home-page__container">
        <div className="sherpon-card home-page__hero">
          <h4>{strings[language].title}</h4>
          <h5>{strings[language].subTitle}</h5>
          <div className="home-page__hero__actions">
            <Link to={''}>
              <img src={customizeImage} style={{ width: '15px', height: '15px', marginRight: '5px' }}/>
              {strings[language].action1}
            </Link>
            <Link to={'/website/settings'}>
              <img src={faviconImage} style={{ width: '15px', height: '15px', marginRight: '5px' }}/>
              {strings[language].action2}
            </Link>
            <Link to={'/website/pages'}>
            <img src={pageImage} style={{ width: '15px', height: '15px', marginRight: '5px' }}/>
              {strings[language].action3}
            </Link>
            <Link to={'/website/pages/new-page'}>
            <img src={addImage} style={{ width: '15px', height: '15px', marginRight: '5px' }}/>
              {strings[language].action4}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}; 

Home.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Home;