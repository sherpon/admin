const sessionName = 'SHERPON_USER';
const sessionWebsite = 'SHERPON_WEBSITE';
const sessionFiles = 'SHERPON_FILES';

/** START USER */
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
/** END USER */

/** START WEBSITE */
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
/** END WEBSITE */

/** START FILES */
export const setFiles = (files) => {
  localStorage.setItem(sessionFiles,JSON.stringify(files));
  return true;
};

export const initFiles = (initialState) => {
  const sessionContent = localStorage.getItem(sessionFiles);
  if (sessionContent === null) {
    return initialState;
  } else {
    return JSON.parse(sessionContent);
  }
};

export const cleanFiles = () => {
  localStorage.removeItem(sessionFiles);
};
/** END FILES */