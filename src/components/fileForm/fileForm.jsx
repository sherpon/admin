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
import './fileForm.scss';
/** files */
/** strings */
import strings from './fileForm.strings.json';

const FileForm = ({language, fileType, file, handles}) => {
  return(
    <div className="file-form">
      <div className="sherpon-card">
        <h4>{ fileType==='page' ? strings[language].pageTitle : strings[language].templateTitle }</h4>
      </div>

      {/** START FILENAME */}
      <label htmlFor="file-form__filename">{strings[language].filenameLabel}</label>
      <input 
        id="file-form__filename" type="text"
        placeholder={'e.g. about.ejs'}
        value={file.filename}
        onChange={ (event) => handles.handleUpdateFileFilename(event.target.value)}
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
            onChange={ (event) => handles.handleUpdateFileUrl(event.target.value)}
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
            onChange={ (event) => handles.handleUpdateFileTitle(event.target.value)}
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
            onChange={ (event) => handles.handleUpdateFileKeywords(event.target.value)}
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
            onChange={ (event) => handles.handleUpdateFileDescription(event.target.value)}
          />
        </React.Fragment>
      ) : (<React.Fragment/>) }
      {/** END DESCRIPTION */}

      {/** START THEME COLOR */}
      { fileType === 'page' ? (
        <React.Fragment>
          <label htmlFor="file-form__theme-color">{strings[language].themeColorLabel}</label>
          <input 
            id="file-form__themeColor" type="text"
            placeholder={'e.g. #AFAFAF'}
            value={file.themeColor}
            onChange={ (event) => handles.handleUpdateFileThemeColor(event.target.value)}
          />
        </React.Fragment>
      ) : (<React.Fragment/>) }
      {/** END THEME COLOR */}

      {/** START META */}
      { fileType === 'page' ? (
        <React.Fragment>
          <label htmlFor="file-form__meta">{strings[language].metaLabel}</label>
          <input 
            id="file-form__meta" type="text"
            placeholder={'e.g. #AFAFAF'}
            value={file.meta}
            onChange={ (event) => handles.handleUpdateFileMeta(event.target.value)}
          />
        </React.Fragment>
      ) : (<React.Fragment/>) }
      {/** END META */}

      {/** START SCRIPT */}
      { fileType === 'page' ? (
        <React.Fragment>
          <label htmlFor="file-form__script">{strings[language].scriptLabel}</label>
          <input 
            id="file-form__script" type="text"
            placeholder={'e.g. #AFAFAF'}
            value={file.script}
            onChange={ (event) => handles.handleUpdateFileScript(event.target.value)}
          />
        </React.Fragment>
      ) : (<React.Fragment/>) }
      {/** END SCRIPT */}

      {/** START STYLE */}
      { fileType === 'page' ? (
        <React.Fragment>
          <label htmlFor="file-form__style">{strings[language].styleLabel}</label>
          <input 
            id="file-form__style" type="text"
            placeholder={'e.g. #AFAFAF'}
            value={file.style}
            onChange={ (event) => handles.handleUpdateFileStyle(event.target.value)}
          />
        </React.Fragment>
      ) : (<React.Fragment/>) }
      {/** END STYLE */}

      {/** START CREATED AT */}
      <label htmlFor="file-form__created-at">{strings[language].createdAtLabel}</label>
      <input 
        id="file-form__createdAt" type="text"
        placeholder={''}
        value={file.createdAt}
        disabled={true}
      />
      {/** END CREATED AT */}

      <button 
        className="sherpon-button-primary-candy file-form__save-button" 
        onClick={() => handles.handleSaveFile()}
        >
        {strings[language].saveButton}
      </button>

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