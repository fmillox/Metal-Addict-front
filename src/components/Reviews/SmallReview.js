import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import { getSlug, getAbsoluteAvatarPath } from 'src/utils';

import './reviews.scss';

AOS.init();

const SmallReview = ({
  id,
  title,
  createdAt,
  user,
  event,
}) => {
  // eslint-disable-next-line prefer-template
  const location = '/chronique/' + getSlug(event.band.name, id);

  return (
    <article
      className="smallReview"
      data-aos="flip-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="avatar"><img src={getAbsoluteAvatarPath(user.avatar)} className="avatar-image" alt="" /></div>
      <Link
        className="title"
        to={location}
      >
        <div className="content">
          <h3 className="title">{title} </h3>
          <p className="date">
            posté le {Moment(createdAt).locale('fr').format('L')}
          </p>
          <p className="name">{event.band.name}</p>
          <p className="venue">{event.venue} - {event.city} - {event.country.name}</p>
        </div>
      </Link>
    </article>
  );
};

SmallReview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
  }.isRequired).isRequired,
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
