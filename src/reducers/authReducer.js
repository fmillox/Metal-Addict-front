import { UPDATE_EMAIL, UPDATE_PASSWORD } from 'src/actions/auth';

const initialState = {
  /* contenu du champ email du formulaire de login */
  email: '',
  /* contenu du champ password du formulaire de login */
  password: '',
  /* token JWT */
  token: null,

  nickname: null,

  avatar: '',

  biography: '',

  userId: null,

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

    default:
      return state;
  }
}

export default authReducer;
