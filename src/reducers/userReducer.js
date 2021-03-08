import {
  SET_LOADING_USER,
  SAVE_USER_DATAS,
} from 'src/actions/users';

import { SAVE_AVATAR } from 'src/actions/auth';

const initialState = {
  /* datas of a user */
  user: {},
  /* indicate if the loading of the user datas is in progress */
  loading: false,
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
