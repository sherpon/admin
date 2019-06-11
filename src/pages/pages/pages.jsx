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
import './pages.scss';
/** files */
/** strings */

const Pages = ({}) => {
  return(
    <div className="pages-page">
      <div className="sherpon-card pages-page__pages-card">
        <h4>Pages</h4>
        <div className="pages-page__file">
          <div className="pages-page__file__filename">about.ejs</div>
          <div className="pages-page__file__id">Xkj83Vf0Ohffw83l</div>
        </div>
        <div className="pages-page__file">
          <div className="pages-page__file__filename">terms.ejs</div>
          <div className="pages-page__file__id">Xkj83Vf0Ohffw83l</div>
        </div>
        <div className="pages-page__file">
          <div className="pages-page__file__filename">error404.ejs</div>
          <div className="pages-page__file__id">Xkj83Vf0Ohffw83l</div>
        </div>
        <Link className="sherpon-button-primary-candy pages-page__templates-card__create-button" to="/pages/new-page">Create new page</Link>
      </div>

      <div className="sherpon-card pages-page__templates-card">
        <h4>Templates</h4>
        <div className="pages-page__file">
          <div className="pages-page__file__filename">index.ejs</div>
          <div className="pages-page__file__id">Xkj83Vf0Ohffw83l</div>
        </div>
        <div className="pages-page__file">
          <div className="pages-page__file__filename">pages.ejs</div>
          <div className="pages-page__file__id">Xkj83Vf0Ohffw83l</div>
        </div>
        <div className="pages-page__file">
          <div className="pages-page__file__filename">header.ejs</div>
          <div className="pages-page__file__id">Xkj83Vf0Ohffw83l</div>
        </div>
        <div className="pages-page__file">
          <div className="pages-page__file__filename">footer.ejs</div>
          <div className="pages-page__file__id">Xkj83Vf0Ohffw83l</div>
        </div>
        <Link className="sherpon-button-primary-candy pages-page__templates-card__create-button" to="/pages/new-template">Create new template</Link>
      </div>
    </div>
  );
};

export default Pages;