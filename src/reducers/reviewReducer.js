import {
  SET_LOADING_REVIEW,
  SAVE_REVIEW,
  SET_LOADING_UPLOAD_PICTURE_IN_REVIEW,
} from 'src/actions/review';

const initialState = {
  /* indicate if the review is loading */
  loading: false,
  /* data of the review */
  data: null,
  /* indicate if the user is uploading a picture */
  loadingUploadPicture: false,
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
    case SET_LOADING_UPLOAD_PICTURE_IN_REVIEW:
      return {
        ...state,
        loadingUploadPicture: action.value,
      };
    default:
      return state;
  }
}

export default reviewReducer;
