// == Npm import
import React from 'react';

// == Import
import error from 'src/assets/images/error.jpg';

import './error.scss';

// == Component
const Error = () => (
  <div className="error">
    <span className="error-content">
      Une erreur est survenue...
    </span>
    <div className="error-image-container">
      <img className="error-image" src={error} alt="phil" />
    </div>
    <span className="error-text">
      "I'm broken dude !"
    </span>
  </div>
);

// == Export
export default Error;
