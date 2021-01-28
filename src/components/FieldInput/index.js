import React from 'react';
import PropTypes from 'prop-types';

import './fieldInput.scss';

const FieldInput = ({
  name,
  label,
  placeholder,
  type,
  reference,
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
        className="inputField-input"
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        ref={reference}
      />
    </div>
  );
};

FieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};

FieldInput.defaultProps = {
  reference: null,
};

export default FieldInput;
