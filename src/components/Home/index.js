import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './home.scss';

import { ArrowLeft, ArrowRight } from 'react-feather';
import { ScaleLoader } from 'react-spinners';

import firstPicture from 'src/images/concert5.jpg';
import secondPicture from 'src/images/concert3.jpg';

import Reviews from 'src/components/Reviews';
import SearchForm from 'src/containers/SearchForm';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = ({
  reviews,
  loadingReviews,
  loadingSearchForm,
  loadSearchForm,
  loadReviews,
}) => {
  useEffect(() => {
    loadSearchForm();
  }, []);

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div className="home">
      {loadingSearchForm && <ScaleLoader />}
      {!loadingSearchForm && (
        <div className="form">
          <SearchForm />
        </div>
      )}
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
      {loadingReviews && <ScaleLoader />}
      {!loadingReviews && <Reviews reviews={reviews} />}
      <div className="about">About</div>
      <div className="firstImage" data-aos="fade-up-left" data-aos-duration="1000">
        <img src={secondPicture} className="image" alt="" />
      </div>
    </div>
  );
};

Home.propTypes = {
  reviews: PropTypes.array.isRequired,
  loadingReviews: PropTypes.bool.isRequired,
  loadingSearchForm: PropTypes.bool.isRequired,
  loadSearchForm: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
};

export default Home;
