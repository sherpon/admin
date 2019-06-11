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
import AccountPage from '../pages/account/accountContainer.jsx';
const PagesPage = React.lazy(() => import(/* webpackChunkName: "pages-page" */ '../pages/pages/pagesContainer.jsx'));
/** styles */
/** files */
/** strings */

const Body = () => (<div>body</div>);

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Switch>
        <Route exact path="/account" component={AccountPage} />
        <Route render={() => (
          <Dashboard 
            sidebar={<Sidebar/>}
            header={<Header/>}
            body={
              <Switch>
                <Suspense fallback={<SpinnerPage/>}>
                <Route exact path="/pages" component={PagesPage} />
                </Suspense> 
              </Switch>
            }
          />
        )}/>
      </Switch>
    );
  }
}

DashboardContainer.propTypes = {};

export default DashboardContainer;

/**
 <Navbar language={language} siteType={siteType} domain={domain} logout={logout} >
              <Switch>
                <Route exact path="/sales" component={SalesPage} />
                <Route exact path="/sale/:saleId" component={SalePage} />
                <Route exact path="/" component={HomePage} />
                <Route component={HomePage}/>
              </Switch>
            </Navbar> 
 
 */