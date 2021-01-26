// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
import ReviewManage from 'src/containers/ReviewManage';

import { getIdFromSlug } from 'src/utils';

import './reviewEdit.scss';

// == Composant
const ReviewEdit = ({
  loadingReview,
  review,
  loadReview,
  manageEdit,
}) => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const history = useHistory();

  useEffect(() => {
    loadReview(id);
  }, []);

  return (
    <div className="reviewEdit">
      {
        loadingReview && <ScaleLoader />
      }
      {
        !loadingReview && (
          <ReviewManage
            title={review.title}
            content={review.content}
            buttonLabel="Modifier la chronique"
            manageSubmit={() => manageEdit(id, history)}
          />
        )
      }
    </div>
  );
};

ReviewEdit.propTypes = {
  loadingReview: PropTypes.bool.isRequired,
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }.isRequired),
  loadReview: PropTypes.func.isRequired,
  manageEdit: PropTypes.func.isRequired,
};

ReviewEdit.defaultProps = {
  review: null,
};

// == Export
export default ReviewEdit;
