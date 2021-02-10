// == Npm import
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './button.scss';

// == Component
const Button = ({ label }) => (
  <input type="submit" className="button" value={label} />
);

Button.propTypes = {
  /** text used as label */
  label: PropTypes.string.isRequired,
};

// == Export
export default Button;
