// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import { SAVE_USER, LOG_OUT } from 'src/actions/auth';

const initialState = {
  user: null,
  /* token JWT */
  token: '',
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
      }; }

    case LOG_OUT:
      return {
        ...state,
        token: '',
        user: null,
      };

    default:
      return state;
  }
}

export default authReducer;
