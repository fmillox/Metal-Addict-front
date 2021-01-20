// == Import npm
import React from 'react';

// == Import
import Events from 'src/components/Events';

import data from 'src/datas/events';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Events events={data.setlist} picture={data.picture} />
  </div>
);

// == Export
export default App;
