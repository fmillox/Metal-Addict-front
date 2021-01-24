// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SearchForm from 'src/containers/SearchForm';
import Home from 'src/containers/Home';
import EventsResults from 'src/containers/EventsResults';

import './main.scss';

// == Composant
const Main = ({ showEventsResults }) => (
  <div className="main">
    <div className="main-searchForm">
      <SearchForm showOpenButton={showEventsResults} />
    </div>
    {
      !showEventsResults && (
        <div className="main-home">
          <Home />
        </div>
      )
    }
    {
      showEventsResults && (
        <div className="main-eventsResults">
          <EventsResults />
        </div>
      )
    }
  </div>
);

Main.propTypes = {
  showEventsResults: PropTypes.bool.isRequired,
};

// == Export
export default Main;
