export const LOG_IN = 'LOG_IN';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';

export const logIn = () => ({
  type: LOG_IN,
});

export const updateEmail = (newValue) => ({
  type: UPDATE_EMAIL,
  newValue,
});

export const updatePassword = (newValue) => ({
  type: UPDATE_PASSWORD,
  newValue,
});

export const saveUser = (isLogged, token) => ({
  type: SAVE_USER,
  isLogged,
  token,
});

export const logOut = () => ({
  type: LOG_OUT,
});
