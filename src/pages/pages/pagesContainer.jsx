/** libs */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
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
import strings from './pages.strings.json';

const PagesContainer = ({language, files}) => {
  return(
    <div className="pages-container">
      <Spinner isFetching={false}/>
      <Pages
        language={language}
        files={files}
      />
    </div>
  );
};

PagesContainer.propTypes = {
  language: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  files: state.files,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PagesContainer);