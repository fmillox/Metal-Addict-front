// == Import npm
import React from 'react';

// == Import
import SmallEvent from 'src/components/SmallEvent';

import data from 'src/datas/smallEvent';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <SmallEvent
      band={data.band}
      date={data.date}
      place={data.place}
      city={data.city}
      country={data.country}
      picture={data.picture}
    />
  </div>
);

// == Export
export default App;
