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

const FileComponent = ({header, line1, line2, filename}) => {
  return(
    <div className="pages-page__file">
      <Link to={`/website/pages/edit-attributes/${filename.split('.').join('-dot-')}`}>
        <div className="pages-page__file__header">{header}</div>
        <div className="pages-page__file__line">{line1}</div>
        <div className="pages-page__file__line">{line2}</div>
      </Link>
    </div>
  );
};

const Pages = ({language, files}) => {
  const pageFiles = files.filter(file => file.type==='page');
  const templateFiles = files.filter(file => file.type==='template');
  const pageComponents = pageFiles.map(page => (<FileComponent key={page.filename} header={page.title} line1={page.url} line2={page.filename} filename={page.filename}/>));
  const templateComponents = templateFiles.map(template => (<FileComponent key={template.filename} header={template.filename} line1={''} line2={''} filename={template.filename}/>));

  return(
    <div className="pages-page">
      <div className="pages-page__container">
        <div className="pages-page__pages">
          <div className="sherpon-card">
            <h4>{strings[language].pageTitle}</h4>
            {pageComponents}
            <Link className="sherpon-button-primary-candy pages-page__create-button" to="/website/pages/new-page">{strings[language].createPageButton}</Link>
          </div>
        </div>

        <div className="pages-page__templates">
          <div className="sherpon-card">
            <h4>{strings[language].templateTitle}</h4>
            {templateComponents}
            <Link className="sherpon-button-primary-candy pages-page__create-button" to="/website/pages/new-template">{strings[language].createTemplateButton}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;