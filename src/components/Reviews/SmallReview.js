// == Npm import
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import 'moment/locale/fr';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// == Import
import {
  getSlug,
  getAbsoluteAvatarPath,
  changeCityName,
  wordWrap,
} from 'src/utils';

import './reviews.scss';

// == Component
const SmallReview = ({
  id,
  title,
  createdAt,
  user,
  event,
  showData,
}) => {
  const location = `/chronique/${getSlug(event.band.name, id)}`;

  const cssClass = classNames('data', {
    'hide-data': !showData,
  });

  return (
    <article className="smallReview">
      <Link
        to={location}
      >
        <span className={cssClass}>
          <h2 className="data-band">{event.band.name}</h2>
          <p className="data-date">le {Moment(event.date).locale('fr').format('DD/MM/YYYY')}</p>
          <p className="data-place">à {changeCityName(event.city)}, {event.country.name}</p>
        </span>
        <div className="review-content">
          <div className="avatar">
            <img
              className="avatar-image"
              src={getAbsoluteAvatarPath(user.avatar)}
              alt={user.nickname}
            />
          </div>
          <div className="content">
            <h3 className="title">{wordWrap(title, 50)} </h3>
            <div className="smallContent">
              <p className="user">
                par <span className="user-nickname">{user.nickname}</span>
              </p>
              <p className="date">
                le {Moment(createdAt).locale('fr').format('DD/MM/YYYY à HH:mm')}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

SmallReview.propTypes = {
  /** number of the id review */
  id: PropTypes.number.isRequired,
  /**  string of the review title */
  title: PropTypes.string.isRequired,
  /** string indicate the creation date of the review */
  createdAt: PropTypes.string.isRequired,
  /** object with the data of the user who created the review */
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }.isRequired).isRequired,
  /** object with the data of the event linked to the review */
  event: PropTypes.shape({
    city: PropTypes.string.isRequired,
    /** object with the data of the country linked to the event */
    country: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }.isRequired).isRequired,
    date: PropTypes.string.isRequired,
    /** object with the data of the band linked to the event */
    band: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }.isRequired).isRequired,
  }.isRequired).isRequired,
  /** bool to indicate if the review has to be display with all his datas */
  showData: PropTypes.bool.isRequired,
};

// == Export
export default SmallReview;
