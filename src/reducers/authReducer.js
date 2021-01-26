import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  SAVE_USER,
  LOG_OUT,
  SET_LOADING,
} from 'src/actions/auth';

const initialState = {
  /* contenu du champ email du formulaire de login */
  email: '',
  /* contenu du champ password du formulaire de login */
  password: '',
  /* token JWT */
  token: null,

  isLogged: false,

  nickname: null,

  avatar: '',

  biography: '',

  userId: null,

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

    case SAVE_USER:
      return {
        ...state,
        isLogged: action.isLogged,
        token: action.token,
        email: '',
        password: '',
      };

    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
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
