/** libs */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { getFiles } from './pagesActions';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import Pages from './pages.jsx';

/** containers */
/** styles */
/** files */
/** strings */

class PagesContainer extends React.Component {
  constructor (props) {
    super(props);
    const {getFiles} = this.props;
    getFiles();
  }

  render () {
    const {language, files} = this.props;
    const filesList = typeof files === 'string'? [] : files;
    return(
      <div className="pages-container">
        <Spinner isFetching={false}/>
        <Pages
          language={language}
          files={filesList}
        />
      </div>
    );
  }
}

PagesContainer.propTypes = {
  language: PropTypes.string.isRequired,
  files: PropTypes.any.isRequired,
  getFiles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  files: state.files,
});

const mapDispatchToProps = (dispatch) => ({
  getFiles: () => dispatch(getFiles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PagesContainer);