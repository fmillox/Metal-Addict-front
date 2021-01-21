// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import SearchForm from 'src/components/SearchForm';
import Events from 'src/components/Events';

import { isObjectValid } from 'src/utils';

import searchForm from 'src/datas/searchForm';
import events from 'src/datas/events';

import './eventsResults.scss';

// TODO : DELETE AFTER TEST
const onSubmit = (evt) => {
  evt.preventDefault();
};
//

// == Composant
const EventsResults = ({ loadingEvents, moreEvents, manageMoreEventsSubmit }) => {
  // TODO : DELETE AFTER TEST
  const [band, setBand] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState('');
  const [year, setYear] = useState(null);
  const [eventPlace, setEventPlace] = useState('');

  const manageSubmit = (evt) => {
    evt.preventDefault();
    if (!isObjectValid(band)) setBand(null);
    if (!isObjectValid(country)) setCountry(null);
    if (!isObjectValid(year)) setYear(null);
  };
  //

  return (
    <div className="eventsResults">
      <div className="eventsResults-searchForm">
        <SearchForm
          bands={searchForm.bands}
          countries={searchForm.countries}
          showOpenButton
          band={band}
          country={country}
          city={city}
          year={year}
          eventPlace={eventPlace}
          setBand={setBand}
          setCountry={setCountry}
          setCity={setCity}
          setYear={setYear}
          setEventPlace={setEventPlace}
          manageSubmit={manageSubmit}
        />
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
};

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
