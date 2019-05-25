import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { Router as BrowserRouter, Route, Redirect, Switch /*, withRouter */ } from 'react-router-dom';

import history from '../modules/history';
import reducer from '../reducers'

import Login from '../pages/login/loginContainer.jsx';

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
      <Login/>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Login} />
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
