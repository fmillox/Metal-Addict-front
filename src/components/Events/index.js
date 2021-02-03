// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
// eslint-disable-next-line import/order
import SmallEvent from './SmallEvent';
import Button from 'src/components/Button';

import { SECONDARY_COLOR } from 'src/styles/vars';

import img from 'src/assets/images/sigle.png';

import './events.scss';

// == Composant
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
  loadingEvents: PropTypes.bool,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  picture: PropTypes.string,
  showMoreData: PropTypes.bool,
  moreEvents: PropTypes.bool.isRequired,
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
