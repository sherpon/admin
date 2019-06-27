/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
import { 
  getFile,
  handleOnChangeFileSourceCode,
  putFiles,
} from '../editCode/editCodeActions';
import { publishFile } from '../../actions/files/publishFile';
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
    const {language, isFetching, file} = this.props;
    const {
      handleOnChangeFileSourceCode, 
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
          file={file}
          handleOnChangeFileSourceCode={handleOnChangeFileSourceCode}
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
  file: PropTypes.object.isRequired,
  handleOnChangeFileSourceCode: PropTypes.func.isRequired,
  handleOnClickSaveFile: PropTypes.func.isRequired,
  handleOnClickPublishFile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  isFetching: state.pages.editCode.isFetching,
  file: state.pages.editCode.file,
});

const mapDispatchToProps = (dispatch) => ({
  getFile: (filename) => dispatch(getFile(filename)),
  handleOnChangeFileSourceCode: (sourceCode) => dispatch(handleOnChangeFileSourceCode(sourceCode)),
  handleOnClickSaveFile: () => dispatch(putFiles()),
  handleOnClickPublishFile: (filename) => dispatch(publishFile(filename)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDesignContainer);