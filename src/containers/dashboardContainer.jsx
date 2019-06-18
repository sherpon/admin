/** libs */
import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
/** constants */
/** actions */
import { getFiles } from '../actions/files/getFiles';

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
/** styles */
/** files */
/** strings */

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    const { getFiles } = props;
    getFiles();
  }

  render() {
    return(
      <Dashboard 
        sidebar={<Sidebar/>}
        header={<Header/>}
        body={
          <Switch>
            <Suspense fallback={<SpinnerPage/>}>
              <Route exact path="/website/pages" component={PagesPage} />
            </Suspense> 
          </Switch>
        }
      />
    );
  }
}

DashboardContainer.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getFiles: () => dispatch(getFiles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);