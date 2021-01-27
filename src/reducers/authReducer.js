import jwt_decode from "jwt-decode";

import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  SAVE_USER,
  LOG_OUT,
  SET_LOADING,
} from 'src/actions/auth';

const initialState = {
  user: null,
  /* token JWT */
  token: '',

  email: '',

  password: '',

  loading: false,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.newValue,
      };

    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.newValue,
      };

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
      }; }

    case LOG_OUT:
      return {
        ...state,
        token: '',
        user: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.value,
      };

    default:
      return state;
  }
}

export default authReducer;
