/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { putFiles } from './editFileActions';
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import EditFile from './editFile.jsx';

/** containers */
/** styles */
/** files */
/** strings */

class EditFileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {
        type: 'template',
        filename: '',
        createdAt: 1561320525000,
      },
    };

    const {files} = this.props;
    if ( typeof files === 'string' || files.lenght===0 ) {
      history.push('/website/pages');
    }
    else {
      const filename = this.props.match.params.filename.split('-dot-').join('.');
      const file = files.find(_file => _file.filename===filename);
      this.state = {
        file: file !== undefined ? file : {
          type: 'template',
          filename: '',
          createdAt: 1561320525000,
        },
      };
    }
    
    this.handleOnChangeFileFilename = this.handleOnChangeFileFilename.bind(this);
    this.handleOnChangeFileUrl = this.handleOnChangeFileUrl.bind(this);
    this.handleOnChangeFileTitle = this.handleOnChangeFileTitle.bind(this);
    this.handleOnChangeFileKeywords = this.handleOnChangeFileKeywords.bind(this);
    this.handleOnChangeFileDescription = this.handleOnChangeFileDescription.bind(this);
    this.handleOnChangeFileThemeColor = this.handleOnChangeFileThemeColor.bind(this);
    this.handleOnChangeFileMeta = this.handleOnChangeFileMeta.bind(this);
    this.handleOnChangeFileScript = this.handleOnChangeFileScript.bind(this);
    this.handleOnChangeFileStyle = this.handleOnChangeFileStyle.bind(this);
    this.handleOnClickSaveFile = this.handleOnClickSaveFile.bind(this);
  }

  handleOnChangeFileFilename(filename) {
    const newFile = {...this.state.file, filename};
    this.setState({file: newFile});
  }
  handleOnChangeFileUrl(url) {
    const newFile = {...this.state.file, url};
    this.setState({file: newFile});
  }
  handleOnChangeFileTitle(title) {
    const newFile = {...this.state.file, title};
    this.setState({file: newFile});
  }
  handleOnChangeFileKeywords(keywords) {
    const newFile = {...this.state.file, keywords};
    this.setState({file: newFile});
  }
  handleOnChangeFileDescription(description) {
    const newFile = {...this.state.file, description};
    this.setState({file: newFile});
  }
  handleOnChangeFileThemeColor(themeColor) {
    const newFile = {...this.state.file, themeColor};
    this.setState({file: newFile});
  }
  handleOnChangeFileMeta(meta) {
    const newFile = {...this.state.file, meta};
    this.setState({file: newFile});
  }
  handleOnChangeFileScript(script) {
    const newFile = {...this.state.file, script};
    this.setState({file: newFile});
  }
  handleOnChangeFileStyle(style) {
    const newFile = {...this.state.file, style};
    this.setState({file: newFile});
  }
  handleOnClickSaveFile() {
    const {putFiles} = this.props;
    putFiles(this.state.file);
  }

  render() {
    const {language, isFetching} = this.props;
    const handles = {
      handleOnChangeFileFilename: this.handleOnChangeFileFilename,
      handleOnChangeFileUrl: this.handleOnChangeFileUrl,
      handleOnChangeFileTitle: this.handleOnChangeFileTitle,
      handleOnChangeFileKeywords: this.handleOnChangeFileKeywords,
      handleOnChangeFileDescription: this.handleOnChangeFileDescription,
      handleOnChangeFileThemeColor: this.handleOnChangeFileThemeColor,
      handleOnChangeFileMeta: this.handleOnChangeFileMeta,
      handleOnChangeFileScript: this.handleOnChangeFileScript,
      handleOnChangeFileStyle: this.handleOnChangeFileStyle,
      handleOnClickSaveFile: this.handleOnClickSaveFile,
    };

    return(
      <div className="edit-file-container">
        <Spinner
          isFetching={isFetching}
        />
        <EditFile
          language={language}
          file={this.state.file}
          handles={handles}
        />
      </div>
    );
  }
}

EditFileContainer.propTypes = {
  language: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  files: PropTypes.any.isRequired,
  putFiles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  isFetching: state.pages.editFile.isFetching,
  files: state.files,
});

const mapDispatchToProps = (dispatch) => ({
  putFiles: (file) => dispatch(putFiles(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFileContainer);