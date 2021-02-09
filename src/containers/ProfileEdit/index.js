import { connect } from 'react-redux';

// on importe le composant de présentation
import ProfileEdit from 'src/components/ProfileEdit';

import { editUser } from 'src/actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  user: state.auth.user,
  loadingSubmit: state.auth.loadingEdit,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  manageSubmit: (nickname, biography, history, slug) => {
    dispatch(editUser(nickname, biography, history, slug));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
