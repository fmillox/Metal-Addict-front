// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
// eslint-disable-next-line import/order
import SmallEvent from './SmallEvent';
import Button from 'src/components/Button';

import img from 'src/datas/band.jpg';

import './events.scss';

// == Composant
const Events = ({
  events,
  picture,
  loadingEvents,
  moreEvents,
  manageSubmit,
}) => (
  <div className="events">
    {
      loadingEvents && <ScaleLoader />
    }
    <div className="events-list">
      {
        !loadingEvents && events.map((event) => (
          <div key={event.id}>
            <SmallEvent key={event.id} {...event} picture={picture} />
          </div>
        ))
      }
    </div>
    {
      !loadingEvents && moreEvents && (
        <form className="events-more-results" onSubmit={manageSubmit}>
          <Button label="Plus de résultats" />
        </form>
      )
    }
  </div>
);

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  picture: PropTypes.string,
  loadingEvents: PropTypes.bool.isRequired,
  moreEvents: PropTypes.bool.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

Events.defaultProps = {
  picture: img,
};

// == Export
export default Events;
