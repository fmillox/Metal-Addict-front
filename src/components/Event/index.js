import React from 'react';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

import Reviews from 'src/components/Reviews';

import { getUnifiedSetList } from 'src/utils';

import img from 'src/datas/band.jpg';

import './event.scss';

const Event = ({
  artist,
  eventDate,
  venue,
  sets,
  picture,
  loadingReviews,
  reviews,
}) => (
  <div className="event">
    <div className="event-band">
      {artist.name}
    </div>
    <div className="event-band-img-container">
      <img className="event-band-img" src={picture} alt={artist.name} />
    </div>
    <div className="event-date">
      {eventDate}
    </div>
    <div className="event-venue">
      {venue.name}
    </div>
    <div className="event-city-country">
      {venue.city.name} - {venue.city.country.name}
    </div>
    <div className="event-setlist-container">
      <div className="event-setlist-label">
        Liste des chansons
      </div>
      <ul className="event-setlist-list">
        {
          getUnifiedSetList(sets.set).map(({ numb, name }) => <li className="event-setlist-list-item" key={numb}>{numb} - {name}</li>)
        }
      </ul>
    </div>
    {
      loadingReviews && <ScaleLoader />
    }
    {
      !loadingReviews && (
        <div className="event-reviews-container">
          <div className="event-reviews-label">
            Chroniques
          </div>
          <div className="event-reviews-list">
            <Reviews reviews={reviews} />
          </div>
        </div>
      )
    }
  </div>
);

Event.propTypes = {
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
  sets: PropTypes.shape({
    set: PropTypes.arrayOf(
      PropTypes.shape({
        song: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
          }.isRequired).isRequired,
        ).isRequired,
      }.isRequired).isRequired,
    ).isRequired,
  }.isRequired).isRequired,
  picture: PropTypes.string,
  loadingReviews: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Event.defaultProps = {
  picture: img,
};

export default Event;
