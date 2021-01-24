import React from 'react';
import PropTypes from 'prop-types';

import './reviews.scss';

import SmallReview from 'src/components/Reviews/SmallReview';

const Reviews = ({ reviews }) => (
  <div className="reviews">
    {reviews.map((review) => (
      <SmallReview key={review.id} {...review} />
    ))}
  </div>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Reviews;
