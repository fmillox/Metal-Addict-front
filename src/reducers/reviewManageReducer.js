import {
  SET_LOADING_REVIEW_MANAGE,
  SAVE_REVIEW_MANAGE,
  SET_REVIEW_MANAGE_TITLE,
  SET_REVIEW_MANAGE_CONTENT,
  RESET_REVIEW_MANAGE,
} from 'src/actions/reviewManage';

const initialState = {
  /* indicate if the review is loading */
  loading: false,
  /* title of the review */
  title: '',
  /* content of the review (html) */
  content: '',
};

function reviewManageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_REVIEW_MANAGE:
      return {
        ...state,
        loading: action.value,
      };
    case SAVE_REVIEW_MANAGE:
      return {
        ...state,
        title: action.title,
        content: action.content,
      };
    case SET_REVIEW_MANAGE_TITLE:
      return {
        ...state,
        title: action.value,
      };
    case SET_REVIEW_MANAGE_CONTENT:
      return {
        ...state,
        content: action.value,
      };
    case RESET_REVIEW_MANAGE:
      return {
        ...state,
        title: '',
        content: '',
      };
    default:
      return state;
  }
}

export default reviewManageReducer;
