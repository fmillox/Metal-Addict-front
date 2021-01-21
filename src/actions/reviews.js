export const FETCH_LAST_REVIEWS = 'FETCH_LAST_REVIEWS';
export const SAVE_LAST_REVIEWS = 'SAVE_LAST_REVIEWS';
export const HIDE_LOADER = 'HIDE_LOADER';

export const fetchLastReviews = () => ({
  type: FETCH_LAST_REVIEWS,
});

export const saveLastReviews = (reviews) => ({
  type: SAVE_LAST_REVIEWS,
  reviews,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});
