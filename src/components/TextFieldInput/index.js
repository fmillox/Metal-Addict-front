import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import {
  SECONDARY_COLOR,
  LIGHT_SECONDARY_COLOR,
} from 'src/styles/vars';

const styles = {
  root: {
    '& label': {
      color: LIGHT_SECONDARY_COLOR,
    },
    '& label.Mui-focused': {
      color: SECONDARY_COLOR,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: LIGHT_SECONDARY_COLOR,
      },
      '&:hover fieldset': {
        borderColor: LIGHT_SECONDARY_COLOR,
      },
      '&.Mui-focused fieldset': {
        borderColor: SECONDARY_COLOR,
      },
    },
    '& input': {
      color: LIGHT_SECONDARY_COLOR,
    },
  },
};

const TextFieldInput = withStyles(styles)(({
  name,
  label,
  width,
  value,
  multiline,
  manageChange,
  classes,
}) => {
  const handleChange = (evt) => {
    // manageChange(evt.target.value, name);
    manageChange(evt.target.value);
  };

  const id = `text-field-input-${name}`;

  return (
    <TextField
      id={id}
      name={name}
      label={label}
      variant="outlined"
      multiline={multiline}
      rows={5}
      classes={classes}
      style={{ width }}
      value={value}
      onChange={handleChange}
    />
  );
});

TextFieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  multiline: PropTypes.bool,
  value: PropTypes.string.isRequired,
  manageChange: PropTypes.func.isRequired,
};

TextFieldInput.defaultProps = {
  width: '100%',
  multiline: false,
};

export default TextFieldInput;
