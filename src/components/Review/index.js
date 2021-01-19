import React from 'react';

import './review.scss';

import dave from 'src/images/dave.jpg';

const Review = () => (
  <article className="review">
    <div className="image"><img src={dave} className="image-content" alt="" /></div>
    <div className="content">
      <h3 className="title">Mon concert de l'année </h3>
      <p className="date">posté le 18/01/2021</p>
      <p className="name">Megadeth</p>
      <p className="venue">Le Zénith - Paris - France</p>
    </div>
  </article>
);

export default Review;
