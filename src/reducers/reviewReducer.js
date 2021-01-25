import {
  SET_LOADING_REVIEW,
  SAVE_REVIEW,
  SET_REVIEW_BACKLINK,
} from 'src/actions/review';

const initialState = {
  loading: false,
  data: null,
  backLocation: '',
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
    case SET_REVIEW_BACKLINK:
      return {
        ...state,
        backLocation: action.location,
      };
    default:
      return state;
  }
}

export default reviewReducer;
