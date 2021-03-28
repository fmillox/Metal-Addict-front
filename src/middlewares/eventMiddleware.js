import axios from 'axios';

import {
  FETCH_EVENT,
  FETCH_USERS_PARTICIPATE_IN_EVENT,
  USER_PARTICIPATE_IN_EVENT,
  UPLOAD_PICTURE_IN_EVENT,
  setLoadingEvent,
  saveEvent,
  saveUsersParticipateInEvent,
  addUserParticipateInEvent,
  setLoadingUploadPicture,
} from 'src/actions/event';
import { addEventPicture } from 'src/actions/pictures';
import { redirectTo } from 'src/actions/auth';

const eventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENT: {
      store.dispatch(setLoadingEvent(true));
      axios.get(`/event/${action.setlistId}`)
        .then((response) => {
          store.dispatch(saveEvent(response.data));
        })
        .catch((error) => {
          if (error.response.status === 404) {
            action.history.push('/page_non_trouvee');
          }
          else {
            // console.log(error);
            action.history.push('/erreur');
          }
        })
        .finally(() => {
          store.dispatch(setLoadingEvent(false));
        });
      next(action);
      break;
    }

    case FETCH_USERS_PARTICIPATE_IN_EVENT: {
      axios.get(`user?setlistId=${action.setlistId}`)
        .then((response) => {
          store.dispatch(saveUsersParticipateInEvent(response.data));
        })
        .catch((error) => {
          // console.log(error);
          action.history.push('/erreur');
        });
      next(action);
      break;
    }

    case USER_PARTICIPATE_IN_EVENT: {
      const { token, user } = store.getState().auth;

      axios.post(`/event/${action.setlistId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(addUserParticipateInEvent(user));
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(redirectTo(action.history.location.pathname));
            action.history.push('/connexion');
          }
          else {
            // console.log(error);
            action.history.push('/erreur');
          }
        });
      next(action);
      break;
    }

    case UPLOAD_PICTURE_IN_EVENT: {
      const { id } = store.getState().event.data.setlist;
      const { token } = store.getState().auth;

      store.dispatch(setLoadingUploadPicture(true));
      axios.post(`/picture/${id}`, action.formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          store.dispatch(addEventPicture(response.data));
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(redirectTo(action.history.location.pathname));
            action.history.push('/connexion');
          }
          else {
            // console.log(error);
            action.history.push('/erreur');
          }
        })
        .finally(() => {
          store.dispatch(setLoadingUploadPicture(false));
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default eventMiddleware;
