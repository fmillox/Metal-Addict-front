import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { fetchLastReviews } from 'src/actions/reviews';

const mapStateToProps = (state) => ({
  reviews: state.reviews.lastReviews,
  loadingReviews: state.reviews.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (history) => {
    dispatch(fetchLastReviews(history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
