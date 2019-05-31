const sessionName = 'SHERPON_USER';

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