// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import {
  SAVE_USER,
  LOG_OUT,
  IS_NOT_AUTHORIZED,
  REDIRECT_TO,
  SET_LOADING_AVATAR,
  SAVE_AVATAR,
  SET_LOADING_EDIT_USER,
  SAVE_EDITED_USER,
} from 'src/actions/auth';

import { RESET_HOME_PAGE } from 'src/actions/home';

const INITIAL_REDIRECT = '/';

const initialState = {
  user: null,
  /* token JWT */
  token: '',

  notAuthorized: false,

  loadingAvatar: false,

  loadingEdit: false,

  redirect: INITIAL_REDIRECT,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_USER: {
      const user = jwt_decode(action.token);

      return {
        ...state,
        token: action.token,
        user: {
          id: user.id,
          roles: user.roles,
          nickname: user.nickname,
          biography: user.biography,
          avatar: user.avatar,
          username: user.username,
        },
        notAuthorized: false,
        redirect: INITIAL_REDIRECT,
      };
    }

    case LOG_OUT:
      return {
        ...state,
        token: '',
        user: null,
        notAuthorized: false,
        redirect: INITIAL_REDIRECT,
      };

    case REDIRECT_TO:
      return {
        ...state,
        token: '',
        user: null,
        notAuthorized: false,
        redirect: action.location,
      };

    case RESET_HOME_PAGE:
      return {
        ...state,
        notAuthorized: false,
        redirect: INITIAL_REDIRECT,
      };

    case IS_NOT_AUTHORIZED:
      return {
        ...state,
        notAuthorized: true,
      };

    case SET_LOADING_AVATAR:
      return {
        ...state,
        loadingAvatar: action.value,
      };

    case SAVE_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.path,
        },
      };

    case SET_LOADING_EDIT_USER:
      return {
        ...state,
        loadingEdit: action.value,
      };

    case SAVE_EDITED_USER:
      return {
        ...state,
        user: {
          ...state.user,
          nickname: action.nickname,
          biography: action.biography,
        },
      };

    default:
      return state;
  }
}

export default authReducer;
