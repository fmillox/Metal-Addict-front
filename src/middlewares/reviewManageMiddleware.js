import axios from 'axios';

import {
  FETCH_REVIEW_MANAGE,
  CREATE_REVIEW_MANAGE,
  EDIT_REVIEW_MANAGE,
  setLoadingReviewManage,
  saveReviewManage,
  resetReviewManage,
} from 'src/actions/reviewManage';
import { redirectTo } from 'src/actions/auth';

const reviewManageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REVIEW_MANAGE: {
      store.dispatch(setLoadingReviewManage(true));
      axios.get(`/review/${action.id}`)
        .then((response) => {
          store.dispatch(saveReviewManage(response.data.title, response.data.content));
        })
        .catch((error) => {
          // console.log(error);
          action.history.push('/erreur');
        })
        .finally(() => {
          store.dispatch(setLoadingReviewManage(false));
        });
      next(action);
      break;
    }

    case CREATE_REVIEW_MANAGE: {
      const { title, content } = store.getState().reviewManage;
      const { token } = store.getState().auth;

      store.dispatch(setLoadingReviewManage(true));
      axios.post(`/review/${action.setlistId}`, {
        title,
        content,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          store.dispatch(resetReviewManage());
          action.history.push(`/evenement/${action.slug}`);
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
          store.dispatch(setLoadingReviewManage(false));
        });
      next(action);
      break;
    }

    case EDIT_REVIEW_MANAGE: {
      const { title, content } = store.getState().reviewManage;
      const { token } = store.getState().auth;

      store.dispatch(setLoadingReviewManage(true));
      axios.patch(`/review/${action.id}`, {
        title,
        content,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          store.dispatch(resetReviewManage());
          action.history.push(`/chronique/${action.slug}`);
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
          store.dispatch(setLoadingReviewManage(false));
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default reviewManageMiddleware;
