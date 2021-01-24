import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './header.scss';

import dave from 'src/images/dave.jpg';

const Header = ({ resetHomePage }) => {
  const history = useHistory();

  const handleOnClickHome = () => {
    resetHomePage();
    history.push('/');
  };

  return (
    <header className="header">
      <a
        className="header-home"
        onClick={handleOnClickHome}
      >
        Share O Metal
      </a>
      <div className="image"><img src={dave} className="image-content" alt="" /></div>
    </header>
  );
};

Header.propTypes = {
  resetHomePage: PropTypes.func.isRequired,
};

export default Header;
