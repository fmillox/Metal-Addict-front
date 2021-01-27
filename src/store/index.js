import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

import authMiddleware from 'src/middlewares/authMiddleware';
import searchFormMiddleware from 'src/middlewares/searchFormMiddleware';
import reviewsMiddleware from 'src/middlewares/reviewsMiddleware';
import eventsMiddleware from 'src/middlewares/eventsMiddleware';
import eventMiddleware from 'src/middlewares/eventMiddleware';
import reviewMiddleware from 'src/middlewares/reviewMiddleware';
import reviewManageMiddleware from 'src/middlewares/reviewManageMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    searchFormMiddleware,
    reviewsMiddleware,
    reviewMiddleware,
    eventsMiddleware,
    eventMiddleware,
    reviewManageMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
