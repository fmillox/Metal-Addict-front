export const SET_LOADING_REVIEWS = 'SET_LOADING_REVIEWS';
export const FETCH_LAST_REVIEWS = 'FETCH_LAST_REVIEWS';
export const SAVE_LAST_REVIEWS = 'SAVE_LAST_REVIEWS';
export const FETCH_EVENT_REVIEWS = 'FETCH_EVENT_REVIEWS';
export const SAVE_EVENT_REVIEWS = 'SAVE_EVENT_REVIEWS';

export const setLoadingReviews = (value) => ({
  type: SET_LOADING_REVIEWS,
  value,
});

export const fetchLastReviews = (history) => ({
  type: FETCH_LAST_REVIEWS,
  history,
});

export const saveLastReviews = (reviews) => ({
  type: SAVE_LAST_REVIEWS,
  reviews,
});

export const fetchEventReviews = (setlistId, history) => ({
  type: FETCH_EVENT_REVIEWS,
  setlistId,
  history,
});

export const saveEventReviews = (reviews) => ({
  type: SAVE_EVENT_REVIEWS,
  reviews,
});
