// == Npm import
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
import ReviewManage from 'src/containers/ReviewManage';

import { SECONDARY_COLOR } from 'src/styles/vars';

import { getIdFromSlug } from 'src/utils';

import './reviewEdit.scss';

// == Component
const ReviewEdit = ({
  loadingReview,
  loadReview,
  manageEdit,
}) => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const history = useHistory();

  useEffect(() => {
    loadReview(id, history);
  }, []);

  return (
    <div className="reviewEdit">
      {
        loadingReview && (
          <div className="reviewEdit-loader">
            <ScaleLoader color={SECONDARY_COLOR} />
          </div>
        )
      }
      {
        !loadingReview && (
          <ReviewManage
            buttonLabel="Modifier la chronique"
            manageSubmit={() => manageEdit(id, history, slug)}
          />
        )
      }
    </div>
  );
};

ReviewEdit.propTypes = {
  /** bool to indicate if the review is loading */
  loadingReview: PropTypes.bool.isRequired,
  /** called when the component renders the first time (useEffect), two parameter :
   * - id
   * - history
  */
  loadReview: PropTypes.func.isRequired,
  /** called when submit event is received, three parameters :
   * - id
   * - history
   * - slug
   */
  manageEdit: PropTypes.func.isRequired,
};

// == Export
export default ReviewEdit;
