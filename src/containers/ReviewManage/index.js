import { connect } from 'react-redux';

// on importe le composant de présentation
import ReviewManage from 'src/components/ReviewManage';

import { setReviewTitle, setReviewContent } from 'src/actions/review';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loadingSubmit: state.review.loading,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setTitle: (value) => {
    dispatch(setReviewTitle(value));
  },
  setContent: (value) => {
    dispatch(setReviewContent(value));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ReviewManage);
