/** libs */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { getMedia } from './mediaActions';
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

class MediaContainer extends React.Component {
  constructor(props) {
    super(props);
    const {getMedia} = this.props;
    getMedia();
  }

  render() {
    const {language, media} = this.props;
    const mediaList = typeof media === 'string'? [] : media;
    return(
      <div className="media-container">
        <Spinner isFetching={false}/>
        <Media
          language={language}
          media={mediaList}
        />
      </div>
    );
  }
}

MediaContainer.propTypes = {
  language: PropTypes.string.isRequired,
  media: PropTypes.any.isRequired,
  getMedia: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  media: state.media,
});

const mapDispatchToProps = (dispatch) => ({
  getMedia: () => dispatch(getMedia()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);