// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import {
  SAVE_USER,
  LOG_OUT,
  REDIRECT_TO,
} from 'src/actions/auth';

import { RESET_HOME_PAGE } from 'src/actions/home';

const INITIAL_REDIRECT = '/';

const initialState = {
  user: null,
  /* token JWT */
  token: '',

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
        redirect: INITIAL_REDIRECT,
      }; }

    case LOG_OUT:
      return {
        ...state,
        token: '',
        user: null,
      };

    case REDIRECT_TO:
      return {
        ...state,
        redirect: action.location,
      };

    case RESET_HOME_PAGE:
      return {
        ...state,
        redirect: INITIAL_REDIRECT,
      };

    default:
      return state;
  }
}

export default authReducer;
