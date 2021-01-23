import { connect } from 'react-redux';

import pictures from 'src/datas/pictures';

// on importe le composant de présentation
import Pictures from 'src/components/Pictures';

import { displayAllPictures } from 'src/actions/pictures';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  pictures,
  allPictures: state.pictures.allPictures,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  buttonClick: () => dispatch(displayAllPictures()),
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Pictures);
