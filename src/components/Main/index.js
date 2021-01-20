import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import EventsResults from 'src/components/EventsResults';

import './main.scss';

const Main = () => (
  <div className="main">
    <Header />
    <EventsResults />
    <Footer />
  </div>
);

export default Main;
