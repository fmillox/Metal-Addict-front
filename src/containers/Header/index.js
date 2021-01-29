import { connect } from 'react-redux';

// on importe le composant de présentation
import Header from 'src/components/Header';

import { resetHomePage } from 'src/actions/home';
import { logOut } from 'src/actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isLogged: state.auth.user !== null,
  user: state.auth.user,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  resetHomePage: () => {
    dispatch(resetHomePage());
  },

  handleLogout: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);
