import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  useParams,
  useHistory,
  Link,
} from 'react-router-dom';
import { Edit, Trash2 } from 'react-feather';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Moment from 'moment';

import UploadPicture from 'src/components/UploadPicture';
import Pictures from 'src/components/Pictures';
import { Back } from 'src/components/Icons';

import { SECONDARY_COLOR } from 'src/styles/vars';

import {
  getIdFromSlug,
  createMarkup,
  getSlug,
  getAbsoluteAvatarPath,
  getAbsolutePicturePath,
  getRandomInt,
} from 'src/utils';

import './review.scss';

const Review = ({
  loadReview,
  loadingReview,
  review,
  pictures,
  loadPictures,
  loadingPictures,
  manageUploadPicture,
  loadingUploadPicture,
  isUserOwnerReview,
  deleteReview,
}) => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const refReview = useRef(null);
  const history = useHistory();

  useEffect(() => {
    loadReview(id, history);
    loadPictures(id, history);
    refReview.current.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const handleDelete = () => {
    deleteReview(review.id, history);
  };

  return (
    <div className="review" ref={refReview}>
      {
        loadingReview && <ScaleLoader color={SECONDARY_COLOR} />
      }
      {
        !loadingReview && (
        <>
          <div className="review-header">
            <a onClick={() => history.goBack()}>
              <Back className="review-back-to-reviews-results" />
            </a>
            {
              isUserOwnerReview && (
                <div className="review-action">
                  <Link
                    // eslint-disable-next-line prefer-template
                    to={'/chronique/editer/' + getSlug(review.event.band.name, review.id)}
                  >
                    <Edit className="review-modify" />
                  </Link>
                  <a
                    onClick={handleDelete}
                  >
                    <Trash2 className="review-delete" />
                  </a>
                </div>
              )
            }
          </div>
          <h1 className="review-title">{review.title}</h1>
          <div className="review-user">
            <img
              src={getAbsoluteAvatarPath(review.user.avatar)}
              alt={review.user.nickname}
              className="review-user-image"
            />
            <div className="user-information">
              <Link
                className="user-name"
                // eslint-disable-next-line prefer-template
                to={'/utilisateur/' + getSlug(review.user.nickname, review.user.id)}
              >
                par <span className="user-name-bold">{review.user.nickname}</span>
              </Link>
              <p className="user-date">
                postée le {Moment(review.createdAt).locale('fr').format('L')}
              </p>
            </div>
          </div>
          {
            pictures.length > 0 && (
              <div className="first-image-container">
                <img
                  className="first-image"
                  src={getAbsolutePicturePath(pictures[getRandomInt(pictures.length)].path)}
                  alt={review.event.band.name}
                />
              </div>
            )
          }
          <div className="review-content" dangerouslySetInnerHTML={createMarkup(review.content)} />
          {
            loadingPictures && <ScaleLoader color={SECONDARY_COLOR} />
          }
          {
            !loadingPictures && (
            <div className="review-pictures-container">
              <div className="review-pictures-label">
                {
                  isUserOwnerReview && (
                    <UploadPicture
                      loading={loadingUploadPicture}
                      manageSubmit={manageUploadPicture}
                    />
                  )
                }
                <span>Photos ({pictures.length})</span>
              </div>
              <div className="review-pictures-list">
                <Pictures pictures={pictures} picturesOnScreen={8} />
              </div>
            </div>
            )
          }
        </>
        )
      }
    </div>
  );
};

Review.propTypes = {
  loadingReview: PropTypes.bool.isRequired,
  loadReview: PropTypes.func.isRequired,
  loadPictures: PropTypes.func.isRequired,
  loadingPictures: PropTypes.bool.isRequired,
  manageUploadPicture: PropTypes.func.isRequired,
  loadingUploadPicture: PropTypes.bool.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.shape({
      nickname: PropTypes.string.isRequired,
    }.isRequired),
  }.isRequired),
  isUserOwnerReview: PropTypes.bool.isRequired,
  deleteReview: PropTypes.func.isRequired,
};
Review.defaultProps = {
  review: null,
};

export default Review;
