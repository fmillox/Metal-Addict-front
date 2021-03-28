import { connect } from 'react-redux';

import ReviewCreate from 'src/components/ReviewCreate';

import { createReviewManage } from 'src/actions/reviewManage';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  manageCreate: (setlistId, history, slug) => {
    dispatch(createReviewManage(setlistId, history, slug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCreate);
