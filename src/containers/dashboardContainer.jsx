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
/** containers */
/** styles */
/** files */
/** strings */

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Switch>
        <Route exact path="/account" component={ () => (<div></div>)} />
        {/**
        <Route render={() => (
          <Navbar language={language} siteType={siteType} domain={domain} logout={logout} >
            <Switch>
              <Route exact path="/sales" component={SalesPage} />
              <Route exact path="/sale/:saleId" component={SalePage} />
              <Route exact path="/" component={HomePage} />
              <Route component={HomePage}/>
            </Switch>
          </Navbar>
          )} 
        />
         */}
        
      </Switch>
    );
  }
}

DashboardContainer.propTypes = {};

export default DashboardContainer;