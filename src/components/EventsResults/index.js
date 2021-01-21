// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
import SearchForm from 'src/components/SearchForm';
import Events from 'src/components/Events';

import { isObjectValid } from 'src/utils';

import searchForm from 'src/datas/searchForm';

import './eventsResults.scss';

// == Composant
const EventsResults = ({
  loadingEvents,
  events,
  moreEvents,
  manageMoreEventsSubmit,
}) => {
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

  const history = useHistory();

  useEffect(() => {
    if (events === null) {
      history.push('/');
    }
  }, []);

  console.log(events);

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
        {
          loadingEvents && <ScaleLoader />
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
    </div>
  );
};

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
