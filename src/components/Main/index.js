import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'src/components/Home';
import Footer from 'src/components/Footer';

import './main.scss';

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/footer">
        <Footer />
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  </div>
);

export default Main;
