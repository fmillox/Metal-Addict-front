import { connect } from 'react-redux';

// on importe le composant de présentation
import RegisterUser from 'src/components/RegisterUser';

import { resetHomePage } from 'src/actions/home';
import { registerNewUser } from 'src/actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  resetHomePage: () => {
    dispatch(resetHomePage());
  },
  registerNewUser: (email, password, passwordConfirmed, nickname, history) => {
    dispatch(registerNewUser(email, password, passwordConfirmed, nickname, history));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
