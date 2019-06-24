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
import EditorHtml from '../editorHtml/editorHtml.jsx';
import EditorJavascript from '../editorJavascript/editorJavascript.jsx';
import EditorCSS from '../editorCss/editorCss.jsx';
/** containers */
/** styles */
import './fileForm.scss';
/** files */
/** strings */
import strings from './fileForm.strings.json';

const FileForm = ({language, fileType, file, handles}) => {
  const createdAt = (new Date(file.createdAt)).toString();
  return(
    <div className="file-form">
      <div className="sherpon-card">
        <h4>{ fileType==='page' ? strings[language].pageTitle : strings[language].templateTitle }</h4>

        {/** START FILENAME */}
        <label htmlFor="file-form__filename">{strings[language].filenameLabel}</label>
        <input 
          id="file-form__filename" type="text"
          placeholder={'e.g. about.ejs'}
          value={file.filename}
          disabled={true}
          onChange={ (event) => handles.handleOnChangeFileFilename(event.target.value)}
        />
        {/** END FILENAME */}

        {/** START URL */}
        { fileType === 'page' ? (
          <React.Fragment>
            <label htmlFor="file-form__url">{strings[language].urlLabel}</label>
            <input 
              id="file-form__url" type="text"
              placeholder={'e.g. About'}
              value={file.url}
              onChange={ (event) => handles.handleOnChangeFileUrl(event.target.value)}
            />
          </React.Fragment>
        ) : (<React.Fragment/>) }
        {/** END URL */}

        {/** START TITLE */}
        { fileType === 'page' ? (
          <React.Fragment>
            <label htmlFor="file-form__title">{strings[language].titleLabel}</label>
            <input 
              id="file-form__title" type="text"
              placeholder={'e.g. About'}
              value={file.title}
              onChange={ (event) => handles.handleOnChangeFileTitle(event.target.value)}
            />
          </React.Fragment>
        ) : (<React.Fragment/>) }
        {/** END TITLE */}

        {/** START KEYWORDS */}
        { fileType === 'page' ? (
          <React.Fragment>
            <label htmlFor="file-form__keywords">{strings[language].keywordsLabel}</label>
            <input 
              id="file-form__keywords" type="text"
              placeholder={'e.g. about,my-page,my-business'}
              value={file.keywords}
              onChange={ (event) => handles.handleOnChangeFileKeywords(event.target.value)}
            />
          </React.Fragment>
        ) : (<React.Fragment/>) }
        {/** END KEYWORDS */}

        {/** START DESCRIPTION */}
        { fileType === 'page' ? (
          <React.Fragment>
            <label htmlFor="file-form__description">{strings[language].descriptionLabel}</label>
            <input 
              id="file-form__description" type="text"
              placeholder={'e.g. This is the about page'}
              value={file.description}
              onChange={ (event) => handles.handleOnChangeFileDescription(event.target.value)}
            />
          </React.Fragment>
        ) : (<React.Fragment/>) }
        {/** END DESCRIPTION */}

        {/** START THEME COLOR */}
        { fileType === 'page' ? (
          <React.Fragment>
            <label htmlFor="file-form__theme-color">{strings[language].themeColorLabel}</label>
            <input 
              id="file-form__theme-color" type="text"
              placeholder={'e.g. #AFAFAF'}
              value={file.themeColor}
              onChange={ (event) => handles.handleOnChangeFileThemeColor(event.target.value)}
            />
          </React.Fragment>
        ) : (<React.Fragment/>) }
        {/** END THEME COLOR */}

        {/** START META */}
        { fileType === 'page' ? (
          <React.Fragment>
            <label htmlFor="file-form__meta">{strings[language].metaLabel}</label>
            <EditorHtml
              code={file.meta}
              handleOnChange={handles.handleOnChangeFileMeta}
            />
          </React.Fragment>
        ) : (<React.Fragment/>) }
        {/** 
        <input 
              id="file-form__meta" type="text"
              placeholder={'e.g. <meta name="viewport" content="width=device-width, initial-scale=1.0">'}
              value={file.meta}
              onChange={ (event) => handles.handleOnChangeFileMeta(event.target.value)}
            />
        END META */}

        {/** START SCRIPT */}
        { fileType === 'page' ? (
          <React.Fragment>
            <label htmlFor="file-form__script">{strings[language].scriptLabel}</label>
            <EditorJavascript
              code={file.script}
              handleOnChange={handles.handleOnChangeFileScript}
            />
          </React.Fragment>
        ) : (<React.Fragment/>) }
        {/** 
        <input 
              id="file-form__script" type="text"
              placeholder={'e.g. let myVar = "my value"'}
              value={file.script}
              onChange={ (event) => handles.handleOnChangeFileScript(event.target.value)}
            />
        END SCRIPT */}

        {/** START STYLE */}
        { fileType === 'page' ? (
          <React.Fragment>
            <label htmlFor="file-form__style">{strings[language].styleLabel}</label>
            <EditorCSS
              code={file.style}
              handleOnChange={handles.handleOnChangeFileStyle}
            />
          </React.Fragment>
        ) : (<React.Fragment/>) }
        {/** 
        <input 
              id="file-form__style" type="text"
              placeholder={'e.g. .my-class {}'}
              value={file.style}
              onChange={ (event) => handles.handleOnChangeFileStyle(event.target.value)}
            />
        END STYLE */}

        {/** START CREATED AT */}
        <label htmlFor="file-form__created-at">{strings[language].createdAtLabel}</label>
        <input 
          id="file-form__createdAt" type="text"
          placeholder={''}
          value={createdAt}
          disabled={true}
        />
        {/** END CREATED AT */}

        <button 
          className="sherpon-button-primary-candy file-form__save-button" 
          onClick={() => handles.handleOnClickSaveFile()}
          >
          {strings[language].saveButton}
        </button>
      </div>
    </div>
  );
};

FileForm.propTypes = {
  language: PropTypes.string.isRequired,
  fileType: PropTypes.string.isRequired, 
  file: PropTypes.object.isRequired, 
  handles: PropTypes.object.isRequired,
};

export default FileForm;