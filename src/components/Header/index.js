import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logoOk from 'src/images/logoOk.svg';
import './header.scss';

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

const Header = ({ resetHomePage, isLogged, handleLogout }) => {
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
      <img src={logoOk} alt="logo" className="logo" />
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
            <MenuItem onClick={handleClose}>Voir/modifier mon profil</MenuItem>
            <MenuItem onClick={handleCloseLogout}>Déconnexion</MenuItem>
          </StyledMenu>
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
};

export default Header;
