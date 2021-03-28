export const SET_LOADING_PICTURES = 'SET_LOADING_PICTURES';
export const FETCH_EVENT_PICTURES = 'FETCH_EVENT_PICTURES';
export const SAVE_EVENT_PICTURES = 'SAVE_EVENT_PICTURES';
export const ADD_EVENT_PICTURE = 'ADD_EVENT_PICTURE';
export const FETCH_REVIEW_PICTURES = 'FETCH_REVIEW_PICTURES';
export const SAVE_REVIEW_PICTURES = 'SAVE_REVIEW_PICTURES';
export const ADD_REVIEW_PICTURE = 'ADD_REVIEW_PICTURE';
export const FETCH_USER_PICTURES = 'FETCH_USER_PICTURES';
export const SAVE_USER_PICTURES = 'SAVE_USER_PICTURES';

export const setLoadingPictures = (value) => ({
  type: SET_LOADING_PICTURES,
  value,
});

export const fetchEventPictures = (setlistId, history) => ({
  type: FETCH_EVENT_PICTURES,
  setlistId,
  history,
});

export const saveEventPictures = (pictures) => ({
  type: SAVE_EVENT_PICTURES,
  pictures,
});

export const addEventPicture = (picture) => ({
  type: ADD_EVENT_PICTURE,
  picture,
});

export const fetchReviewPictures = (reviewId, history) => ({
  type: FETCH_REVIEW_PICTURES,
  reviewId,
  history,
});

export const saveReviewPictures = (pictures) => ({
  type: SAVE_REVIEW_PICTURES,
  pictures,
});

export const addReviewPicture = (picture) => ({
  type: ADD_REVIEW_PICTURE,
  picture,
});

export const fetchUserPictures = (userId, history) => ({
  type: FETCH_USER_PICTURES,
  userId,
  history,
});

export const saveUserPictures = (pictures) => ({
  type: SAVE_USER_PICTURES,
  pictures,
});
