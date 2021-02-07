// == Import npm
import React, { useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, useLocation } from 'react-router-dom';

// == Import
import Page from 'src/components/Page';
import Login from 'src/containers/Login';
import RegisterUser from 'src/containers/RegisterUser';

import './styles.scss';

// == Composant
const App = () => {
  axios.defaults.baseURL = 'http://ec2-3-80-87-102.compute-1.amazonaws.com/Share-O-Metal/public/api';

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/connexion">
          <Login />
        </Route>
        <Route exact path="/inscription">
          <RegisterUser />
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
