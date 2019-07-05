/** libs */
import React from 'react';
import { connect } from 'react-redux';
/** constants */
/** actions */
import { logout } from '../actions/users/logout';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
/** styles */
/** files */
/** strings */

const logoutContainer = ({ logout }) => {
  logout();

  return(
    <div className="logout-container"></div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(logoutContainer);