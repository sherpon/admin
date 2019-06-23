/** libs */
import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
/** constants */
/** actions */

/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import SpinnerPage from '../components/spinner/spinnerPage.jsx';
import Dashboard from '../components/dashboard/dashboard.jsx';
/** containers */
import Sidebar from '../components/sidebar/sidebarContainer.jsx';
import Header from '../components/header/headerContainer.jsx';
const PagesPage = React.lazy(() => import(/* webpackChunkName: "pages-page" */ '../pages/pages/pagesContainer.jsx'));
const NewPagesPage = React.lazy(() => import(/* webpackChunkName: "new-page-page" */ '../pages/newPage/newPageContainer.jsx'));
const MediaPage = React.lazy(() => import(/* webpackChunkName: "media-page" */ '../pages/media/mediaContainer.jsx'));
const SettingsPage = React.lazy(() => import(/* webpackChunkName: "settings-page" */ '../pages/settings/settingsContainer.jsx'));
/** styles */
/** files */
/** strings */

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Dashboard 
        sidebar={<Sidebar/>}
        header={<Header/>}
        body={
          <Switch>
            <Suspense fallback={<SpinnerPage/>}>
              <Route exact path="/website/pages/new-page" component={NewPagesPage} />
              <Route exact path="/website/pages" component={PagesPage} />
              <Route exact path="/website/media" component={MediaPage} />
              <Route exact path="/website/settings" component={SettingsPage} />
            </Suspense> 
          </Switch>
        }
      />
    );
  }
}

DashboardContainer.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);