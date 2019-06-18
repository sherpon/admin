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
import Settings from './settings.jsx';

/** containers */
/** styles */
/** files */
/** strings */

const SettingsContainer = ({
    language,
    website,
  }) => {
  const [websiteForm, updatewebsiteForm] = useState({});
  return(
    <div className="settings-container">
      <Spinner isFetching={false}/>
      <Settings/>
    </div>
  );
};

SettingsContainer.propTypes = {
  language: PropTypes.string.isRequired,
  website: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  website: state.website,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);