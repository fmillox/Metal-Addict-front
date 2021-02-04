import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './home.scss';

import { ScaleLoader } from 'react-spinners';

import firstPicture from 'src/assets/images/concert8.jpg';
import secondPicture from 'src/assets/images/concert13.jpg';

import Reviews from 'src/components/Reviews';

import { SECONDARY_COLOR } from 'src/styles/vars';

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
      <div className="introduction">
        <div className="introduction-content">
          <h2 className="introduction-content-title">Welcome dear headbanger !</h2>
          <p className="introduction-content-text">
            Ici tu peux répertorier  les concerts inoubliable auxquels tu as assistés et partager ton expérience !<br />Ou tout simplement chercher où a tourné ce groupe underground moldave des années 90 dont tout le monde parle (ou pas).
          </p>
          <p className="introduction-content-register">
            Pour t’inscrire ça se passe <span className="introduction-content-register-link">ici</span>
          </p>
        </div>
      </div>

      <div className="firstBlock">
        <div className="firstImage">
          <img src={firstPicture} className="image" alt="" />
        </div>
        <div className="description">
          <p>
            Tu peux désormais partager tes photos de concert avec les autres metalheads !
          </p>
          <p className="description-text-middle">
            Alors rend-toi tout de suite sur la page de ton dernier concert pour y poster la photo de ton pote qui a encore trop bu et qui est monté sur scène piquer le micro… (on le connait que trop bien)
          </p>
          <p>
            Inscrivez-vous pour nous partarger vos meilleurs souvenirs.
          </p>
        </div>
      </div>

      <h2 className="lastReviews">Dernières reviews</h2>
      {loadingReviews && <ScaleLoader color={SECONDARY_COLOR} />}
      {!loadingReviews && <Reviews reviews={reviews} />}

      <div className="secondBlock">
        <div className="about" data-aos="fade-down-top" data-aos-duration="1000">
          <p>
            Ce site est l’aboutissement du projet d’apothéose d’Oclock (promo Lyra-PHP) dont l’idée à germée dans la tête de Thomas. Il a rapidement été rejoint par Frédéric, Hugo et … Hugo.
          </p>
          <p>
            La team :
            Thomas Lutaster (dév. Front)
            Frédéric Millox (dév. Front)
            Hugo Roy (dév. Back)
            Hugo Drelon (dév. Back)
          </p>
          <p>
            Topo technique :
            Ce site a été développé en React et Symfony. Les données (groupes, concerts, images…) ont été rendue accessibles grâce à l’utilisation des APIs de Musicbrainz.org, Setlist.fm et Fanart.tv.
          </p>
        </div>
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
