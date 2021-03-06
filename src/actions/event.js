export const SET_LOADING_EVENT = 'SET_LOADING_EVENT';
export const FETCH_EVENT = 'FETCH_EVENT';
export const SAVE_EVENT = 'SAVE_EVENT';
export const FETCH_USERS_PARTICIPATE_IN_EVENT = 'FETCH_USERS_PARTICIPATE_IN_EVENT';
export const SAVE_USERS_PARTICIPATE_IN_EVENT = 'SAVE_USERS_PARTICIPATE_IN_EVENT';
export const USER_PARTICIPATE_IN_EVENT = 'USER_PARTICIPATE_IN_EVENT';
export const ADD_USER_PARTICIPATE_IN_EVENT = 'ADD_USER_PARTICIPATE_IN_EVENT';
export const SET_LOADING_UPLOAD_PICTURE_IN_EVENT = 'SET_LOADING_UPLOAD_PICTURE_IN_EVENT';
export const UPLOAD_PICTURE_IN_EVENT = 'UPLOAD_PICTURE_IN_EVENT';

export const setLoadingEvent = (value) => ({
  type: SET_LOADING_EVENT,
  value,
});

export const fetchEvent = (setlistId, history) => ({
  type: FETCH_EVENT,
  setlistId,
  history,
});

export const saveEvent = (event) => ({
  type: SAVE_EVENT,
  event,
});

export const fetchUsersParticipateInEvent = (setlistId, history) => ({
  type: FETCH_USERS_PARTICIPATE_IN_EVENT,
  setlistId,
  history,
});

export const saveUsersParticipateInEvent = (users) => ({
  type: SAVE_USERS_PARTICIPATE_IN_EVENT,
  users,
});

export const userParticipateInEvent = (setlistId, history) => ({
  type: USER_PARTICIPATE_IN_EVENT,
  setlistId,
  history,
});

export const addUserParticipateInEvent = (user) => ({
  type: ADD_USER_PARTICIPATE_IN_EVENT,
  user,
});

export const setLoadingUploadPicture = (value) => ({
  type: SET_LOADING_UPLOAD_PICTURE_IN_EVENT,
  value,
});

export const uploadPicture = (formData, history) => ({
  type: UPLOAD_PICTURE_IN_EVENT,
  formData,
  history,
});
