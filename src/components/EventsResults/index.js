// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SearchForm from 'src/components/SearchForm';
import Events from 'src/components/Events';

import searchForm from 'src/datas/searchForm';
import events from 'src/datas/events';

import './eventsResults.scss';

// TODO : DELETE AFTER TEST
const onSubmit = (evt) => {
  evt.preventDefault();
};
//

// == Composant
const EventsResults = ({ loadingEvents, moreEvents, manageMoreEventsSubmit }) => (
  <div className="eventsResults">
    <div className="eventsResults-searchForm">
      <SearchForm bands={searchForm.bands} countries={searchForm.countries} showOpenButton />
    </div>
    <div className="eventsResults-container-events">
      <div className="eventsResults-nb-events-found">{events.total} résultat(s) trouvé(s)</div>
      <div className="eventsResults-events">
        <Events
          events={events.setlist}
          loadingEvents={loadingEvents}
          moreEvents={moreEvents}
          manageSubmit={manageMoreEventsSubmit}
        />
      </div>
    </div>
  </div>
);

EventsResults.propTypes = {
  loadingEvents: PropTypes.bool, // .isRequired
  moreEvents: PropTypes.bool, // .isRequired
  manageMoreEventsSubmit: PropTypes.func, // .isRequired
};

// TODO : DELETE AFTER TEST
EventsResults.defaultProps = {
  loadingEvents: false,
  moreEvents: true,
  manageMoreEventsSubmit: onSubmit,
};
//

// == Export
export default EventsResults;
