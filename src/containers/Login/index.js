import { connect } from 'react-redux';

import { logIn } from 'src/actions/auth';
// on importe le composant de présentation
import Login from 'src/components/Login';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email, password, history) => {
    dispatch(logIn(email, password, history));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Login);
