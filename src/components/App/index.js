// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import

import Main from 'src/components/Main';
import Login from 'src/components/Login';
import Register from 'src/components/Register';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/connexion">
        <Login />
      </Route>
      <Route exact path="/inscription">
        <Register />
      </Route>
      <Route>
        <Main />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
