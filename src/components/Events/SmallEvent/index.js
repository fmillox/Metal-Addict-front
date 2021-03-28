// == Npm import
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import 'moment/locale/fr';
import classNames from 'classnames';

// == Import
import { getSlug, changeCityName } from 'src/utils';

import './smallEvent.scss';

// == Component
const SmallEvent = ({
  id,
  artist,
  eventDate,
  venue,
  picture,
  showData,
}) => {
  const location = `/evenement/${getSlug(artist.name, id)}`;
  const cssClass = classNames('smallEvent-band-container', {
    'hide-smallEvent-band-container': !showData,
  });
  return (
    <div className="smallEvent">
      <Link
        to={location}
      >
        <div className={cssClass}>
          <span className="smallEvent-band">{artist.name}</span>
        </div>
        <div className="smallEvent-content-container">
          <div className="smallEvent-picture-container">
            <img className="smallEvent-picture" src={picture} alt={artist.name} />
          </div>
          <div className="smallEvent-data-container">
            <div className="smallEvent-date">
              {Moment(eventDate, 'DD-MM-YYYY').locale('fr').format('DD MMMM YYYY')}
            </div>
            <div className="smallEvent-place">
              {venue.name}
            </div>
            <div className="smallEvent-city-country">
              {changeCityName(venue.city.name)} ({venue.city.country.name})
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

SmallEvent.propTypes = {
  /** text used as id */
  id: PropTypes.string.isRequired,
  /** value (object) for the artist */
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }.isRequired).isRequired,
  /** value for the event date */
  eventDate: PropTypes.string.isRequired,
  /** value (object) for the venue */
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }.isRequired).isRequired,
    }.isRequired).isRequired,
  }.isRequired).isRequired,
  /** picture representing the event */
  picture: PropTypes.string.isRequired,
  /** boolean to indicate if all the event data are displayed or not */
  showData: PropTypes.bool.isRequired,
};

// == Export
export default SmallEvent;
