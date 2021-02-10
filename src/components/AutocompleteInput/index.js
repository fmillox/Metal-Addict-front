// == Npm import
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';

// == Import
import { SECONDARY_COLOR, LIGHT_SECONDARY_COLOR } from 'src/styles/vars';

import { getFilteredAutocompletInputOptions, getObjectByName } from 'src/utils';

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
    '& .MuiAutocomplete-clearIndicator': {
      color: LIGHT_SECONDARY_COLOR,
    },
    '& .MuiAutocomplete-clearIndicatorDirty': {
      color: LIGHT_SECONDARY_COLOR,
    },
  },
};

// == Component
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
    optionsFiltered = getFilteredAutocompletInputOptions(options, inputValue);
  }

  const CustomPopper = (props) => <Popper {...props} />;

  const id = `autocomplete-input-${name}`;

  return (
    <Autocomplete
      PopperComponent={CustomPopper}
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
          name={name}
          label={label}
          classes={classes}
          variant="outlined"
          required={required}
        />
      )}
    />
  );
});

AutocompleteInput.propTypes = {
  /** text used as name for the textfield (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as placeholder and label */
  label: PropTypes.string.isRequired,
  /** width of the textfield */
  width: PropTypes.string,
  /** options list to show in the autocomplete feature */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  /** number of char until the autocomplete feature appears */
  nbCarsToFilter: PropTypes.number,
  /** indicate if a value is required in the textfield */
  required: PropTypes.bool,
  /** object used as value for the autocomplete */
  value: PropTypes.object,
  /** called when onChange event is received by the autocomplete component, one parameter :
   * - new value
   */
  manageChange: PropTypes.func.isRequired,
  /** text used as value for the input */
  inputValue: PropTypes.string.isRequired,
  /** called when onInputChange event is received by the autocomplete component, one parameter :
   * - new value
   */
  setInputValue: PropTypes.func.isRequired,
};

AutocompleteInput.defaultProps = {
  width: '100%',
  nbCarsToFilter: 0,
  required: false,
};

// == Export
export default AutocompleteInput;
