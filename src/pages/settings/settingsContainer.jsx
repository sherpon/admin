/** libs */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** constants */
/** actions */
import { updateWebsite } from './settingsActions';
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
    isFetching,
    errorStatus,
    updateWebsite,
  }) => {
  const [websiteForm, updatewebsiteForm] = useState(website);

  const handleUpdateWebsiteName = (name) => {
    const newWebsiteForm = {...websiteForm, name};
    updatewebsiteForm(newWebsiteForm);
  };
  const handleUpdateWebsiteDomain = (domain) => {
    const newWebsiteForm = {...websiteForm, domain};
    updatewebsiteForm(newWebsiteForm);
  };
  const handleUpdateWebsiteFavicon = (favicon) => {
    const newWebsiteForm = {...websiteForm, favicon};
    updatewebsiteForm(newWebsiteForm);
  };

  const handleUpdateWebsite = () => {
    updateWebsite(websiteForm.name, websiteForm.favicon, websiteForm.domain);
  };

  return(
    <div className="settings-container">
      <Spinner isFetching={isFetching}/>
      <Settings
        language={language}
        website={websiteForm}
        handleUpdateWebsiteName={handleUpdateWebsiteName}
        handleUpdateWebsiteDomain={handleUpdateWebsiteDomain}
        handleUpdateWebsiteFavicon={handleUpdateWebsiteFavicon}
        handleUpdateWebsite={handleUpdateWebsite}
      />
    </div>
  );
};

SettingsContainer.propTypes = {
  language: PropTypes.string.isRequired,
  website: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorStatus: PropTypes.number.isRequired,
  updateWebsite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  website: state.website,
  isFetching: state.pages.settings.isFetching,
  errorStatus: state.pages.settings.errorStatus,
});

const mapDispatchToProps = (dispatch) => ({
  updateWebsite: (name, favicon, domain) => dispatch(updateWebsite(name, favicon, domain)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);