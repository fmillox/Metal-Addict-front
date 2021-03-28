export const SET_LOADING_REVIEW = 'SET_LOADING_REVIEW';
export const FETCH_REVIEW = 'FETCH_REVIEW';
export const SAVE_REVIEW = 'SAVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const SET_LOADING_UPLOAD_PICTURE_IN_REVIEW = 'SET_LOADING_UPLOAD_PICTURE_IN_REVIEW';
export const UPLOAD_PICTURE_IN_REVIEW = 'UPLOAD_PICTURE_IN_REVIEW';

export const setLoadingReview = (value) => ({
  type: SET_LOADING_REVIEW,
  value,
});

export const fetchReview = (id, history) => ({
  type: FETCH_REVIEW,
  id,
  history,
});

export const saveReview = (review) => ({
  type: SAVE_REVIEW,
  review,
});

export const deleteReview = (id, history) => ({
  type: DELETE_REVIEW,
  id,
  history,
});

export const setLoadingUploadPicture = (value) => ({
  type: SET_LOADING_UPLOAD_PICTURE_IN_REVIEW,
  value,
});

export const uploadPicture = (formData, history) => ({
  type: UPLOAD_PICTURE_IN_REVIEW,
  formData,
  history,
});
