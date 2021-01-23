import React from 'react';
import PropTypes from 'prop-types';

import './pictures.scss';

import SmallPicture from 'src/components/Pictures/SmallPicture';

const Pictures = ({ pictures, manageClick }) => (
  <div className="pictures">
    {pictures.map((picture) => (
      <SmallPicture key={picture.id} picture={picture} manageClick={manageClick} />
    ))}
  </div>
);

Pictures.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  manageClick: PropTypes.func.isRequired,
};

export default Pictures;
