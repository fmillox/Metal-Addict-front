import { connect } from 'react-redux';

import { setReviewBackLink } from 'src/actions/review';

// on importe le composant de présentation
import SmallReview from 'src/components/Reviews/SmallReview';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setBackLink: (location) => {
    dispatch(setReviewBackLink(location));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SmallReview);
