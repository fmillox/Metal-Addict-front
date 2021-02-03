import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';
import classNames from 'classnames';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowLeft } from 'react-feather';
import { getIdFromSlug, getAbsoluteAvatarPath } from 'src/utils';

import Events from 'src/containers/Events';
import Reviews from 'src/components/Reviews';
import Pictures from 'src/components/Pictures';
import ModifyProfile from 'src/components/Profile/ModifyProfile/ModifyProfile';
import UploadPicture from 'src/components/UploadPicture';

import { SECONDARY_COLOR } from 'src/styles/vars';

import './profile.scss';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Profile = ({
  loadingUploadAvatar,
  manageUploadAvatar,
  user,
  isConnectedUser,
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
    loadUserDatas(userId, history);
  }, []);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  /*
  const handleToggle = () => {
    setOpen(!open);
  };
  */

  const handleOnClick = () => {
    history.goBack();
  };

  const EventsCssClass = classNames('eventsNoShow', {
    eventsShow: showEvents,
  });

  const ReviewsCssClass = classNames('reviewsNoShow', {
    reviewsShow: showReviews,
  });

  const PicturesCssClass = classNames('picturesNoShow', {
    picturesShow: showPictures,
  });

  return (
    <div className="profile">
      <a className="review-back-to-reviews-results" onClick={handleOnClick}>
        <ArrowLeft />
      </a>
      { /* isConnectedUser && <p onClick={handleToggle}>Modifier mon profil</p> */ }
      {userLoading && <ScaleLoader color={SECONDARY_COLOR} />}
      {!userLoading && (
        <div className="user">
          <div className="user-identity">
            <div className="avatar">
              <div className="user-picture">
                {
                  user.avatar !== undefined && <img src={getAbsoluteAvatarPath(user.avatar)} alt="" className="picture-content" />
                }
              </div>
              {
              isConnectedUser && (
                <UploadPicture
                  className="upload-avatar"
                  loading={loadingUploadAvatar}
                  manageSubmit={manageUploadAvatar}
                />
              )
              }
            </div>
            <h2 className="user-nickname">{user.nickname}</h2>
          </div>
          <div className="user-description">{user.biography}</div>
        </div>
      )}

      <div className="user-main-content">
        <div onClick={seeEvents} className="label-events">Voir les concerts ({userEvents.length})</div>
        <div className={EventsCssClass}>
          {eventsLoading && <ScaleLoader color={SECONDARY_COLOR} />}
          {!eventsLoading && <Events events={userEvents} moreEvents={false} showMoreData />}
        </div>
        <div onClick={seeReviews} className="label-reviews">Voir les chroniques ({userReviews.length})</div>
        <div className={ReviewsCssClass}>
          {reviewsLoading && <ScaleLoader color={SECONDARY_COLOR} />}
          {!reviewsLoading && <Reviews reviews={userReviews} />}
        </div>
        <div onClick={seePictures} className="label-pictures">Voir les photos ({userPictures.length})</div>
        <div className={PicturesCssClass}>
          {picturesLoading && <ScaleLoader color={SECONDARY_COLOR} />}
          {!picturesLoading && <Pictures pictures={userPictures} picturesOnScreen={8} />}
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
  loadingUploadAvatar: PropTypes.bool.isRequired,
  manageUploadAvatar: PropTypes.func.isRequired,
  userEvents: PropTypes.array.isRequired,
  userReviews: PropTypes.array.isRequired,
  userPictures: PropTypes.array.isRequired,
  loadUserDatas: PropTypes.func.isRequired,
  eventsLoading: PropTypes.bool.isRequired,
  reviewsLoading: PropTypes.bool.isRequired,
  picturesLoading: PropTypes.bool.isRequired,
  userLoading: PropTypes.bool.isRequired,
  seeEvents: PropTypes.func.isRequired,
  seeReviews: PropTypes.func.isRequired,
  seePictures: PropTypes.func.isRequired,
  showEvents: PropTypes.bool.isRequired,
  showReviews: PropTypes.bool.isRequired,
  showPictures: PropTypes.bool.isRequired,
  isConnectedUser: PropTypes.bool.isRequired,
};

export default Profile;
