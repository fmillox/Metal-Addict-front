import React from 'react';
import PropTypes from 'prop-types';

import './fieldInput.scss';

const FieldInput = ({
  name,
  label,
  type,
  register,
  validations,
}) => (
  <div className="inputField">
    <label htmlFor="label">{label}</label>
    <input type={type} name={name} ref={register(validations)} />
  </div>
);

FieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  validations: PropTypes.object.isRequired,
};

export default FieldInput;
