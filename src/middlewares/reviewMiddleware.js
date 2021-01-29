import axios from 'axios';

import {
  FETCH_REVIEW,
  setLoadingReview,
  saveReview,
  FETCH_PICTURES,
  saveReviewPictures,
} from 'src/actions/review';

import { setLoadingPictures } from 'src/actions/pictures';

const reviewMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_REVIEW: {
      store.dispatch(setLoadingReview(true));
      axios.get(`/review/${action.id}`)
        .then((response) => {
          store.dispatch(saveReview(response.data));
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 404) {
            action.history.push('/page_non_trouvee');
          }
        })
        .finally(() => {
          store.dispatch(setLoadingReview(false));
        });
      next(action);
      break;
    }

    case FETCH_PICTURES: {
      store.dispatch(setLoadingPictures(true));
      axios.get(`/pictures/${action.id}`)
        .then((response) => {
          store.dispatch(saveReviewPictures(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoadingPictures(false));
        });
      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default reviewMiddleware;
