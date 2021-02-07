import { connect } from 'react-redux';

// on importe le composant de présentation
import Review from 'src/components/Review';

import {
  fetchReview,
  fetchPictures,
  deleteReview,
  uploadPicture,
} from 'src/actions/review';

import { isUserOwnerReview } from 'src/utils';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
// nom de la prop à remplir: élément à récupérer dans le state
  loadingReview: state.review.loading || state.review.data === null,
  review: state.review.data,
  loadingPictures: state.pictures.loading,
  loadingUploadPicture: state.review.loadingUploadPicture,
  pictures: state.pictures.reviewPictures,
  isUserOwnerReview: isUserOwnerReview(state.auth.user, state.review.data),
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
// nom de la prop à remplir: fonction qui dispatch l'action
  loadReview: (id, history) => {
    dispatch(fetchReview(id, history));
  },
  loadPictures: (id, history) => {
    dispatch(fetchPictures(id, history));
  },
  manageUploadPicture: (formData, history) => {
    dispatch(uploadPicture(formData, history));
  },
  deleteReview: (id, history) => {
    dispatch(deleteReview(id, history));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Review);
