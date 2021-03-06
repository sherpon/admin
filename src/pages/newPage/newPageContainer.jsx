/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
import { postPage } from './newPageActions';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import ModalError from '../../components/modalError/modalError.jsx';
import NewPage from './newPage.jsx';
/** containers */
/** styles */
/** files */
/** strings */

class NewPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {
        filename: '',
        url: '',
        title: '',
      },
      error: '',
    };
    this.handleOnChangeFileFilename = this.handleOnChangeFileFilename.bind(this);
    this.handleOnChangeFileUrl = this.handleOnChangeFileUrl.bind(this);
    this.handleOnChangeFileTitle = this.handleOnChangeFileTitle.bind(this);
    this.handleOnClickSaveFile = this.handleOnClickSaveFile.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
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
  handleOnClickSaveFile() {
    if (this.state.file.title==='' || this.state.file.url==='') {
      this.setState({ error: 'There is an empty field.' });
      return;
    }
    const {postPage} = this.props;
    postPage(this.state.file);
  }
  handleErrorClose() {
    this.setState({ error: '' });
  }

  render() {
    const {language, isFetching} = this.props;
    return(
      <div className="new-page-container">
        <Spinner
          isFetching={isFetching}
        />
        <ModalError
          error={this.state.error}
          handleErrorClose={this.handleErrorClose}
        />
        <NewPage
          language={language}
          file={this.state.file}
          handleOnChangeFileFilename={this.handleOnChangeFileFilename}
          handleOnChangeFileUrl={this.handleOnChangeFileUrl}
          handleOnChangeFileTitle={this.handleOnChangeFileTitle}
          handleOnClickSaveFile={this.handleOnClickSaveFile}
        />
      </div>
    );
  }
}

NewPageContainer.propTypes = {
  language: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  postPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  isFetching: state.pages.newPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  postPage: (page) => dispatch(postPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPageContainer);