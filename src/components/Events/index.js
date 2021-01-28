// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
// eslint-disable-next-line import/order
import SmallEvent from './SmallEvent';
import Button from 'src/components/Button';

import img from 'src/assets/images/band.jpg';

import './events.scss';

// == Composant
const Events = ({
  loadingEvents,
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
            {
              loadingEvents && <ScaleLoader />
            }
            {
              !loadingEvents && (
                <Button label="Plus de résultats" />
              )
            }
          </form>
        )
      }
    </div>
  );
};

Events.propTypes = {
  loadingEvents: PropTypes.bool,
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
  loadingEvents: false,
  picture: img,
};

// == Export
export default Events;
