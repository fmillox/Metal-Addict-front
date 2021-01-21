import axios from 'axios';
import history from 'src/router/history';

import {
  FETCH_BANDS,
  FETCH_COUNTRIES,
  updateBands,
  updateCountries,
  saveEventsResults,
  SUBMIT_EVENTS_SEARCH,
} from 'src/actions/searchForm';

const searchFormMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_BANDS:
      axios.get('')
        .then((response) => {
          console.log(response);
          // store.dispatch(updateBands(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case FETCH_COUNTRIES:
      axios.get('')
        .then((response) => {
          console.log(response);
          // store.dispatch(updateCountries(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case SUBMIT_EVENTS_SEARCH:
      axios.post('')
        .then((response) => {
          console.log(response);
          // store.display(saveEventsResults(response.data));
          history.push('/evenements');
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
export default searchFormMiddleware;
