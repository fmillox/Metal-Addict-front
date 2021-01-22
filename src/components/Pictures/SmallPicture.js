import React from 'react';
import PropTypes from 'prop-types';

import 'react-lazy-load-image-component/src/effects/blur.css';

import './pictures.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SmallPicture = ({ picture }) => (
  <div className="smallPicture">
    <LazyLoadImage
      src={picture}
      effect="blur"
      className="picture"
    />
  </div>
);

SmallPicture.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default SmallPicture;
