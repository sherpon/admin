/** libs */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
/** styles */
import './dashboard.scss';
/** files */
/** strings */

const Dashboard = ({sidebar, header, body}) => {
  return(
    <div className="dashboard__container">
      <div className="dashboard__sidebar">{sidebar}</div>
      <div className="dashboard__header">{header}</div>
      <div className="dashboard__body">{body}</div>
    </div>
  );
};

Dashboard.propTypes = {
  sidebar: PropTypes.element.isRequired,
  header: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired,
};

export default Dashboard;