/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
import { publishFile } from '../../actions/files/publishFile';
import { backToDashboard, getFile, putFilesDesign } from './editDesignActions';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import EditDesign from './editDesign.jsx';
/** containers */
/** styles */
/** files */
/** strings */

class EditDesignContainer extends React.Component {
  constructor(props) {
    super(props);
    const {getFile} = this.props;
    const filename = this.props.match.params.filename.split('-dot-').join('.');
    getFile(filename);
  }

  render() {
    const {language, isFetching, isFileLoaded, file} = this.props;
    const {
      backToDashboard,
      handleOnClickSaveFile,
      handleOnClickPublishFile,
    } = this.props;
    
    return(
      <div className="edit-design-container">
        <Spinner
          isFetching={isFetching}
        />
        <EditDesign
          language={language}
          isFileLoaded={isFileLoaded}
          file={file}
          backToDashboard={backToDashboard}
          handleOnClickSaveFile={handleOnClickSaveFile}
          handleOnClickPublishFile={handleOnClickPublishFile}
        />
      </div>
    );
  }
}

EditDesignContainer.propTypes = {
  language: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFileLoaded: PropTypes.bool.isRequired,
  file: PropTypes.object.isRequired,
  getFile: PropTypes.func.isRequired,
  backToDashboard: PropTypes.func.isRequired,
  handleOnClickSaveFile: PropTypes.func.isRequired,
  handleOnClickPublishFile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  isFetching: state.pages.editDesign.isFetching,
  isFileLoaded: state.pages.editDesign.isFileLoaded,
  file: state.pages.editDesign.file,
});

const mapDispatchToProps = (dispatch) => ({
  getFile: (filename) => dispatch(getFile(filename)),
  backToDashboard: () => dispatch(backToDashboard()),
  handleOnClickSaveFile: (style, sourceCode) => dispatch(putFilesDesign(style, sourceCode)),
  handleOnClickPublishFile: (filename) => dispatch(publishFile(filename)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDesignContainer);