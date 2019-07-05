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
import Sidebar from './sidebar.jsx';
/** containers */
/** styles */
/** files */
/** strings */
import strings from './sidebar.strings.json';

const windowWidth = window.innerWidth // get window's width
let isMobile;
if (windowWidth < 751) {
  isMobile = true;
} else {
  isMobile = false;
}

const SidebarContainer = ({language}) => {

  const [expanded, toggleExpanded] = useState(!isMobile);

  const handleOnClickMenu = () => {
    toggleExpanded(!expanded);
  };

  const handleOnCollapseMenu = () => {
    if (isMobile) {
      toggleExpanded(false);
    }
  };

  return(
    <Sidebar
      strings={strings[language]}
      expanded={expanded}
      handleOnClickMenu={handleOnClickMenu}
      handleOnCollapseMenu={handleOnCollapseMenu}
    />
  );
};

SidebarContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);