// == Import npm
import React from 'react';

// == Import

import Home from 'src/components/Home';

import picture from 'src/images/concert2.jpg';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app" style={{ backgroundImage: `url({picture})` }}>
    <Home />
  </div>
);

// == Export
export default App;
