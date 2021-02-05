import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import sigle from 'src/assets/images/sigle.png';
import './header.scss';

import { getSlug, getAbsoluteAvatarPath } from 'src/utils';

const StyledMenu = withStyles({
  paper: {
    // border: '1px solid #d3d4d5',
    borderRadius: 5,
    backgroundColor: '#FFDB15',
    width: '65px',
    height: '65px',
    '@media (min-width: 768px)': {
      width: '140px',
      height: '140px',
    },
    '@media (min-width: 992px)': {
      width: '165px',
      height: '165px',
    },
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'center',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'center',
      horizontal: 'right',
    }}
    {...props}
  />
));

const Header = ({
  resetHomePage,
  isLogged,
  handleLogout,
  user,
}) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOnClickHome = () => {
    resetHomePage();
    history.push('/');
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogout = () => {
    setAnchorEl(null);
    handleLogout();
  };

  return (
    <header className="header">
      <img src={sigle} alt="sigle" className="sigle" />
      <a
        className="title"
        onClick={handleOnClickHome}
      >
        <div className="main-title-container">
          <h1 className="main-title">Metal</h1>
          <h2 className="main-title">Addict</h2>
        </div>
      </a>
      {isLogged && (
        <>
          <div
            className="image"
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <img
              src={getAbsoluteAvatarPath(user.avatar)}
              className="image-content"
              alt=""
            />
          </div>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="window"
          >
            <MenuItem
              onClick={handleClose}
            >
              <Link
                // eslint-disable-next-line prefer-template
                to={'/utilisateur/' + getSlug(user.nickname, user.id)}
                onClick={handleClose}
              >Mon profil
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseLogout}>Déconnexion</MenuItem>
          </StyledMenu>
        </>
      )}
      {!isLogged && (
        <Link
          className="connexionLink"
          to="/connexion"
        >Se connecter
        </Link>
      )}
    </header>
  );
};

Header.propTypes = {
  resetHomePage: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

Header.defaultProps = {
  user: null,
};
export default Header;
