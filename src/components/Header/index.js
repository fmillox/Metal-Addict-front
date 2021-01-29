import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import sigle from 'src/assets/images/sigle.svg';
import './header.scss';

import { getSlug } from 'src/utils';

import dave from 'src/images/dave.jpg';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderRadius: 10,
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
        <h1 className="main-title">Metal Addict</h1>
        <h2 className="sub-title">Images and Words</h2>
      </a>
      {isLogged && (
        <>
          <div className="image" aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}><img src={dave} className="image-content" alt="" /></div>
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
              <NavLink
                // eslint-disable-next-line prefer-template
                to={'/utilisateur/' + getSlug(user.nickname, user.id)}
                onClick={handleClose}
              >Voir/modifier mon profil
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseLogout}>Déconnexion</MenuItem>
          </StyledMenu>
          <p className="welcome">Bienvenue {user.nickname}</p>
        </>
      )}
      {!isLogged && (
        <NavLink
          to="/connexion"
          className="connexionLink"
        >Se connecter
        </NavLink>
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
