import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { makeStyles } from '@material-ui/core/styles';

import './pictures.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const SmallPicture = ({ picture }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [pictureUrl, setPicture] = useState('');
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = (event) => {
    console.log(event.target);
    setOpen(!open);
  };

  return (
    <div className="smallPicture">
      <LazyLoadImage
        src={picture.src}
        effect="blur"
        className="picture"
        onClick={handleToggle}
      />
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <img src={picture.src} alt="" className="pictureBig" />
      </Backdrop>
    </div>
  );
};

SmallPicture.propTypes = {
  picture: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallPicture;
