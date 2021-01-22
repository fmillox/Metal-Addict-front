export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

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
