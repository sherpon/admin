/** libs */
import React from 'react';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
import { getDevice, getLength } from './utilities';
/** modules */
/** components */
import MediaPicture from '../../components/mediaPicture/mediaPicture.jsx';
/** containers */
/** styles */
import './media.scss';
/** files */
/** strings */
import strings from './media.strings.json';

const Media = ({
   language,
   handleOpenModal,
   media,
  }) => {
  const device = getDevice();
  const length = getLength(device);
  const MediaList = media.map( item => (
    <MediaPicture 
      key={item.filename}
      length={length}
      src={item.url}
    />
  ));
  
  return(
    <div className="media-page">
      
      <div className="media-page__header">
        <h4>{strings[language].title}</h4>
        <button 
          className="sherpon-button-primary-candy-outline"
          onClick={() => handleOpenModal()}
          >
          {strings[language].addNewButton}
        </button>
      </div>
      <div className="media-page__gallery">
        {MediaList}
      </div>
    </div>
  );
};

Media.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Media;