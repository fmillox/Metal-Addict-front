import React from 'react';
import PropTypes from 'prop-types';

import './reviews.scss';

import SmallReview from 'src/components/Reviews/SmallReview';

const Reviews = ({ reviews }) => (
  <div className="reviews">
    {console.log(reviews)};
    {reviews.map((review) => (
      <SmallReview key={review.id} {...review} />
    ))}
  </div>
);

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
