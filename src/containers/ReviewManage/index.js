import { connect } from 'react-redux';

// on importe le composant de présentation
import ReviewManage from 'src/components/ReviewManage';

import { setReviewManageTitle, setReviewManageContent } from 'src/actions/reviewManage';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  title: state.reviewManage.title,
  content: state.reviewManage.content,
  loadingSubmit: state.reviewManage.loading,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setTitle: (value) => {
    dispatch(setReviewManageTitle(value));
  },
  setContent: (value) => {
    dispatch(setReviewManageContent(value));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ReviewManage);
