import axios from 'axios';

import {
  FETCH_REVIEW,
  setLoadingReview,
  saveReview,
  FETCH_PICTURES,
  saveReviewPictures,
  DELETE_REVIEW,
} from 'src/actions/review';

import { setLoadingPictures } from 'src/actions/pictures';

import { redirectTo } from 'src/actions/auth';

const reviewMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REVIEW: {
      store.dispatch(setLoadingReview(true));
      axios.get(`/review/${action.id}`)
        .then((response) => {
          store.dispatch(saveReview(response.data));
        })
        .catch((error) => {
          if (error.response.status === 404) {
            action.history.push('/page_non_trouvee');
          }
          else {
            console.log(error);
            action.history.push('/erreur');
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
      axios.get(`/picture?review=${action.reviewId}&order=DESC`)
        .then((response) => {
          store.dispatch(saveReviewPictures(response.data));
        })
        .catch((error) => {
          console.log(error);
          action.history.push('/erreur');
        })
        .finally(() => {
          store.dispatch(setLoadingPictures(false));
        });
      next(action);
      break;
    }

    case DELETE_REVIEW: {
      const { token } = store.getState().auth;

      axios.delete(`/review/${action.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          action.history.goBack();
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(redirectTo(action.history.location.pathname));
            action.history.push('/connexion');
          }
          else {
            console.log(error);
            action.history.push('/erreur');
          }
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default reviewMiddleware;
