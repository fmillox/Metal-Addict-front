import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';

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

  return (
    <div className="profile">
      <a className="review-back-to-reviews-results" onClick={handleOnClick}>
        Retour à la page précédente
      </a>
      {userLoading && <ScaleLoader />}
      {!userLoading && (
        <div className="user">
          <img src={avatar} alt="" className="user-picture" />
          <h2 className="user-nickname">Jojo</h2>
          <div className="user-description">Je suis jojo le bargeot</div>
        </div>
      )}
      {eventsLoading && <ScaleLoader />}
      {eventsLoading && <Events events={userEvents} />}
      {reviewsLoading && <ScaleLoader />}
      {!reviewsLoading && <Reviews reviews={userReviews} />}
      {picturesLoading && <ScaleLoader />}
      {!picturesLoading && <Pictures pictures={userPictures} picturesOnScreen={8} />}
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
};

export default Profile;
