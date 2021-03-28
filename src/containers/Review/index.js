import { connect } from 'react-redux';

import Review from 'src/components/Review';

import {
  fetchReview,
  deleteReview,
  uploadPicture,
} from 'src/actions/review';
import { fetchReviewPictures } from 'src/actions/pictures';
import { isUserOwnerReview } from 'src/utils';

const mapStateToProps = (state) => ({
  loadingReview: state.review.loading || state.review.data === null,
  review: state.review.data,
  loadingPictures: state.pictures.loading,
  loadingUploadPicture: state.review.loadingUploadPicture,
  pictures: state.pictures.reviewPictures,
  isUserOwnerReview: isUserOwnerReview(state.auth.user, state.review.data),
});

const mapDispatchToProps = (dispatch) => ({
  loadReview: (id, history) => {
    dispatch(fetchReview(id, history));
  },
  loadPictures: (id, history) => {
    dispatch(fetchReviewPictures(id, history));
  },
  manageUploadPicture: (formData, history) => {
    dispatch(uploadPicture(formData, history));
  },
  deleteReview: (id, history) => {
    dispatch(deleteReview(id, history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
