import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './header.scss';

import dave from 'src/images/dave.jpg';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
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

const Header = ({ isLogged }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="header">
      <NavLink
        to="/"
        exact
      >
        <h1>Share O Metal</h1>
      </NavLink>
      {isLogged && (
        <>
          <div className="image" aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}><img src={dave} className="image-content" alt="" /></div>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Déconnexion</MenuItem>
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
  isLogged: PropTypes.bool.isRequired,
};

export default Header;
