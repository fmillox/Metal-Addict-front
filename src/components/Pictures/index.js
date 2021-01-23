import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './pictures.scss';

import SmallPicture from 'src/components/Pictures/SmallPicture';

const Pictures = ({ pictures, buttonClick, allPictures }) => {
  const cssClass = classNames('pictures', {
    'pictures--all': allPictures,
  });
  return (
    <div className={cssClass}>
      {pictures.map((picture) => (
        <SmallPicture key={picture.id} picture={picture} />
      ))}
      <button type="button" className="pictures-button" onClick={buttonClick}>Voir/cacher toutes les photos</button>
    </div>
);
};
Pictures.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  buttonClick: PropTypes.func.isRequired,
  allPictures: PropTypes.bool.isRequired,
};

export default Pictures;
