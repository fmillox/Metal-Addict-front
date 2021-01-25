import {
  SET_LOADING_REVIEW,
  SAVE_REVIEW,
} from 'src/actions/review';

const initialState = {
  loading: false,
  data: null,
};

function reviewReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_REVIEW:
      return {
        ...state,
        loading: action.value,
      };
    case SAVE_REVIEW:
      return {
        ...state,
        data: action.review,
      };
    default:
      return state;
  }
}

export default reviewReducer;
