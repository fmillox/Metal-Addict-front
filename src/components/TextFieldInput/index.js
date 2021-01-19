import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
        // borderWidth: 3,
      },
      '&:hover fieldset': {
        borderColor: 'grey',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey',
      },
    },
  },
};

const TextFieldInput = withStyles(styles)(({
  name,
  label,
  width,
  value,
  manageChange,
  classes,
}) => {
  const handleChange = (evt) => {
    // manageChange(evt.target.value, name);
    manageChange(evt.target.value);
  };

  const id = `text-field-inut-${name}`;

  return (
    <TextField
      id={id}
      name={name}
      label={label}
      variant="outlined"
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
  value: PropTypes.string.isRequired,
  manageChange: PropTypes.func.isRequired,
};

TextFieldInput.defaultProps = {
  width: '100%',
};

export default TextFieldInput;
