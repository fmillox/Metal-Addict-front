// == Import npm
import React from 'react';

// == Import
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Review from 'src/components/Review';
import Button from 'src/components/Button';
import Reviews from 'src/components/Reviews';
import Event from 'src/components/Event';
import TextFieldInput from 'src/components/TextFieldInput';


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
