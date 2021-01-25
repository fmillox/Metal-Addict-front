import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import './reviews.scss';

import { getSlug } from 'src/utils';

import dave from 'src/images/dave.jpg';
import Moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const SmallReview = ({
  id,
  title,
  createdAt,
  event,
  setBackLink,
}) => {
  // eslint-disable-next-line prefer-template
  const nextLocation = '/chronique/' + getSlug(event.band.name, id);
  const history = useHistory();
  const currentLocation = useLocation();

  const handleOnClick = () => {
    setBackLink(currentLocation);
    // console.log(currentLocation);
    history.push(nextLocation);
  };

  return (
    <article
      className="smallReview"
      data-aos="flip-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="avatar"><img src={dave} className="avatar-image" alt="" /></div>
      <a
        className="title"
        onClick={handleOnClick}
      >
        <div className="content">
          <h3 className="title">{title} </h3>
          <p className="date">posté le {Moment(createdAt).locale('fr').format('L')}
          </p>
          <p className="name">{event.band.name}</p>
          <p className="venue">{event.venue} - {event.city} - {event.country.name}</p>
        </div>
      </a>
    </article>
  );
};

SmallReview.propTypes = {
  id: PropTypes.number.isRequired,
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
  setBackLink: PropTypes.func.isRequired,
};

export default SmallReview;
