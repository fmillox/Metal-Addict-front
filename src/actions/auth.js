export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const IS_NOT_AUTHORIZED = 'IS_NOT_AUTHORIZED';
export const REDIRECT_TO = 'REDIRECT_TO';
export const SET_LOADING_AVATAR = 'SET_LOADING_AVATAR';
export const UPLOAD_AVATAR = 'UPLOAD_AVATAR';
export const SAVE_AVATAR = 'SAVE_AVATAR';
export const SET_LOADING_EDIT_USER = 'SET_LOADING_EDIT_USER';
export const EDIT_USER = 'EDIT_USER';
export const SAVE_EDITED_USER = 'SAVE_EDITED_USER';

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

export const isNotAuthorized = () => ({
  type: IS_NOT_AUTHORIZED,
});

export const redirectTo = (location) => ({
  type: REDIRECT_TO,
  location,
});

export const setLoadingAvatar = (value) => ({
  type: SET_LOADING_AVATAR,
  value,
});

export const uploadAvatar = (formData, history) => ({
  type: UPLOAD_AVATAR,
  formData,
  history,
});

export const saveAvatar = (path) => ({
  type: SAVE_AVATAR,
  path,
});

export const setLoadingEditUser = (value) => ({
  type: SET_LOADING_EDIT_USER,
  value,
});

export const editUser = (nickname, biography, history, slug) => ({
  type: EDIT_USER,
  nickname,
  biography,
  history,
  slug,
});

export const saveEditedUser = (nickname, biography) => ({
  type: SAVE_EDITED_USER,
  nickname,
  biography,
});
