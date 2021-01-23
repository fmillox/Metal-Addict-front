import React from 'react';
import PropTypes from 'prop-types';

import 'react-lazy-load-image-component/src/effects/blur.css';

import './pictures.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SmallPicture = ({ picture, manageClick }) => (
  <div className="smallPicture" onClick={manageClick}>
    <LazyLoadImage
      src={picture}
      effect="blur"
      className="picture"
    />
  </div>
);

SmallPicture.propTypes = {
  picture: PropTypes.string.isRequired,
  manageClick: PropTypes.func.isRequired,
};

export default SmallPicture;
