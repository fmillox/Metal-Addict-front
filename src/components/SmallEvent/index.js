// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './smallEvent.scss';

// == Composant
const SmallEvent = ({
  band,
  date,
  place,
  city,
  country,
  picture,
}) => (
  <div className="smallEvent">
    <div className="smallEvent-picture-container">
      <img className="smallEvent-picture" src={picture} alt={band} />
    </div>
    <div className="smallEvent-content-container">
      <div className="smallEvent-band">
        {band}
      </div>
      <div className="smallEvent-date">
        {date}
      </div>
      <div className="smallEvent-place">
        {place}
      </div>
      <div className="smallEvent-city">
        {city}
      </div>
      <div className="smallEvent-country">
        {country}
      </div>
    </div>
  </div>
);

SmallEvent.propTypes = {
  band: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

// == Export
export default SmallEvent;
