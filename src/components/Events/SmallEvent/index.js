// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import { getSlug, changeCityName } from 'src/utils';

import './smallEvent.scss';

// == Composant
const SmallEvent = ({
  id,
  artist,
  eventDate,
  venue,
  picture,
}) => {
  // eslint-disable-next-line prefer-template
  const location = '/evenement/' + getSlug(artist.name, id);

  return (
    <div className="smallEvent">
      <div className="smallEvent-picture-container">
        <img className="smallEvent-picture" src={picture} alt={artist.name} />
      </div>
      <div className="smallEvent-content-container">
        <NavLink
          className="smallEvent-band"
          to={location}
        >
          {artist.name}
        </NavLink>
        <div className="smallEvent-date">
          {eventDate}
        </div>
        <div className="smallEvent-place">
          {venue.name}
        </div>
        <div className="smallEvent-city-country">
          {changeCityName(venue.city.name)} - {venue.city.country.name}
        </div>
      </div>
    </div>
  );
};

SmallEvent.propTypes = {
  id: PropTypes.string.isRequired,
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }.isRequired).isRequired,
  eventDate: PropTypes.string.isRequired,
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }.isRequired).isRequired,
    }.isRequired).isRequired,
  }.isRequired).isRequired,
  picture: PropTypes.string.isRequired,
};

// == Export
export default SmallEvent;
