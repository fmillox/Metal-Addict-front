import avatar from 'src/datas/avatar.png';

import { SET_LOADING_USER, SAVE_USER_DATAS } from 'src/actions/users';

const initialState = {
  user: {},

  avatar, //TODO avatar par défaut, à traiter

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

    default:
      return state;
  }
}

export default authReducer;
