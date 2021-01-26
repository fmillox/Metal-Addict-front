import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './pictures.scss';

import SmallPicture from 'src/components/Pictures/SmallPicture';

const Pictures = ({ pictures, picturesOnScreen }) => {
  const [seeAllPictures, setSeeAllPictures] = useState(false);

  const handleOnClick = () => {
    setSeeAllPictures(!seeAllPictures);
  };

  const cssClass = classNames('pictures', {
    'pictures--all': seeAllPictures,
  });

  return (
    <div className={cssClass}>
      {pictures.map((picture) => (
        <SmallPicture key={picture.id} picture={picture} />
      ))}
      {(pictures.length > picturesOnScreen) && (
      <button type="button" className="pictures-button" onClick={handleOnClick}>Voir/cacher toutes les photos</button>
      )}
    </div>
  );
};
Pictures.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  picturesOnScreen: PropTypes.number.isRequired,
};

export default Pictures;
