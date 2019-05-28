import { getLanguage, SHERPON_LANGUAGE } from './language';

describe('Test language', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  test('it should give the current language of the browser.', () => {
    const navigator = {
      language: 'es-ES'
    };
    const language = getLanguage(navigator, localStorage);
    expect(language).toEqual('ES');
  });

  test('it should give the current language of the browser.', () => {
    const navigator = {
      language: 'en'
    };
    const language = getLanguage(navigator, localStorage);
    expect(language).toEqual('EN');
  });

  test('it should give the current language in the localstorage.', () => {
    const navigator = {
      language: 'en'
    };
    localStorage.setItem(SHERPON_LANGUAGE, JSON.stringify({ language: 'ES' }));
    const language = getLanguage(navigator, localStorage);
    expect(language).toEqual('ES');
  });

  test('it should give English as default language when receiving null.', () => {
    const navigator = {
      language: null
    };
    const language = getLanguage(navigator, localStorage);
    expect(language).toEqual('EN');
  });

  test('it should give English as default language when receiving undefined.', () => {
    const navigator = {};
    const language = getLanguage(navigator, localStorage);
    expect(language).toEqual('EN');
  });

  test('it should give English as default language when receiving a unsupported language.', () => {
    const navigator = {
      language: 'ch'
    };
    const language = getLanguage(navigator, localStorage);
    expect(language).toEqual('EN');
  });

  test('it should give English as default language when receiving undefined navigator.', () => {
    const language = getLanguage(undefined, localStorage);
    expect(language).toEqual('EN');
  });

  test('it should give English as default language when receiving undefined localStorage.', () => {
    const language = getLanguage(undefined, undefined);
    expect(language).toEqual('EN');
  });

});