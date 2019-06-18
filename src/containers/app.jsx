/** libs */
import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { Router as BrowserRouter, Route, Switch /*, withRouter */ } from 'react-router-dom';

/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
import history from '../modules/history';
import reducer from '../reducers'

/** components */
import SpinnerPage from '../components/spinner/spinnerPage.jsx';

/** containers */
import Login from '../pages/login/loginContainer.jsx';
import Logout from './logoutContainer.jsx';
import CheckSessionContainer from './checkSessionContainer.jsx';
const AccountContainer = React.lazy(() => import( /* webpackChunkName: "account-container" */ './accountContainer.jsx'));
/** styles */
/** files */
/** strings */

/**
 * SET REDUX'S STORE START
 */
let store;
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // for chrome extension
  middleware.push(createLogger())
  store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middleware))
  )
} else {
  store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )
}
/**
 * END
 */

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/spinner" component={SpinnerPage} />
          <Route render={() => (
            <CheckSessionContainer>
              <Suspense fallback={<SpinnerPage/>}>
                <AccountContainer/>
              </Suspense>
            </CheckSessionContainer>
          )}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
};

export default App

render(
  <App/>,
  document.getElementById('app')
)
