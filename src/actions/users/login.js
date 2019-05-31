/** libs */
import axios from 'axios';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** files */

export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
export const FETCH_LOGIN_RESET = 'FETCH_LOGIN_RESET';

/**
 * @function login
 */
export const login = () => (dispatch) => {
  var provider = new firebase.auth.FacebookAuthProvider();
  // localStorage.setItem('startFetching',JSON.stringify(true));
  dispatch({
    type: FETCH_LOGIN
  });
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithRedirect(provider);
};

const goToAccount = () => {
  history.replace({
    pathname: 'account'
  })
};

/**
 * 
 * @param {String} token - Firebase authentication token
 * @param {Object} user - Firebase authentication user { uid, name, email }
 */
export const loginRequest = (token, user) => (dispatch) => {
  axios({
    method: 'post',
    url: `${process.env.API_ENDPOINT}/login`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: {
      "id": user.uid,
      "name": user.displayName,
      "email": user.email,
      "phone": ''
    }
  })
  .then(function (response) {
    // handle success
    console.log(response);
    if ( response.status === 201 ) {
      // CREATED NO CONTENT
      const stateUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        phone: '',
        websites: []
      };
      dispatch({
        type: FETCH_LOGIN_SUCCESS,
        user: stateUser
      });
      goToAccount();
    } else if ( response.status === 202 ) {
      // ACCEPTED
      dispatch({
        type: FETCH_LOGIN_SUCCESS,
        user: response.data
      });
      goToAccount();
    } else {
      // state UNAUTHORIZED 401 or another status
      console.error(error);
      dispatch({
        type: FETCH_LOGIN_FAILURE,
        error: 'Login request returned UNAUTHORIZED 401 status or another status'
      });
    }
  })
  .catch(function (error) {
    // handle error
    console.error(error);
    const errorMessage = error.message;
    dispatch({
      type: FETCH_LOGIN_FAILURE,
      error: errorMessage
    });
  });
};

/**
 * @param {Object} user - Firebase authentication user { uid, name, email }
 */
const getToken = (user) => (dispatch) => {
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    // Send token to your backend via HTTPS
    // ...
    dispatch(loginRequest(idToken, user));
  }).catch(function(error) {
    // Handle error
    console.error(error);
    const errorMessage = error.message;
    dispatch({
      type: FETCH_LOGIN_FAILURE,
      error: errorMessage
    });
  });
};

/**
 * This function must execute when the login page loads
 */
export const handleOnLoginResult = () => (dispatch) => {
  firebase.auth().getRedirectResult().then(function(result) {
    // The signed-in user info.
    const user = result.user;
    if (user !== null) {
      dispatch(getToken(user));
    }
  }).catch(function(error) {
    // Handle Errors here.
    console.error(error);
    const errorMessage = error.message;
    dispatch({
      type: FETCH_LOGIN_FAILURE,
      error: errorMessage
    });
  });
};