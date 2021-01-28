import React from 'react';
import PropTypes from 'prop-types';

import './fieldInput.scss';

const FieldInput = ({
  name,
  label,
  placeholder,
  type,
  register,
  validations,
}) => {
  const id = `input-field${name}`;

  return (
    <div className="inputField">
      <label
        className="inputField-label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="inputField-input"
        placeholder={placeholder}
        ref={register(validations)}
      />
    </div>
  );
};

FieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  validations: PropTypes.object.isRequired,
};

export default FieldInput;
