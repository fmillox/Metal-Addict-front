import axios from 'axios';

import {
  FETCH_EVENT,
  USER_PARTICIPATE_IN_EVENT,
  setLoadingEvent,
  saveEvent,
} from 'src/actions/event';

const eventMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_EVENT: {
      store.dispatch(setLoadingEvent(true));
      axios.get(`/event/${action.setlistId}`)
        .then((response) => {
          store.dispatch(saveEvent(response.data));
        })
        .catch((error) => {
          console.log(error);
          action.history.push('/page_non_trouvee');
        })
        .finally(() => {
          store.dispatch(setLoadingEvent(false));
        });
      next(action);
      break;
    }
    case USER_PARTICIPATE_IN_EVENT: {
      const { token } = store.getState().auth;

      axios.post(`/event/${action.setlistId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          // TODO : action.history.push('...');
        });
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default eventMiddleware;
