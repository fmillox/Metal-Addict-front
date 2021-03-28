// == Npm import
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SmallReview from 'src/components/Reviews/SmallReview';

import './reviews.scss';

// == Component
const Reviews = ({ reviews, showMoreData }) => (
  <div className="reviews">
    {
      reviews.map((review) => <SmallReview key={review.id} showData={showMoreData} {...review} />)
    }
  </div>
);

Reviews.propTypes = {
  /* array of the reviews with the datas */
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  /** bool to indicate if the review has to be display with all his datas */
  showMoreData: PropTypes.bool,
};

Reviews.defaultProps = {
  showMoreData: true,
};

// == Export
export default Reviews;
