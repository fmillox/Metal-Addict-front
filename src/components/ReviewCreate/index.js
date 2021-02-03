// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

// == Import
import ReviewManage from 'src/containers/ReviewManage';

import { getIdFromSlug } from 'src/utils';

import './reviewCreate.scss';

// == Composant
const ReviewCreate = ({ reset, manageCreate }) => {
  const { slug } = useParams();
  const setlistId = getIdFromSlug(slug);
  const history = useHistory();

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="reviewCreate">
      <ReviewManage
        buttonLabel="Créer la chronique"
        manageSubmit={() => manageCreate(setlistId, history)}
      />
    </div>
  );
};

ReviewCreate.propTypes = {
  reset: PropTypes.func.isRequired,
  manageCreate: PropTypes.func.isRequired,
};

// == Export
export default ReviewCreate;
