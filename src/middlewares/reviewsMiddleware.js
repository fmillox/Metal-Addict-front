import axios from 'axios';

import {
  FETCH_LAST_REVIEWS,
  saveLastReviews,
  showLoader,
} from 'src/actions/reviews';

const reviewsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_LAST_REVIEWS:
      store.dispatch(showLoader());
      axios.get('https://cors-anywhere.herokuapp.com/http://ec2-54-162-156-51.compute-1.amazonaws.com/Share-O-Metal/public/api/review?limit=6&order=ASC', {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
        .then((response) => {
          console.log(response);
          // store.dispatch(saveLastReviews(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default reviewsMiddleware;
