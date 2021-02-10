// == Npm import
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// == Import
import { Login } from 'src/components/Icons';

import { SECONDARY_COLOR } from 'src/styles/vars';

import { getSlug, getAbsoluteAvatarPath } from 'src/utils';

import sigle from 'src/assets/images/sigle.png';

import './header.scss';

const StyledMenu = withStyles({
  '@global': {
    '.MuiList-root': {
      borderRadius: '0.25em',
      backgroundColor: SECONDARY_COLOR,
    },
    '.MuiList-padding': {
      paddingTop: '0',
      paddingBottom: '0',

      '@media (min-width: 992px)': {
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
      },
    },
    '.MuiListItem-gutters': {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',

      '@media (min-width: 768px)': {
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
      },

      '@media (min-width: 992px)': {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
    },
    '.MuiMenuItem-root': {
      lineHeight: '0.5rem',
      fontSize: '0.8rem',
      minHeight: '30px',

      '@media (min-width: 768px)': {
        lineHeight: '1rem',
        fontSize: '1rem',
        minHeight: '42px',
      },
      '@media (min-width: 992px)': {
        lineHeight: '1.2rem',
        fontSize: '1.2rem',
        minHeight: '50px',
      },
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

// == Component
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
                to={`/utilisateur/${getSlug(user.nickname, user.id)}`}
                onClick={handleClose}
              >Mon profil
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseLogout}>Déconnexion</MenuItem>
          </StyledMenu>
        </>
      )}
      {!isLogged && (
        <Link to="/connexion">
          <Login className="login" />
        </Link>
      )}
    </header>
  );
};

// == Export
Header.propTypes = {
  /** called on the onClick of the website logo, no parameter */
  resetHomePage: PropTypes.func.isRequired,
  /** boolean to indicate if the user is logged */
  isLogged: PropTypes.bool.isRequired,
  /** called on the onClick of the menu item, no parameter */
  handleLogout: PropTypes.func.isRequired,
  /** the connected user object (can be null if anonymous user) */
  user: PropTypes.object,
};

Header.defaultProps = {
  user: null,
};
export default Header;
