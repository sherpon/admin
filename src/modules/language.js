export const SHERPON_LANGUAGE = 'sherpon_language';
const DEFAULT_LANGUAGE = 'EN';
/**
 * 
 * @param {Object} navigator - window.navigator
 * @param {Object} _localStorage - window.localStorage
 */
export const getLanguage = (navigator, _localStorage) => {
  let language = DEFAULT_LANGUAGE;

  if ( typeof _localStorage !== 'undefined') {
    const localLanguage = _localStorage.getItem(SHERPON_LANGUAGE);
    if ( localLanguage !== null ) {
      language = JSON.parse(localLanguage).language;
      return language;
    }
  }

  if ( typeof navigator !== 'undefined') {
    if (navigator.language !== null && navigator.language !== undefined) {
      if ( navigator.language.search(/en/) !== -1 ) {
        language = 'EN';
      } else if ( navigator.language.search(/es/) !== -1 ) {
        language = 'ES';
      } else {
        language = 'EN';
      }
    }
  }

  return language;
};
