// == Import npm
import React from 'react';

// == Import
import Review from 'src/components/Review';
import Reviews from 'src/components/Reviews';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Review />
    <Reviews />
  </div>
);

// == Export
export default App;
