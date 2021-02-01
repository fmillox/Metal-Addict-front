export const SET_LOADING_REVIEW = 'SET_LOADING_REVIEW';
export const FETCH_REVIEW = 'FETCH_REVIEW';
export const SAVE_REVIEW = 'SAVE_REVIEW';
export const FETCH_PICTURES = 'FETCH_PICTURES';
export const SAVE_REVIEW_PICTURES = 'SAVE_REVIEW_PICTURES';
export const DELETE_REVIEW = 'DELETE_REVIEW';

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

export const fetchPictures = (reviewId) => ({
  type: FETCH_PICTURES,
  reviewId,
});

export const saveReviewPictures = (pictures) => ({
  type: SAVE_REVIEW_PICTURES,
  pictures,
});

export const deleteReview = (id, history) => ({
  type: DELETE_REVIEW,
  id,
  history,
});
