import axios from 'axios';

import {
  FETCH_REVIEW,
  setLoadingReview,
  saveReview,
} from 'src/actions/review';

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
          action.history.push('/page_non_trouvee');
        })
        .finally(() => {
          store.dispatch(setLoadingReview(false));
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
