// == Npm import
import React from 'react';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
// eslint-disable-next-line import/order
import SmallEvent from './SmallEvent';
import Button from 'src/components/Button';

import { SECONDARY_COLOR } from 'src/styles/vars';

import img from 'src/assets/images/event.png';

import './events.scss';

// == Component
const Events = ({
  loadingEvents,
  events,
  picture,
  showMoreData,
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
              <SmallEvent
                key={event.id}
                {...event}
                picture={picture}
                showData={showMoreData}
              />
            </div>
          ))
        }
      </div>
      {
        moreEvents && (
          <form className="events-more-results" onSubmit={onSubmit}>
            {
              loadingEvents && <ScaleLoader color={SECONDARY_COLOR} />
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
  /** boolean to indicate that the events are loading */
  loadingEvents: PropTypes.bool,
  /** list of event object */
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  /** picture representing the event */
  picture: PropTypes.string,
  /** boolean to indicate if all the event data are displayed or not */
  showMoreData: PropTypes.bool,
  /** boolean to indicate if we still have more events to display */
  moreEvents: PropTypes.bool.isRequired,
  /** called when the form is submitted, no parameter */
  manageSubmit: PropTypes.func,
};

Events.defaultProps = {
  loadingEvents: false,
  picture: img,
  showMoreData: false,
  manageSubmit: null,
};

// == Export
export default Events;
