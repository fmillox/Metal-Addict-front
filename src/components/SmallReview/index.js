import React from 'react';

import './smallReview.scss';

import dave from 'src/images/dave.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const SmallReview = (
  title,
  createdDate,
  eventDate,
  bandName,
  venue,
  country,
  city,
  avatar,
  writer,
) => (
  <article
    className="smallReview"
    data-aos="zoom-in"
    data-aos-easing="linear"
    data-aos-duration="1000"
  >
    <div className="image"><img src={dave} className="image-content" alt="" /></div>
    <div className="content">
      <h3 className="title">Mon concert de l'année </h3>
      <p className="date">posté le 18/01/2021</p>
      <p className="name">Megadeth</p>
      <p className="venue">Le Zénith - Paris - France</p>
    </div>
  </article>
);

export default SmallReview;
