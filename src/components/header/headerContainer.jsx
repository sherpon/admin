/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Header from './header.jsx';
/** containers */
/** styles */
/** files */
/** strings */
import strings from './header.strings.json';

const HeaderContainer = ({name, domain, favicon}) => {
  return(
    <Header
      name={name}
      domain={domain}
      favicon={favicon}
    />
  );
};

HeaderContainer.propTypes = {};

const mapStateToProps = (state) => ({
  name: state.website.name,
  domain: state.website.domain,
  favicon: state.website.favicon,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);