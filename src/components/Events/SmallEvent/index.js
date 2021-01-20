// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './smallEvent.scss';

// == Composant
const SmallEvent = ({
  artist,
  eventDate,
  venue,
  picture,
}) => (
  <div className="smallEvent">
    <div className="smallEvent-picture-container">
      <img className="smallEvent-picture" src={picture} alt={artist.name} />
    </div>
    <div className="smallEvent-content-container">
      <div className="smallEvent-band">
        {artist.name}
      </div>
      <div className="smallEvent-date">
        {eventDate}
      </div>
      <div className="smallEvent-place">
        {venue.name}
      </div>
      <div className="smallEvent-city-country">
        {venue.city.name} - {venue.city.country.name}
      </div>
    </div>
  </div>
);

SmallEvent.propTypes = {
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
