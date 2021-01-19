// == Import npm
import React from 'react';

// == Import
import Review from 'src/components/Review';
import Button from 'src/components/Button';
import Reviews from 'src/components/Reviews';
import Event from 'src/components/Event';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Review />
    <Button />
    <Reviews />
    <Event />
  </div>
);

// == Export
export default App;
