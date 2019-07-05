/** libs */
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** files */

export const USERS_LOGOUT = 'USERS_LOGOUT';

export const logout = () => (dispatch) => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    dispatch({ 
      type: USERS_LOGOUT 
    });
    history.replace({
      pathname: '/login'
    });
  }).catch(function(error) {
    // An error happened.
    console.error('Error logout: ' + error);
  })
};