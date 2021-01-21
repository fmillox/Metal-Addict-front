import { SAVE_LAST_REVIEWS, HIDE_LOADER } from 'src/actions/reviews';

const initialState = {
  lastReviews: [],

  eventReviews: [],

  userReviews: [],

  loading: false,
};

function reviewsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case HIDE_LOADER:
      return {
        ...state,
        loading: true,
      };

    case SAVE_LAST_REVIEWS:
      return {
        ...state,
        lastReviews: action.reviews,
        loading: false,
      };

    default:
      return state;
  }
}

export default reviewsReducer;
