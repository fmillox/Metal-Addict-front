import {
  SET_LOADING_REVIEW,
  SAVE_REVIEW,
  SET_REVIEW_TITLE,
  SET_REVIEW_CONTENT,
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
    case SET_REVIEW_TITLE:
      return {
        ...state,
        data: { ...state.data, title: action.value },
      };
    case SET_REVIEW_CONTENT:
      return {
        ...state,
        data: { ...state.data, content: action.value },
      };
    default:
      return state;
  }
}

export default reviewReducer;
