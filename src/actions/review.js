export const SET_LOADING_REVIEW = 'SET_LOADING_REVIEW';
export const FETCH_REVIEW = 'FETCH_REVIEW';
export const SAVE_REVIEW = 'SAVE_REVIEW';
export const SET_REVIEW_TITLE = 'SET_REVIEW_TITLE';
export const SET_REVIEW_CONTENT = 'SET_REVIEW_CONTENT';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const EDIT_REVIEW = 'EDIT_REVIEW';

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

export const setReviewTitle = (value) => ({
  type: SET_REVIEW_TITLE,
  value,
});

export const setReviewContent = (value) => ({
  type: SET_REVIEW_CONTENT,
  value,
});

export const createReview = (setlistId, history) => ({
  type: CREATE_REVIEW,
  setlistId,
  history,
});

export const editReview = (id, history) => ({
  type: EDIT_REVIEW,
  id,
  history,
});
