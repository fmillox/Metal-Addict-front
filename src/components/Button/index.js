import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ label }) => (
  <input type="submit" className="button" value={label} />
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
