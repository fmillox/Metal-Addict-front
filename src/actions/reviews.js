export const SET_LOADING_REVIEWS = 'SET_LOADING_REVIEWS';
export const FETCH_LAST_REVIEWS = 'FETCH_LAST_REVIEWS';
export const SAVE_LAST_REVIEWS = 'SAVE_LAST_REVIEWS';

export const setLoadingReviews = (value) => ({
  type: SET_LOADING_REVIEWS,
  value,
});

export const fetchLastReviews = () => ({
  type: FETCH_LAST_REVIEWS,
});

export const saveLastReviews = (reviews) => ({
  type: SAVE_LAST_REVIEWS,
  reviews,
});
