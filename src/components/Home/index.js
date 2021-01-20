import React from 'react';

import './home.scss';

import { ArrowLeft, ArrowRight } from 'react-feather';

import firstPicture from 'src/images/concert5.jpg';
import secondPicture from 'src/images/concert3.jpg';

import Reviews from 'src/components/Reviews';
import Header from 'src/components/Header';
import Footer from 'src/components//Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => (
  <div className="home">
    <Header />
    <div className="introduction">
      <p data-aos="fade-right">Welcome !! Prepare to share your reviews and pictures of your best concerts</p>
    </div>
    <div className="news">
      <ArrowLeft />
      <p className="news-content">Nouvelle fonctionnalité : ajouter vos photos!!</p>
      <ArrowRight />
    </div>
    <div className="firstImage" data-aos="fade-up-left" data-aos-duration="1000">
      <img src={firstPicture} className="image" alt="" />
    </div>
    <div className="description"> <p data-aos="fade-left">Ecrivez vos reviews</p></div>
    <h2 className="lastReviews">Dernières reviews</h2>
    <Reviews />
    <div className="about">About</div>
    <div className="firstImage" data-aos="fade-up-left" data-aos-duration="1000">
      <img src={secondPicture} className="image" alt="" />
    </div>
    <Footer />
  </div>
);

export default Home;
