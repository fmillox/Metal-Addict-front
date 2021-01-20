const initialState = {
  /* contenu du champ email du formulaire de login */
  email: '',
  /* contenu du champ password du formulaire de login */
  password: '',
  /* indique si l'utilisateur est authentifié */
  isLogged: false,
  /* token JWT */
  token: null,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
