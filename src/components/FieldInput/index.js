// == Npm import
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './fieldInput.scss';

// == Component
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
  /** text used as name for the input/textarea (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as label */
  label: PropTypes.string.isRequired,
  /** text used as placeholder */
  placeholder: PropTypes.string.isRequired,
  /** type of the input */
  type: PropTypes.string.isRequired,
  /** reference of the input/textarea (useRef hook) */
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  /** indicate if it's an input (multiLine = false) or a textfield (multiLine = true) */
  multiLine: PropTypes.bool,
};

FieldInput.defaultProps = {
  reference: null,
  multiLine: false,
};

// == Export
export default FieldInput;
