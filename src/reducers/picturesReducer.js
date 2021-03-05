import {
  SET_LOADING_PICTURES,
  SAVE_EVENT_PICTURES,
  ADD_EVENT_PICTURE,
  ADD_REVIEW_PICTURE,
} from 'src/actions/pictures';
import { SAVE_USER_PICTURES } from 'src/actions/users';
import { SAVE_REVIEW_PICTURES } from 'src/actions/review';

const initialState = {
  /* pictures of a specific event */
  eventPictures: [],
  /* pictures of a specific review */
  reviewPictures: [],
  /* pictures of a specific user */
  userPictures: [],
  /* indicate if pictures are loading */
  loading: false,
};

function picturesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_PICTURES:
      return {
        ...state,
        loading: action.value,
      };

    case SAVE_EVENT_PICTURES:
      return {
        ...state,
        eventPictures: action.pictures,
      };

    case ADD_EVENT_PICTURE:
      return {
        ...state,
        eventPictures: [action.picture].concat([...state.eventPictures]),
      };

    case SAVE_USER_PICTURES:
      return {
        ...state,
        userPictures: action.pictures,
      };

    case SAVE_REVIEW_PICTURES:
      return {
        ...state,
        reviewPictures: action.pictures,
      };

    case ADD_REVIEW_PICTURE:
      return {
        ...state,
        reviewPictures: [action.picture].concat([...state.reviewPictures]),
      };

    default:
      return state;
  }
}

export default picturesReducer;
