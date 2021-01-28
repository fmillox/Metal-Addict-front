import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';
import classNames from 'classnames';

import { getIdFromSlug } from 'src/utils';

import Events from 'src/containers/Events';
import Reviews from 'src/components/Reviews';
import Pictures from 'src/components/Pictures';

import './profile.scss';

const Profile = ({
  avatar,
  user,
  userEvents,
  userReviews,
  userPictures,
  loadUserDatas,
  eventsLoading,
  reviewsLoading,
  picturesLoading,
  userLoading,
  seeEvents,
  seeReviews,
  seePictures,
  showEvents,
  showReviews,
  showPictures,
}) => {
  // const { slug } = useParams();
  // const userId = getIdFromSlug(slug);
  const history = useHistory();
  /*useEffect(() => {
    loadUserDatas(userId);
  }, []);*/

  const handleOnClick = () => {
    history.goBack();
  };

  const EventsCssClass = classNames('eventsNoShow', {
    'eventsShow': showEvents,
  });

  const ReviewsCssClass = classNames('reviewsNoShow', {
    'reviewsShow': showReviews,
  });

  const PicturesCssClass = classNames('picturesNoShow', {
    'picturesShow': showPictures,
  });

  return (
    <div className="profile">
      <a className="review-back-to-reviews-results" onClick={handleOnClick}>
        Retour à la page précédente
      </a>
      {userLoading && <ScaleLoader />}
      {!userLoading && (
        <div className="user">
          <div className="user-identity">
            <div className="user-picture">
              <img src={avatar} alt="" className="picture-content" />
            </div>
            <h2 className="user-nickname">Jojo le bargeot</h2>
          </div>
          <div className="user-description">Je suis jojo le bargeot La journée fut longue, le lendemain! Elle se plaignit avec amertume d'un tel bonheur, elle y pleura comme un roi! Ah! n'importe, vieux farceur! tu ne me servirai! Tout a son importance dans les.</div>
        </div>
      )}

      <div className="user-main-content">
        <div onClick={seeEvents}>Voir les concerts</div>
        <div className={EventsCssClass}>
          {eventsLoading && <ScaleLoader />}
          {eventsLoading && <Events events={userEvents} />}
        </div>
        <div onClick={seeReviews}>Voir les chroniques</div>
        <div className={ReviewsCssClass}>
          {reviewsLoading && <ScaleLoader />}
          {!reviewsLoading && <Reviews reviews={userReviews} />}
        </div>
        <div onClick={seePictures}>Voir les photos</div>
        <div className={PicturesCssClass}>
          {picturesLoading && <ScaleLoader />}
          {!picturesLoading && <Pictures pictures={userPictures} picturesOnScreen={8} />}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  userEvents: PropTypes.array.isRequired,
  userReviews: PropTypes.array.isRequired,
  userPictures: PropTypes.array.isRequired,
  loadUserDatas: PropTypes.func.isRequired,
  eventsLoading: PropTypes.bool.isRequired,
  reviewsLoading: PropTypes.bool.isRequired,
  picturesLoading: PropTypes.bool.isRequired,
  userLoading: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  seeEvents: PropTypes.func.isRequired,
  seeReviews: PropTypes.func.isRequired,
  seePictures: PropTypes.func.isRequired,
  showEvents: PropTypes.bool.isRequired,
  showReviews: PropTypes.bool.isRequired,
  showPictures: PropTypes.bool.isRequired,
};

export default Profile;
