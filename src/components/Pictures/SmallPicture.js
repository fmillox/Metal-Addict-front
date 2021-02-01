import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { makeStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { getAbsoluteImagePath } from 'src/utils';

import './pictures.scss';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const SmallPicture = ({ picture, showNickname }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const src = getAbsoluteImagePath(picture.path);

  return (
    <div className="smallPicture">
      <LazyLoadImage
        src={src}
        effect="blur"
        className="picture"
        onClick={handleToggle}
      />
      {
        showNickname && <p>Postée par {picture.user.nickname}</p>
      }
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <img src={src} alt="" className="pictureBig" />
      </Backdrop>
    </div>
  );
};

SmallPicture.propTypes = {
  picture: PropTypes.shape({
    path: PropTypes.string.isRequired,
    user: PropTypes.shape({
      nickname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  showNickname: PropTypes.bool.isRequired,
};

export default SmallPicture;
