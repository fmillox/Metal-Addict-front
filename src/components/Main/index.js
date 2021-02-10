// == Npm import
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SearchForm from 'src/containers/SearchForm';
import Home from 'src/containers/Home';
import EventsResults from 'src/containers/EventsResults';

import './main.scss';

// == Component
const Main = ({ showEventsResults }) => (
  <div className="main">
    <div className="main-searchForm">
      <SearchForm />
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
  /** boolean to display or nor the search results */
  showEventsResults: PropTypes.bool.isRequired,
};

// == Export
export default Main;
