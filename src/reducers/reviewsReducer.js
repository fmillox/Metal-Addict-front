import {
  SET_LOADING_REVIEWS,
  SAVE_LAST_REVIEWS,
  SAVE_EVENT_REVIEWS,
} from 'src/actions/reviews';

import { SAVE_USER_REVIEWS } from 'src/actions/users';

const initialState = {
  lastReviews: [],

  eventReviews: [],

  userReviews: [],

  loading: false,
};

function reviewsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_REVIEWS:
      return {
        ...state,
        loading: action.value,
      };

    case SAVE_LAST_REVIEWS:
      return {
        ...state,
        lastReviews: action.reviews,
      };

    case SAVE_EVENT_REVIEWS:
      return {
        ...state,
        eventReviews: action.reviews,

    case SAVE_USER_REVIEWS:
      return {
        ...state,
        userReviews: action.reviews,
      };

    default:
      return state;
  }
}

export default reviewsReducer;
