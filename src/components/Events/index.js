// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

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
  moreEvents,
  manageSubmit,
}) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    manageSubmit();
  };

  return (
    <div className="events">
      <div className="events-list">
        {
          events.map((event) => (
            <div key={event.id}>
              <SmallEvent key={event.id} {...event} picture={picture} />
            </div>
          ))
        }
      </div>
      {
        moreEvents && (
          <form className="events-more-results" onSubmit={onSubmit}>
            <Button label="Plus de résultats" />
          </form>
        )
      }
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  picture: PropTypes.string,
  moreEvents: PropTypes.bool.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

Events.defaultProps = {
  picture: img,
};

// == Export
export default Events;
