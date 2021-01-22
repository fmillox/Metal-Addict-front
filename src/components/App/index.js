// == Import npm
import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

// == Import
import Page from 'src/components/Page';
import Login from 'src/components/Login';
import Register from 'src/components/Register';

import './styles.scss';

// == Composant
const App = () => {
  axios.defaults.baseURL = 'http://ec2-54-162-156-51.compute-1.amazonaws.com/Share-O-Metal/public/api';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  return (
    <div className="app">
      <Switch>
        <Route exact path="/connexion">
          <Login />
        </Route>
        <Route exact path="/inscription">
          <Register />
        </Route>
        <Route>
          <Page />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;
