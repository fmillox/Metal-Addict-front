import React from 'react';
import PropTypes from 'prop-types';

import SmallReview from 'src/components/Reviews/SmallReview';

import './reviews.scss';

const Reviews = ({ reviews, showMoreData }) => (
  <div className="reviews">
    {
      reviews.map((review) => <SmallReview key={review.id} showData={showMoreData} {...review} />)
    }
  </div>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  showMoreData: PropTypes.bool,
};

Reviews.defaultProps = {
  showMoreData: true,
};

export default Reviews;
