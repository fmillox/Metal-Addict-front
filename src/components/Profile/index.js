import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';
import classNames from 'classnames';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

import { getIdFromSlug } from 'src/utils';

import Events from 'src/containers/Events';
import Reviews from 'src/components/Reviews';
import Pictures from 'src/components/Pictures';
import ModifyProfile from 'src/components/Profile/ModifyProfile/ModifyProfile';

import './profile.scss';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

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
  const { slug } = useParams();
  const userId = getIdFromSlug(slug);
  const history = useHistory();
  useEffect(() => {
    loadUserDatas(userId);
  }, []);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

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
      <p onClick={handleToggle}>Modifier mon profil</p>
      {userLoading && <ScaleLoader />}
      {!userLoading && (
        <div className="user">
          <div className="user-identity">
            <div className="user-picture">
              <img src={avatar} alt="" className="picture-content" />
            </div>
            <h2 className="user-nickname">{user.nickname}</h2>
          </div>
          <div className="user-description">{user.biography}</div>
        </div>
      )}

      <div className="user-main-content">
        <div onClick={seeEvents}>Voir les concerts</div>
        <div className={EventsCssClass}>
          {eventsLoading && <ScaleLoader />}
          {eventsLoading && <Events events={userEvents} moreEvents={false} />}
          {(userEvents.length === 0) && <p>Aucun événement ajouté</p>}
        </div>
        <div onClick={seeReviews}>Voir les chroniques</div>
        <div className={ReviewsCssClass}>
          {reviewsLoading && <ScaleLoader />}
          {!reviewsLoading && <Reviews reviews={userReviews} />}
          {(userReviews.length === 0) && <p>Aucune chronique ajoutée</p>}
        </div>
        <div onClick={seePictures}>Voir les photos</div>
        <div className={PicturesCssClass}>
          {picturesLoading && <ScaleLoader />}
          {!picturesLoading && <Pictures pictures={userPictures} picturesOnScreen={8} />}
          {(userPictures.length === 0) && <p>Aucune photo ajoutée</p>}
        </div>
      </div>

      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <ModifyProfile />
      </Backdrop>
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
