import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  useParams,
  useHistory,
  Link,
} from 'react-router-dom';
import { ArrowLeft, Edit, Trash2 } from 'react-feather';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Moment from 'moment';

import Pictures from 'src/components/Pictures';

import { SECONDARY_COLOR } from 'src/styles/vars';

import {
  getIdFromSlug,
  createMarkup,
  getSlug,
  getAbsoluteAvatarPath,
  getAbsolutePicturePath,
} from 'src/utils';

import './review.scss';

const Review = ({
  loadReview,
  loadingReview,
  review,
  pictures,
  loadPictures,
  loadingPictures,
  isUserOwnerReview,
  deleteReview,
}) => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const refReview = useRef(null);
  const history = useHistory();

  useEffect(() => {
    loadReview(id, history);
    loadPictures(id);
    refReview.current.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const handleDelete = () => {
    deleteReview(review.id, history);
  };

  const galleryPictures = pictures.filter((picture, index) => index !== 0);

  return (
    <div className="review" ref={refReview}>
      {
        loadingReview && <ScaleLoader color={SECONDARY_COLOR} />
      }
      {
        !loadingReview && (
        <>
          <div className="review-header">
            <a
              className="review-back-to-reviews-results"
              onClick={() => history.goBack()}
            >
              <ArrowLeft />
            </a>
            {
              isUserOwnerReview && (
                <div className="review-action">
                  <Link
                    className="review-modify"
                    // eslint-disable-next-line prefer-template
                    to={'/chronique/editer/' + getSlug(review.event.band.name, review.id)}
                  >
                    <Edit />
                  </Link>
                  <a
                    className="review-delete"
                    onClick={handleDelete}
                  >
                    <Trash2 />
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
                par {review.user.nickname}
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
                  src={getAbsolutePicturePath(pictures[0].path)}
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
            (!loadingPictures && pictures.length > 1) && (
            <div className="review-pictures-container">
              <div className="review-pictures-label">
                Photos ({galleryPictures.length})
              </div>
              <div className="review-pictures-list">
                <Pictures pictures={galleryPictures} picturesOnScreen={8} />
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
