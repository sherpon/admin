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
import './mediaPicture.scss';
/** files */
/** strings */

const MediaPicture = ({length, src}) => {
  const style = {
    width: length,
    height: length,
  };
  return(
    <div className="media-picture" style={style}>
      <div 
        style={{ 
          backgroundImage: `url(${src})`,
        }}
      />
    </div>
  );
};

MediaPicture.propTypes = {
  length: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};

export default MediaPicture;