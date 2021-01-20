// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SmallEvent from 'src/components/SmallEvent';

import './events.scss';

// == Composant
const Events = ({ events, picture }) => (
  <div className="events">
    {
      events.map((event) => (
        <div key={event.id}>
          <SmallEvent key={event.id} {...event} picture={picture} />
        </div>
      ))
    }
  </div>
);

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  picture: PropTypes.string.isRequired,
};

// == Export
export default Events;
