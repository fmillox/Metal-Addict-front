import axios from 'axios';

import {
  FETCH_EVENT_PICTURES,
  FETCH_REVIEW_PICTURES,
  FETCH_USER_PICTURES,
  setLoadingPictures,
  saveEventPictures,
  saveReviewPictures,
  saveUserPictures,
} from 'src/actions/pictures';

const picturesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENT_PICTURES: {
      store.dispatch(setLoadingPictures(true));
      axios.get(`/picture?setlistId=${action.setlistId}&order=DESC`)
        .then((response) => {
          store.dispatch(saveEventPictures(response.data));
        })
        .catch((error) => {
          // console.log(error);
          action.history.push('/erreur');
        })
        .finally(() => {
          store.dispatch(setLoadingPictures(false));
        });
      next(action);
      break;
    }

    case FETCH_REVIEW_PICTURES: {
      store.dispatch(setLoadingPictures(true));
      axios.get(`/picture?review=${action.reviewId}&order=DESC`)
        .then((response) => {
          store.dispatch(saveReviewPictures(response.data));
        })
        .catch((error) => {
          // console.log(error);
          action.history.push('/erreur');
        })
        .finally(() => {
          store.dispatch(setLoadingPictures(false));
        });
      next(action);
      break;
    }

    case FETCH_USER_PICTURES:
      store.dispatch(setLoadingPictures(true));
      axios.get(`/picture?user=${action.userId}&order=DESC`)
        .then((response) => {
          store.dispatch(saveUserPictures(response.data));
        })
        .catch((error) => {
          // console.log(error);
          action.history.push('/erreur');
        })
        .finally(() => {
          store.dispatch(setLoadingPictures(false));
        });
      next(action);
      break;

    default:
      next(action);
  }
};
export default picturesMiddleware;
