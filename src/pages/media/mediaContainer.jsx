/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { getMedia, uploadPictures, handleOpenModal, handleCloseModal } from './mediaActions';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import NewMediaModal from '../../components/newMediaModal/newMediaModal.jsx';
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
    const {language, isFetching, showModal, media, handleOpenModal, handleCloseModal, uploadPictures} = this.props;
    const mediaList = typeof media === 'string'? [] : media;
    return(
      <div className="media-container">
        <Spinner isFetching={isFetching}/>
        <NewMediaModal
          language={language}
          show={showModal}
          uploadPictures={uploadPictures}
          handleCloseModal={handleCloseModal}
        />
        <Media
          language={language}
          handleOpenModal={handleOpenModal}
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
  handleOpenModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  uploadPictures: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  isFetching: state.pages.media.isFetching,
  showModal: state.pages.media.showModal,
  media: state.media,
});

const mapDispatchToProps = (dispatch) => ({
  getMedia: () => dispatch(getMedia()),
  handleOpenModal: () => dispatch(handleOpenModal()), 
  handleCloseModal: () => dispatch(handleCloseModal()),
  uploadPictures: (files, directory) => dispatch(uploadPictures(files, directory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);