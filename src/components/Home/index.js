import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Reviews from 'src/components/Reviews';

import { SECONDARY_COLOR } from 'src/styles/vars';

import firstPicture from 'src/images/concert8.jpg';
import secondPicture from 'src/images/concert13.jpg';

import './home.scss';

AOS.init();

const Home = ({
  reviews,
  loadingReviews,
  loadReviews,
}) => {
  const history = useHistory();

  useEffect(() => {
    loadReviews(history);
  }, []);

  return (
    <div className="home">
      <div className="news">
        <p className="news-content">Nouvelle fonctionnalité : ajouter vos photos!!</p>
      </div>

      <div className="firstBlock">
        <div className="introduction" data-aos="fade-up-bottom">
          <p>Revivez vos meilleurs concerts grâce aux photos et reviews postées.</p>
          <p>Inscrivez-vous pour nous partarger vos meilleurs souvenirs.</p>
        </div>
        <div className="firstImage" data-aos="fade-up-top" data-aos-duration="1000">
          <img src={firstPicture} className="image" alt="" />
        </div>
      </div>
      <h2 className="lastReviews">Dernières chroniques</h2>
      {loadingReviews && <ScaleLoader color={SECONDARY_COLOR} />}
      {!loadingReviews && <Reviews reviews={reviews} />}

      <div className="secondBlock">
        <div className="about" data-aos="fade-down-top" data-aos-duration="1000">About</div>
        <div className="secondImage" data-aos="zoom-out-bottom" data-aos-duration="1500">
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
