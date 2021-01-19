import React from 'react';

import './home.scss';

import { ArrowLeft, ArrowRight } from 'react-feather';

import firstPicture from 'src/images/concert5.jpg';
import dave from 'src/images/dave.jpg';

import Reviews from 'src/components/Reviews';

const Home = () => (
  <div className="home">
    <header className="header">
      <h1>Share O Metal</h1>
      <div className="image"><img src={dave} className="image-content" alt="" /></div>
    </header>
    <div className="introduction">
      Welcome !! Prepare to share your reviews and pictures of your best concerts
    </div>
    <div className="news">
      <ArrowLeft />
      <p className="news-content">Nouvelle fonctionnalité : ajouter vos photos!!</p>
      <ArrowRight />
    </div>
    <div className="firstImage">
      <img src={firstPicture} className="image" alt="" />
    </div>
    <div className="description"> Ecrivez vos reviews</div>
    <h2 className="lastReviews">Dernières reviews</h2>
    <Reviews />
    <div className="about">About</div>
    <div className="firstImage">
      <img src={firstPicture} className="image" alt="" />
    </div>
    <div className="footer">Footer</div>
  </div>
);

export default Home;
