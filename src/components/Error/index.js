import React from 'react';

import './error.scss';

const Error = () => (
  <div className="container">
    <h1>
      <p>Metal</p>
      <p>Addict</p>
    </h1>
    <div className="content">
      <h2>Une erreur est survenue...</h2>
    </div>
    <div className="image">
      <img src="phil.jpg" alt="phil" />
    </div>
    <div className="text">
      <p>"I’m broken dude !"</p>
    </div>
    <div className="link">
      <a href="#">
        retour
      </a>
    </div>
  </div>
);

export default Error;
