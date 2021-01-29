import axios from 'axios';

import {
  FETCH_SET_LIST_API_MORE_EVENTS,
  setLoadingEvents,
  saveSetListApiMoreEvents,
} from 'src/actions/events';

import { FETCH_USER_EVENTS, saveUserEvents } from 'src/actions/users';

const eventsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_SET_LIST_API_MORE_EVENTS: {
      const {
        band,
        country,
        city,
        year,
        venue,
      } = store.getState().searchForm;

      const { searchEvents } = store.getState().events;

      store.dispatch(setLoadingEvents(true));
      axios.get(`/search/${band.id}`, {
        params: {
          cityName: city,
          venueName: venue,
          countryId: country === null ? '' : country.id,
          year: year === null ? '' : year.id,
          p: searchEvents.page + 1,
        },
      })
        .then((response) => {
          store.dispatch(saveSetListApiMoreEvents(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoadingEvents(false));
        });
      next(action);
      break;
    }

    case FETCH_USER_EVENTS:
      store.dispatch(setLoadingEvents(true));
      axios.get(`/event?user=${action.userId}`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserEvents(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoadingEvents(false));
        });
      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default eventsMiddleware;
