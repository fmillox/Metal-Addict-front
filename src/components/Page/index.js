// == Npm import
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Main from 'src/containers/Main';
import Event from 'src/containers/Event';
import ReviewCreate from 'src/containers/ReviewCreate';
import ReviewEdit from 'src/containers/ReviewEdit';
import Review from 'src/containers/Review';
import ProfileEdit from 'src/containers/ProfileEdit';
import Profile from 'src/containers/Profile';
import Error from 'src/components/Error';
import NotFound from 'src/components/NotFound';

import './page.scss';

const Page = () => (
  <div className="page">
    <Header />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/evenement/:slug">
        <Event />
      </Route>
      <Route path="/chronique/creer/:slug">
        <ReviewCreate />
      </Route>
      <Route path="/chronique/editer/:slug">
        <ReviewEdit />
      </Route>
      <Route path="/chronique/:slug">
        <Review />
      </Route>
      <Route path="/utilisateur/editer/:slug">
        <ProfileEdit />
      </Route>
      <Route path="/utilisateur/:slug">
        <Profile />
      </Route>
      <Route exact path="/erreur">
        <Error />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default Page;
