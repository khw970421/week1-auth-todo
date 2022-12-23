export const USER_KEY = 'user';

export const checkLocalStorage = () => {
  if (getLocalStorageToken()) {
    return true;
  }
  return false;
};

export const getLocalStorageToken = () => {
  return localStorage.getItem(USER_KEY);
};
export const saveLocalStorageToken = (token) => {
  return localStorage.setItem(USER_KEY, token);
};
