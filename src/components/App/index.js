// == Import npm
import React from 'react';

// == Import
import Review from 'src/components/Review';
import Reviews from 'src/components/Reviews';
import Event from 'src/components/Event';
import SearchForm from 'src/components/SearchForm';

import data from 'src/datas/searchForm';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Review />
    <Reviews />
    <Event />
    <SearchForm bands={data.bands} countries={data.countries} />
  </div>
);

// == Export
export default App;
