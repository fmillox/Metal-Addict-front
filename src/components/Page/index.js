import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/containers/Main';
import Event from 'src/components/Event';
import CreateReview from 'src/components/CreateReview';
import Review from 'src/components/Review';
import Profile from 'src/components/Profile';
import NotFound from 'src/components/NotFound';

import events from 'src/datas/events';
import reviews from 'src/datas/reviews';

import './page.scss';

const Page = () => (
  <div className="page">
    <Header />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/evenement/:slug">
        <Event {...events.setlist[0]} loadingReviews={false} reviews={reviews} />
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

export default Page;
