// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
import Events from 'src/containers/Events';

import { SECONDARY_COLOR } from 'src/styles/vars';

import './eventsResults.scss';

// == Composant
const EventsResults = ({
  loadingEvents,
  events,
  moreEvents,
  manageMoreEventsSubmit,
}) => (
  <div className="eventsResults">
    {
      loadingEvents && <ScaleLoader color={SECONDARY_COLOR} />
    }
    {
      !loadingEvents && (
        <>
          <div className="eventsResults-nb-events-found">
            {events.total} résultat(s) trouvé(s)
          </div>
          <div className="eventsResults-events">
            <Events
              events={events.setlist}
              loadingEvents={loadingEvents}
              moreEvents={moreEvents}
              manageSubmit={manageMoreEventsSubmit}
            />
          </div>
        </>
      )
    }
  </div>
);

EventsResults.propTypes = {
  loadingEvents: PropTypes.bool.isRequired,
  events: PropTypes.object,
  moreEvents: PropTypes.bool.isRequired,
  manageMoreEventsSubmit: PropTypes.func.isRequired,
};

EventsResults.defaultProps = {
  events: null,
};

// == Export
export default EventsResults;
