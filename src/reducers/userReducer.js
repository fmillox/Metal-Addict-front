import {
  SET_LOADING_USER,
  SAVE_USER_DATAS,
  DISPLAY_EVENTS,
  DISPLAY_REVIEWS,
  DISPLAY_PICTURES,
} from 'src/actions/users';

import { SAVE_AVATAR } from 'src/actions/auth';

const initialState = {
  user: {},

  loading: false,

  showEvents: false,

  showReviews: false,

  showPictures: false,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_USER:
      return {
        ...state,
        loading: action.value,
      };

    case SAVE_USER_DATAS:
      return {
        ...state,
        user: action.datas,
      };

    case DISPLAY_EVENTS:
      return {
        ...state,
        showEvents: !state.showEvents,
      };

    case DISPLAY_REVIEWS:
      return {
        ...state,
        showReviews: !state.showReviews,
      };

    case DISPLAY_PICTURES:
      return {
        ...state,
        showPictures: !state.showPictures,
      };

    case SAVE_AVATAR:
      return {
        ...state,
        user: { ...state.user, avatar: action.path },
      };

    default:
      return state;
  }
}

export default authReducer;
