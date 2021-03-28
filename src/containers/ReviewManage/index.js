import { connect } from 'react-redux';

import ReviewManage from 'src/components/ReviewManage';

import {
  setReviewManageTitle,
  setReviewManageContent,
} from 'src/actions/reviewManage';

const mapStateToProps = (state) => ({
  title: state.reviewManage.title,
  content: state.reviewManage.content,
  loadingSubmit: state.reviewManage.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (value) => {
    dispatch(setReviewManageTitle(value));
  },
  setContent: (value) => {
    dispatch(setReviewManageContent(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewManage);
