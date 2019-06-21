import { FETCH_GET_MEDIA, FETCH_GET_MEDIA_SUCCESS } from '../pages/media/mediaActions';

import { USERS_LOGOUT } from '../actions/users/logout';

const initialState = 'empty';

/**
 * @function mediaReducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_MEDIA:
      return action.media;

    case FETCH_GET_MEDIA_SUCCESS:
      return action.media;
  
    case USERS_LOGOUT:
      return initialState;

    default:
      return state;
  }
};