const sessionName = 'SHERPON_USER';
const sessionWebsite = 'SHERPON_WEBSITE';

export const setUser = (user) => {
  localStorage.setItem(sessionName,JSON.stringify(user));
  return true;
};

export const initUser = (initialState) => {
  const sessionContent = localStorage.getItem(sessionName);
  if (sessionContent === null) {
    return initialState;
  } else {
    return JSON.parse(sessionContent);
  }
};

export const cleanUser = () => {
  localStorage.removeItem(sessionName);
};

export const setWebsite = (website) => {
  localStorage.setItem(sessionWebsite,JSON.stringify(website));
  return true;
};

export const initWebsite = (initialState) => {
  const sessionContent = localStorage.getItem(sessionWebsite);
  if (sessionContent === null) {
    return initialState;
  } else {
    return JSON.parse(sessionContent);
  }
};

export const cleanWebsite = () => {
  localStorage.removeItem(sessionWebsite);
};