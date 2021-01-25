import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  useParams,
  useHistory,
} from 'react-router-dom';

import Pictures from 'src/components/Pictures';

import ScaleLoader from 'react-spinners/ScaleLoader';

import { getIdFromSlug } from 'src/utils';

import dave from 'src/images/dave.jpg';
import Moment from 'moment';

import './review.scss';

const Review = ({
  loadReview,
  loadingReview,
  review,
  picture,
  pictures,
  loadingPictures,
}) => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const refReview = useRef(null);
  const history = useHistory();

  useEffect(() => {
    loadReview(id);
    refReview.current.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const handleOnClick = () => {
    history.goBack();
  };

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
          <div className="review-title">
            {review.title}
          </div>
          <img src={dave} alt="" className="image" />
          <div>{review.user.nickname}{Moment(review.createdAt).locale('fr').format('L')}</div>
          <img src={picture} alt="" className="image2" />
          <div>{review.content}</div>
          {
            loadingPictures && <ScaleLoader />
          }
          {
            !loadingPictures && (
              <div className="event-pictures-container">
                <div className="event-pictures-label">
                  Photos
                </div>
                <div className="event-pictures-list">
                  <Pictures pictures={pictures} />
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
  picture: PropTypes.string.isRequired,
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
};
Review.defaultProps = {
  review: null,
};

export default Review;
