import axios from 'axios';

import {
  FETCH_SET_LIST_API_MORE_EVENTS,
  setLoading,
  saveSetListApiMoreEvents,
} from 'src/actions/events';

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

      setLoading(true);
      axios.get(`/search/${band.id}`, {
        params: {
          city,
          venueName: venue,
          country: country === null ? '' : country.id,
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
          setLoading(false);
        });
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default eventsMiddleware;
