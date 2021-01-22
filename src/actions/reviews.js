export const FETCH_LAST_REVIEWS = 'FETCH_LAST_REVIEWS';
export const SAVE_LAST_REVIEWS = 'SAVE_LAST_REVIEWS';
export const SET_LOADING = 'SET_LOADING';

export const fetchLastReviews = () => ({
  type: FETCH_LAST_REVIEWS,
});

export const saveLastReviews = (reviews) => ({
  type: SAVE_LAST_REVIEWS,
  reviews,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  value,
});
