import { connect } from 'react-redux';

import { updateEmail, updatePassword, logIn } from 'src/actions/auth';
// on importe le composant de présentation
import Login from 'src/components/Login';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.auth.email,
  password: state.auth.password,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  /*changeField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },*/

  setEmail: (newValue) => {
    dispatch(updateEmail(newValue));
  },

  setPassword: (newValue) => {
    dispatch(updatePassword(newValue));
  },

  manageSubmit: () => {
    dispatch(logIn());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Login);
