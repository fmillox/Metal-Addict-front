import React from 'react';
import PropTypes from 'prop-types';

import './pictures.scss';

import SmallPicture from 'src/components/Pictures/SmallPicture';

const Pictures = ({ pictures }) => (
  <div className="pictures">
    {pictures.map((picture) => (
      <SmallPicture picture={picture} />
    ))}
  </div>
);

Pictures.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Pictures;
