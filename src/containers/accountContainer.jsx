/** libs */
import React, { Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import SpinnerPage from '../components/spinner/spinnerPage.jsx';
/** containers */
import AccountPage from '../pages/account/accountContainer.jsx';
const DashboardContainer = React.lazy(() => import( /* webpackChunkName: "dashboard-container" */ './dashboardContainer.jsx'));
const EditDesignPage = React.lazy(() => import( /* webpackChunkName: "edit-design-page-container" */ '../pages/editDesign/editDesignContainer.jsx'));
/** styles */
/** files */
/** strings */

class AccountContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Switch>
        <Suspense fallback={<SpinnerPage/>}>
          <Route exact path="/page-builder/:filename" component={EditDesignPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/" component={AccountPage} />
          <Route path="/website" component={DashboardContainer}/>
        </Suspense> 
      </Switch>
    );
  }
}

AccountContainer.propTypes = {};

export default AccountContainer;
