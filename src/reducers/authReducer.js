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
    default:
      return state;
  }
}

export default authReducer;
