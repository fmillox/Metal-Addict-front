import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './home.scss';

import { ArrowLeft, ArrowRight } from 'react-feather';
import { ScaleLoader } from 'react-spinners';

import firstPicture from 'src/images/concert5.jpg';
import secondPicture from 'src/images/concert3.jpg';

import Reviews from 'src/components/Reviews';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = ({
  reviews,
  loadingReviews,
  loadReviews,
}) => {
  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div className="home">
      <div className="news">
        <ArrowLeft />
        <p className="news-content">Nouvelle fonctionnalité : ajouter vos photos!!</p>
        <ArrowRight />
      </div>

      <div className="firstBlock">
        <div className="introduction" data-aos="fade-up-right">
          <p>Revivez vos meilleurs concerts grâce aux photos et reviews postées.</p>
          <p>Inscrivez-vous pour nous partarger vos meilleurs souvenirs.</p>
        </div>
        <div className="firstImage" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={firstPicture} className="image" alt="" />
        </div>
      </div>

      <div className="description"> <p data-aos="fade-left" data-aos-duration="500">Quis omnis cum ut veritatis sit iste architecto aut libero ipsum repellendus</p></div>

      <h2 className="lastReviews">Dernières reviews</h2>
      {loadingReviews && <ScaleLoader />}
      {!loadingReviews && <Reviews reviews={reviews} />}

      <div className="secondBlock">
        <div className="about" data-aos="fade-down-left" data-aos-duration="1000">About</div>
        <div className="secondImage" data-aos="zoom-out-left" data-aos-duration="1500">
          <img src={secondPicture} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  reviews: PropTypes.array.isRequired,
  loadingReviews: PropTypes.bool.isRequired,
  loadReviews: PropTypes.func.isRequired,
};

export default Home;
