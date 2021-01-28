export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';

export const logIn = (email, password, history) => ({
  type: LOG_IN,
  email,
  password,
  history,
});

export const saveUser = (token) => ({
  type: SAVE_USER,
  token,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const registerNewUser = (email, password, passwordConfirmed, nickname, history) => ({
  type: REGISTER_NEW_USER,
  email,
  password,
  passwordConfirmed,
  nickname,
  history,
});
