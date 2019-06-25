/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { 
  handleOnChangeFileSourceCode,
  putFiles,
  handleOnClickPublishFile,
} from './editCodeActions';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import EditCode from './editCode.jsx';

/** containers */
/** styles */
/** files */
/** strings */

class EditCodeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {language, isFetching, file} = this.props;
    const {
      handleOnChangeFileSourceCode, 
      handleOnClickSaveFile,
      handleOnClickPublishFile,
    } = this.props;

    return(
      <div className="edit-code-container">
        <Spinner
          isFetching={isFetching}
        />
        <EditCode
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

EditCodeContainer.propTypes = {
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
  handleOnChangeFileSourceCode: (sourceCode) => dispatch(handleOnChangeFileSourceCode(sourceCode)),
  handleOnClickSaveFile: () => dispatch(putFiles()),
  handleOnClickPublishFile: () => dispatch(handleOnClickPublishFile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCodeContainer);