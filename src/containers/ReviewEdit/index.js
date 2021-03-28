import { connect } from 'react-redux';

import ReviewEdit from 'src/components/ReviewEdit';

import {
  fetchReviewManage,
  editReviewManage,
} from 'src/actions/reviewManage';

const mapStateToProps = (state) => ({
  loadingReview: state.reviewManage.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadReview: (id, history) => {
    dispatch(fetchReviewManage(id, history));
  },
  manageEdit: (id, history, slug) => {
    dispatch(editReviewManage(id, history, slug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEdit);
