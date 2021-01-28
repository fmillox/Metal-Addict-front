import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';

import { getObjectByName } from 'src/utils';

const styles = {
  root: {
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
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

const AutocompleteInput = withStyles(styles)(({
  name,
  label,
  width,
  options,
  nbCarsToFilter,
  required,
  value,
  manageChange,
  inputValue,
  setInputValue,
  classes,
}) => {
  let optionsFiltered = [];

  if (inputValue.length >= nbCarsToFilter) {
    optionsFiltered = options.filter((option) => (
      option.name.toLowerCase().startsWith(inputValue.toLowerCase())
    ));
  }

  const id = `autocomplete-input-${name}`;

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          const object = getObjectByName(newValue, options);
          if (object === undefined) {
            manageChange({
              name: newValue,
            });
          }
          else {
            manageChange(object);
          }
        }
        else if (newValue && newValue.inputValue) {
          manageChange({
            name: newValue.inputValue,
          });
        }
        else {
          manageChange(newValue);
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={id}
      options={optionsFiltered}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.name;
      }}
      renderOption={(option) => option.name}
      style={{ maxWidth: width }}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          classes={classes}
          required={required}
        />
      )}
    />
  );
});

AutocompleteInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  nbCarsToFilter: PropTypes.number,
  required: PropTypes.bool,
  value: PropTypes.object,
  manageChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

AutocompleteInput.defaultProps = {
  width: '100%',
  nbCarsToFilter: 0,
  required: false,
};

export default AutocompleteInput;
