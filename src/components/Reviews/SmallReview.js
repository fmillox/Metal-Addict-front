import React from 'react';
import PropTypes from 'prop-types';

import './reviews.scss';

import dave from 'src/images/dave.jpg';
import Moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const SmallReview = ({
  title,
  createdAt,
  event,
}) => (
  <article
    className="smallReview"
    data-aos="zoom-in"
    data-aos-easing="linear"
    data-aos-duration="1000"
  >
    <div className="avatar"><img src={dave} className="avatar-image" alt="" /></div>
    <div className="content">
      <h3 className="title">{title} </h3>
      <p className="date">posté le {Moment(createdAt).locale('fr').format('L')}
      </p>
      <p className="name">{event.band.name}</p>
      <p className="venue">{event.venue} - {event.city} - {event.country.name}</p>
    </div>
  </article>
);

SmallReview.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  event: PropTypes.shape({
    venue: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    band: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }.isRequired).isRequired,
  }.isRequired).isRequired,
};

export default SmallReview;
