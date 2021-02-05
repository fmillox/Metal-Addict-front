import { connect } from 'react-redux';

// on importe le composant de présentation
import ReviewEdit from 'src/components/ReviewEdit';

import { fetchReviewManage, editReviewManage } from 'src/actions/reviewManage';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loadingReview: state.reviewManage.loading,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadReview: (id, history) => {
    dispatch(fetchReviewManage(id, history));
  },
  manageEdit: (id, history, slug) => {
    dispatch(editReviewManage(id, history, slug));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ReviewEdit);
