import React from 'react';

import './header.scss';

import dave from 'src/images/dave.jpg';

const Header = () => (
  <header className="header">
    <h1>Share O Metal</h1>
    <div className="image"><img src={dave} className="image-content" alt="" /></div>
  </header>
);

export default Header;
