// == Import npm
import React from 'react';

// == Import
import Review from 'src/components/Review';
import Button from 'src/components/Button';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Review />
    <Button />
  </div>
);

// == Export
export default App;
