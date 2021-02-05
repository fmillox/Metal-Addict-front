import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import Reviews from 'src/components/Reviews';

import firstPicture from 'src/assets/images/concert8.jpg';
import secondPicture from 'src/assets/images/concert13.jpg';

import { SECONDARY_COLOR } from 'src/styles/vars';

import './home.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <div className="introduction">
        <div className="introduction-content">
          <h2 className="introduction-content-title">Welcome dear headbanger !</h2>
          <p className="introduction-content-text">
            Ici tu peux répertorier les <span className="introduction-content-text-bold">concerts</span> inoubliables auxquels tu as assistés et partager ton expérience !<br />Ou tout simplement chercher où a tourné ce groupe underground moldave des années 90 dont tout le monde parle (ou pas).
          </p>
          <p className="introduction-content-register">
            Pour t’inscrire ça se passe 
            <Link to="/inscription">
              <span className="introduction-content-register-link">ici</span>
            </Link>
          </p>
        </div>
      </div>

      <div className="firstBlock">
        <div className="firstImage">
          <img src={firstPicture} className="image" alt="" />
        </div>
        <div className="description">
          <p>
            Tu peux désormais partager tes photos de concerts avec les autres metalheads !
          </p>
          <p className="description-text-middle">
            Alors rends-toi tout de suite sur la page de ton dernier concert pour y poster la photo de ton pote qui a encore trop bu et qui est monté sur scène piquer le micro… (on le connait que trop bien)
          </p>
          <p>
          <Link to="/inscription"><span className="description-italic">Inscris-toi </span></Link>pour nous partarger tes meilleurs souvenirs.
          </p>
        </div>
      </div>
      <h2 className="lastReviews">Dernières chroniques</h2>
      {loadingReviews && <ScaleLoader color={SECONDARY_COLOR} />}
      {!loadingReviews && <Reviews reviews={reviews} />}

      <div className="secondBlock">
        <div className="secondImage" data-aos="zoom-out-bottom" data-aos-duration="1500">
          <img src={secondPicture} className="image" alt="" />
        </div>
        <div className="about">
          <p>
            Ce site est l’aboutissement du projet d’apothéose d’Oclock (promo Lyra-PHP) dont l’idée a germé dans la tête de Thomas.<br />
            Il a rapidement été rejoint par Frédéric, Hugo et … Hugo.
          </p>
          <div className="about-team">
            <h3 className="about-team-title">La team :</h3>
            <span className="about-bold">Thomas Lutaster</span> (dév. Front)<br />
            <span className="about-bold">Frédéric Millox</span> (dév. Front)<br />
            <span className="about-bold">Hugo Roy</span> (dév. Back)<br />
            <span className="about-bold">Hugo Drelon</span> (dév. Back)
          </div>
          <p className="about-technology">Ce site a été développé en <span className="about-bold">React</span> et <span className="about-bold">Symfony</span>.</p>
          <p>
            Les données (groupes, concerts, images…) ont été rendues accessibles grâce à l’utilisation des APIs de Musicbrainz.org, Setlist.fm et Fanart.tv.
          </p>
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
