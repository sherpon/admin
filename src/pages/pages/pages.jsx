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
import strings from './pages.strings.json';

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
      <div className="pages-page__container">
        <div className="pages-page__pages">
          <div className="sherpon-card">
            <h4>{strings[language].pageTitle}</h4>
            {pageComponents}
            <Link className="sherpon-button-primary-candy pages-page__create-button" to="/pages/new-page">{strings[language].createPageButton}</Link>
          </div>
        </div>

        <div className="pages-page__templates">
          <div className="sherpon-card">
            <h4>{strings[language].templateTitle}</h4>
            {templateComponents}
            <Link className="sherpon-button-primary-candy pages-page__create-button" to="/pages/new-template">{strings[language].createTemplateButton}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;