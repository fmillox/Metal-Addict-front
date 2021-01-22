import axios from 'axios';

import {
  FETCH_BANDS,
  FETCH_COUNTRIES,
  updateBands,
  updateCountries,
  SUBMIT_EVENTS_SEARCH,
} from 'src/actions/searchForm';

import { saveEventsResults } from 'src/actions/events';

const searchFormMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_BANDS:
      axios.get('/band')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(updateBands(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case FETCH_COUNTRIES:
      axios.get('/country')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(updateCountries(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case SUBMIT_EVENTS_SEARCH: {
      const {
        band,
        city,
        venue,
        country,
        year,
      } = store.getState().searchForm;

      axios.get(`/search/${band.id}`, {
        params: {
          city,
          venueName: venue,
          country: country === null ? '' : country.id,
          year: year === null ? '' : year.id,
          p: 1,
        },
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveEventsResults(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default searchFormMiddleware;
