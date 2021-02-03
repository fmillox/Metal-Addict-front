// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

// == Import
import ReviewManage from 'src/containers/ReviewManage';

import { SECONDARY_COLOR } from 'src/styles/vars';

import { getIdFromSlug } from 'src/utils';

import './reviewEdit.scss';

// == Composant
const ReviewEdit = ({
  loadingReview,
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
        loadingReview && <ScaleLoader color={SECONDARY_COLOR} />
      }
      {
        !loadingReview && (
          <ReviewManage
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
  loadReview: PropTypes.func.isRequired,
  manageEdit: PropTypes.func.isRequired,
};

// == Export
export default ReviewEdit;
