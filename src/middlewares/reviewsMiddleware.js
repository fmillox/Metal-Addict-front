import axios from 'axios';

import {
  FETCH_LAST_REVIEWS,
  FETCH_EVENT_REVIEWS,
  FETCH_USER_REVIEWS,
  setLoadingReviews,
  saveLastReviews,
  saveEventReviews,
  saveUserReviews,
} from 'src/actions/reviews';

const reviewsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_LAST_REVIEWS:
      store.dispatch(setLoadingReviews(true));
      axios.get('/review?limit=6&order=DESC')
        .then((response) => {
          store.dispatch(saveLastReviews(response.data));
        })
        .catch((error) => {
          console.log(error);
          action.history.push('/erreur');
        })
        .finally(() => {
          store.dispatch(setLoadingReviews(false));
        });
      next(action);
      break;

    case FETCH_EVENT_REVIEWS: {
      store.dispatch(setLoadingReviews(true));
      axios.get(`/review?setlistId=${action.setlistId}&order=DESC`)
        .then((response) => {
          store.dispatch(saveEventReviews(response.data));
        })
        .catch((error) => {
          console.log(error);
          action.history.push('/erreur');
        })
        .finally(() => {
          store.dispatch(setLoadingReviews(false));
        });
      next(action);
      break;
    }

    case FETCH_USER_REVIEWS:
      store.dispatch(setLoadingReviews(true));
      axios.get(`/review?user=${action.userId}&order=DESC`)
        .then((response) => {
          store.dispatch(saveUserReviews(response.data));
        })
        .catch((error) => {
          console.log(error);
          action.history.push('/erreur');
        })
        .finally(() => {
          store.dispatch(setLoadingReviews(false));
        });
      next(action);
      break;

    default:
      next(action);
  }
};
export default reviewsMiddleware;
