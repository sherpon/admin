import { getLanguage } from '../modules/language'; 

/**
 * @function language
 */
export default (state = getLanguage(navigator, localStorage), action) => {
  switch (action.type) {
    default:
      return state
  }
}