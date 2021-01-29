import avatar from 'src/datas/avatar.png';

import {
  SET_LOADING_USER,
  SAVE_USER_DATAS,
  DISPLAY_EVENTS,
  DISPLAY_REVIEWS,
  DISPLAY_PICTURES,
} from 'src/actions/users';

const initialState = {
  user: {},

  avatar, //TODO avatar par défaut, à supprimer quand communication avec back sera ok,

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

    default:
      return state;
  }
}

export default authReducer;
