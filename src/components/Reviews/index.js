import React from 'react';

import './reviews.scss';

import SmallReview from 'src/components/SmallReview';

const Reviews = ({ reviews }) => (
  <div className="reviews">
    {reviews.map((review) => (
      <SmallReview key={review.id} {...review} />
    ))}

    <SmallReview />
    <SmallReview />
    <SmallReview />
    <SmallReview />
  </div>
);

export default Reviews;
