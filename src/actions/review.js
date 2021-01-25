export const SET_LOADING_REVIEW = 'SET_LOADING_REVIEW';
export const FETCH_REVIEW = 'FETCH_REVIEW';
export const SAVE_REVIEW = 'SAVE_REVIEW';

export const setLoadingReview = (value) => ({
  type: SET_LOADING_REVIEW,
  value,
});

export const fetchReview = (id) => ({
  type: FETCH_REVIEW,
  id,
});

export const saveReview = (review) => ({
  type: SAVE_REVIEW,
  review,
});
