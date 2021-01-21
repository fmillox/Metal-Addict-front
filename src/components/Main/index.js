import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'src/containers/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import EventsResults from 'src/components/EventsResults';
import Event from 'src/components/Event';
import CreateReview from 'src/components/CreateReview';
import Review from 'src/components/Review';
import Profile from 'src/components/Profile';
import NotFound from 'src/components/NotFound';

import './main.scss';

const Main = () => (
  <div className="main">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/evenements">
        <EventsResults />
      </Route>
      <Route path="/evenement/:slug">
        <Event />
      </Route>
      <Route path="/chronique/ajouter/:slug">
        <CreateReview />
      </Route>
      <Route path="/chronique/:slug">
        <Review />
      </Route>
      <Route exact path="/utilisateur">
        <Profile />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default Main;
