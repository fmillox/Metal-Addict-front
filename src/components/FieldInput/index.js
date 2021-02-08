import React from 'react';
import PropTypes from 'prop-types';

import './fieldInput.scss';

const FieldInput = ({
  name,
  label,
  placeholder,
  type,
  reference,
  multiLine,
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
      {
        !multiLine && (
          <input
            className="inputField-input"
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            ref={reference}
          />
        )
      }
      {
        multiLine && (
          <textarea
            className="inputField-textarea"
            id={id}
            name={name}
            placeholder={placeholder}
            ref={reference}
          />
        )
      }
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
  multiLine: PropTypes.bool,
};

FieldInput.defaultProps = {
  reference: null,
  multiLine: false,
};

export default FieldInput;
