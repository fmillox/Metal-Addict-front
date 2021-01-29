import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  useParams,
  useHistory,
  Link,
} from 'react-router-dom';

import Pictures from 'src/components/Pictures';

import ScaleLoader from 'react-spinners/ScaleLoader';

import { getIdFromSlug, createMarkup, getSlug } from 'src/utils';

import dave from 'src/images/dave.jpg';
import Moment from 'moment';

import './review.scss';

const Review = ({
  loadReview,
  loadingReview,
  review,
  pictures,
  loadPictures,
  loadingPictures,
  modifyReview,
}) => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const refReview = useRef(null);
  const history = useHistory();

  useEffect(() => {
    loadReview(id, history);
    // loadPictures(id);
    refReview.current.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const handleOnClick = () => {
    history.goBack();
  };

  const galleryPictures = pictures.filter((picture, index) => index !== 0);

  return (
    <div className="review" ref={refReview}>
      {
        loadingReview && <ScaleLoader />
      }

      {
        !loadingReview && (
        <>
          <a
            className="review-back-to-reviews-results"
            onClick={handleOnClick}
          >
            Retour à la page précédente
          </a>
          <h2 className="review-title">{review.title}</h2>

          {modifyReview && (
            <Link
              className="review-modify"
              // eslint-disable-next-line prefer-template
              to={'/chronique/editer/' + getSlug(review.event.band.name, review.id)}
            >
              Modifier ma chronique
            </Link>
          )}
          <div className="review-user">
            <img src={dave} alt="" className="review-user-image" />
            <div className="user-information">
              <Link
                className="name"
                // eslint-disable-next-line prefer-template
                to={'/utilisateur/' + getSlug(review.user.nickname, review.user.id)}
              >
                par {review.user.nickname}
              </Link>
              <p className="date">
                postée le {Moment(review.createdAt).locale('fr').format('L')}
              </p>
            </div>
          </div>

          {(pictures.length > 0) && (
          <div className="first-image-container">
            <img src={pictures[0].src} alt="" className="first-image" />
          </div>
          )}

          <div className="review-content" dangerouslySetInnerHTML={createMarkup(review.content)} />

          {
            loadingPictures && <ScaleLoader />
          }
          {
(!loadingPictures && pictures.length > 1) && (
<div className="review-pictures-container">
  <div className="review-pictures-label">
    Photos
  </div>
  <div className="review-pictures-list">
    <Pictures pictures={galleryPictures} picturesOnScreen={9} />
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
  modifyReview: PropTypes.bool.isRequired,
};
Review.defaultProps = {
  review: null,
};

export default Review;
