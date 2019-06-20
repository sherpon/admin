/** libs */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
// import { updateWebsite } from './settingsActions';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import Media from './media.jsx';

/** containers */
/** styles */
/** files */
/** strings */

const media = [
  {
    filename: 'picture1.jpg', 
    directory: 'picture', 
    url: 'https://images.unsplash.com/photo-1558869031-49d71660e2d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80', 
    size: 45000, 
    createdAt: '',
  },
  {
    filename: 'picture2.jpg', 
    directory: 'picture', 
    url: 'https://images.unsplash.com/photo-1554366347-897a5113f6ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80', 
    size: 45000, 
    createdAt: '',
  },
  {
    filename: 'picture3.jpg', 
    directory: 'picture', 
    url: 'https://images.unsplash.com/photo-1557167045-d01287bedddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 
    size: 45000, 
    createdAt: '',
  },
];

const MediaContainer = ({language}) => {

  return(
    <div className="media-container">
      <Spinner isFetching={false}/>
      <Media
        language={language}
        media={media}
      />
    </div>
  );
};

MediaContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);