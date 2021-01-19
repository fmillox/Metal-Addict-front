// == Import npm
import React from 'react';

// == Import
import Review from 'src/components/Review';
import Button from 'src/components/Button';
import Reviews from 'src/components/Reviews';
import TextFieldInput from 'src/components/TextFieldInput';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Review />
    <Button />
    <Reviews />
    <TextFieldInput />
  </div>
);

// == Export
export default App;
