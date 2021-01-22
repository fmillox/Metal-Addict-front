import axios from 'axios';
import history from 'src/router/history';

import {
  FETCH_BANDS,
  FETCH_COUNTRIES,
  updateBands,
  updateCountries,
  SUBMIT_EVENTS_SEARCH,
  updatedLoadingBands,
  updatedLoadingCountries,

} from 'src/actions/searchForm';

import { saveEventsResults } from 'src/actions/events'

const searchFormMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_BANDS:
      axios.get('https://cors-anywhere.herokuapp.com/http://ec2-54-162-156-51.compute-1.amazonaws.com/Share-O-Metal/public/api/band', {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
        .then((response) => {
          store.dispatch(updateBands(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(updatedLoadingBands());
        });
      next(action);
      break;

    case FETCH_COUNTRIES:
      axios.get('http://ec2-54-162-156-51.compute-1.amazonaws.com/Share-O-Metal/public/api/country')
        .then((response) => {
          store.dispatch(updateCountries(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(updatedLoadingCountries());
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

      axios.get(`http://ec2-54-162-156-51.compute-1.amazonaws.com/Share-O-Metal/public/api/search/${band.id}`, {
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
          history.push('/evenements');
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
