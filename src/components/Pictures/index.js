import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ChevronDown } from 'react-feather';

import './pictures.scss';

import SmallPicture from 'src/components/Pictures/SmallPicture';

const Pictures = ({ pictures, picturesOnScreen, showNickname }) => {
  const [seeAllPictures, setSeeAllPictures] = useState(false);

  const handleOnClick = () => {
    setSeeAllPictures(!seeAllPictures);
  };

  const cssClass = classNames('pictures', {
    'pictures--all': seeAllPictures,
  }, { 'picture--few': pictures.length > 8 });

  return (
    <div className={cssClass}>
      {
        pictures.map((picture) => (
          <SmallPicture
            key={picture.id}
            picture={picture}
            showNickname={showNickname}
          />
        ))
      }
      {
        pictures.length > picturesOnScreen && (
          <button
            type="button"
            className="pictures-button"
            onClick={handleOnClick}
          >
            <ChevronDown className="chevron" />
          </button>
        )
      }
    </div>
  );
};
Pictures.propTypes = {
  /** array with the pictures and theirs datas */
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  /** number of pictures who appears on the screen at the first render of the page */
  picturesOnScreen: PropTypes.number.isRequired,
  /** bool to indicate if the nickname of the user who has posted the picture has to be indicate */
  showNickname: PropTypes.bool,
};

Pictures.defaultProps = {
  showNickname: false,
};

export default Pictures;
