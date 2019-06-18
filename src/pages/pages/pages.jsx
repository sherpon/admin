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

const FileComponent = ({filename, url}) => {
  return(
    <div className="pages-page__file">
      <div className="pages-page__file__filename">{filename}</div>
      <div className="pages-page__file__id">{url}</div>
    </div>
  );
};

const Pages = ({language, files}) => {
  const pageFiles = files.filter(file => file.type==='page');
  const templateFiles = files.filter(file => file.type==='template');
  const pageComponents = pageFiles.map(page => (<FileComponent key={page.filename} filename={page.filename} url={page.url}/>));
  const templateComponents = templateFiles.map(template => (<FileComponent key={template.filename} filename={template.filename} url={''}/>));

  return(
    <div className="pages-page">
      <div className="sherpon-card pages-page__pages-card">
        <h4>Pages</h4>
        {pageComponents}
        <Link className="sherpon-button-primary-candy pages-page__templates-card__create-button" to="/pages/new-page">Create new page</Link>
      </div>

      <div className="sherpon-card pages-page__templates-card">
        <h4>Templates</h4>
        {templateComponents}
        <Link className="sherpon-button-primary-candy pages-page__templates-card__create-button" to="/pages/new-template">Create new template</Link>
      </div>
    </div>
  );
};

export default Pages;