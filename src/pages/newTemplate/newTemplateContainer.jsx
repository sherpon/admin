/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { postTemplate } from './newTemplateActions';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import NewTemplate from './newTemplate.jsx';

/** containers */
/** styles */
/** files */
/** strings */

class NewTemplateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {
        filename: '',
      },
    };
    this.handleOnChangeFileFilename = this.handleOnChangeFileFilename.bind(this);
    this.handleOnClickSaveFile = this.handleOnClickSaveFile.bind(this);
  }

  handleOnChangeFileFilename(filename) {
    const newFile = {...this.state.file, filename};
    this.setState({file: newFile});
  }
  handleOnClickSaveFile() {
    const {postTemplate} = this.props;
    postTemplate(this.state.file);
  }

  render() {
    const {language, isFetching} = this.props;
    return(
      <div className="new-template-container">
        <Spinner
          isFetching={isFetching}
        />
        <NewTemplate
          language={language}
          file={this.state.file}
          handleOnChangeFileFilename={this.handleOnChangeFileFilename}
          handleOnClickSaveFile={this.handleOnClickSaveFile}
        />
      </div>
    );
  }
}

NewTemplateContainer.propTypes = {
  language: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  postTemplate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  isFetching: state.pages.newTemplate.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  postTemplate: (page) => dispatch(postTemplate(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTemplateContainer);