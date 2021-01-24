import { SET_LOADING_REVIEWS, SAVE_LAST_REVIEWS } from 'src/actions/reviews';

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

    default:
      return state;
  }
}

export default reviewsReducer;
