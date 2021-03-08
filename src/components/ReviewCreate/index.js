// == Npm import
import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

// == Import
import ReviewManage from 'src/containers/ReviewManage';

import { getIdFromSlug } from 'src/utils';

import './reviewCreate.scss';

// == Component
const ReviewCreate = ({ manageCreate }) => {
  const { slug } = useParams();
  const setlistId = getIdFromSlug(slug);
  const history = useHistory();

  return (
    <div className="reviewCreate">
      <ReviewManage
        buttonLabel="Créer la chronique"
        manageSubmit={() => manageCreate(setlistId, history, slug)}
      />
    </div>
  );
};

ReviewCreate.propTypes = {
  /** called when submit event is received, three parameters :
   * - setlistId
   * - history
   * - slug
   */
  manageCreate: PropTypes.func.isRequired,
};

// == Export
export default ReviewCreate;
