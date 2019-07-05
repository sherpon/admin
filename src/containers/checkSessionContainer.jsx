/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
import history from '../modules/history';
/** modules */
/** components */
/** containers */
/** styles */
/** files */
/** strings */

const CheckSessionContainer = ({userId, children}) => {
  if (userId==='') {
    history.replace({
      pathname: '/login'
    });
    return(<React.Fragment/>);
  } else {
    return (
      <div className="check-session-container">{children}</div>
    )
  }
};

const mapStateToProps = (state) => ({
  userId: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CheckSessionContainer);
