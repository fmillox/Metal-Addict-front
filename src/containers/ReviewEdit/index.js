import { connect } from 'react-redux';

// on importe le composant de présentation
import ReviewEdit from 'src/components/ReviewEdit';

import { fetchReview, editReview } from 'src/actions/review';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loadingReview: state.review.loading || state.review.data === null,
  review: state.review.data,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadReview: (id) => {
    dispatch(fetchReview(id));
  },
  manageEdit: (id, history) => {
    dispatch(editReview(id, history));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ReviewEdit);
