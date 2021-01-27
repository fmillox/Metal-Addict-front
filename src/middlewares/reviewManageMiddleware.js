import axios from 'axios';

import {
  FETCH_REVIEW_MANAGE,
  CREATE_REVIEW_MANAGE,
  EDIT_REVIEW_MANAGE,
  setLoadingReviewManage,
  saveReviewManage,
  resetReviewManage,
} from 'src/actions/reviewManage';

const reviewMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_REVIEW_MANAGE: {
      store.dispatch(setLoadingReviewManage(true));
      axios.get(`/review/${action.id}`)
        .then((response) => {
          store.dispatch(saveReviewManage(response.data.title, response.data.content));
        })
        .catch((error) => {
          console.log(error);
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
          console.log(response);
          store.dispatch(resetReviewManage());
          action.history.goBack();
        })
        .catch((error) => {
          console.log(error);
          // TODO : action.history.push('...');
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
          console.log(response);
          store.dispatch(resetReviewManage());
          action.history.goBack();
        })
        .catch((error) => {
          console.log(error);
          // TODO : action.history.push('...');
        })
        .finally(() => {
          store.dispatch(setLoadingReviewManage(false));
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
