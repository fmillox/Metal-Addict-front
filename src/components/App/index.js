// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import

import Main from 'src/components/Main';
import Header from 'src/components/Header';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/header">
        <Header />
      </Route>
      <Route>
        <Main />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
