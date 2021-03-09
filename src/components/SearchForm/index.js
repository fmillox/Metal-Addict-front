// == Npm import
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { ScaleLoader } from 'react-spinners';

// == Import
import AutocompleteInput from 'src/components/AutocompleteInput';
import TextFieldInput from 'src/components/TextFieldInput';
import Button from 'src/components/Button';

import { SECONDARY_COLOR } from 'src/styles/vars';

import { createYearArray, isObjectValid } from 'src/utils';

import './searchForm.scss';

// == Component
const SearchForm = ({
  loading,
  bands,
  countries,
  band,
  country,
  city,
  year,
  eventPlace,
  loadBands,
  loadCountries,
  setBand,
  setCountry,
  setCity,
  setYear,
  setEventPlace,
  manageSubmit,
}) => {
  const history = useHistory();
  /** string used as band for the input */
  const [bandInputValue, setBandInputValue] = useState('');
  /** string used as country for the input */
  const [countryInputValue, setCountryInputValue] = useState('');
  /** string used as year for the input */
  const [yearInputValue, setYearInputValue] = useState('');
  /** array of the years pre-filled */
  const [years, setYears] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    loadBands(history);
    loadCountries(history);
    setYears(createYearArray());
  }, []);

  const onOpenBtnClick = (evt) => {
    evt.preventDefault();
    setOpen(!open);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isObjectValid(band)) {
      setBandInputValue('');
      setBand(null);
    }
    else if (!isObjectValid(country)) {
      setCountryInputValue('');
      setCountry(null);
    }
    else if (!isObjectValid(year)) {
      setYearInputValue('');
      setYear(null);
    }
    else {
      manageSubmit(history);
    }
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      {
        loading && (
          <div className="searchForm-loader">
            <ScaleLoader color={SECONDARY_COLOR} />
          </div>
        )
      }
      {
        !loading && (
          <>
            <div className={classNames('searchForm-container', { 'searchForm-container--close': !open })}>
              <div className="searchForm-input">
                <AutocompleteInput
                  name="band"
                  label="Nom du groupe"
                  options={bands}
                  nbCarsToFilter={2}
                  required
                  value={band}
                  manageChange={setBand}
                  inputValue={bandInputValue}
                  setInputValue={setBandInputValue}
                />
              </div>
              <div className="searchForm-input">
                <AutocompleteInput
                  name="country"
                  label="Pays"
                  options={countries}
                  nbCarsToFilter={1}
                  value={country}
                  manageChange={setCountry}
                  inputValue={countryInputValue}
                  setInputValue={setCountryInputValue}
                />
              </div>
              <div className="searchForm-input">
                <TextFieldInput
                  name="city"
                  label="Ville"
                  value={city}
                  manageChange={setCity}
                />
              </div>
              <div className="searchForm-input">
                <AutocompleteInput
                  name="year"
                  label="Année"
                  options={years}
                  value={year}
                  manageChange={setYear}
                  inputValue={yearInputValue}
                  setInputValue={setYearInputValue}
                />
              </div>
              <div className="searchForm-input">
                <TextFieldInput
                  name="event-place"
                  label="Lieu de l'événement"
                  value={eventPlace}
                  manageChange={setEventPlace}
                />
              </div>
              <div className="searchForm-button">
                <Button label="Rechercher" />
              </div>
            </div>
          </>
        )
      }
    </form>
  );
};

SearchForm.propTypes = {
  /* bool to indicate form is loading */
  loading: PropTypes.bool.isRequired,
  /* array of the bands pre-filled */
  bands: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* array of the countries pre-filled */
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* objet of the band selected by the user */
  band: PropTypes.object,
  /* objet of the country selected by the user */
  country: PropTypes.object,
  /* text used as city for the input */
  city: PropTypes.string.isRequired,
  /* object used as year for the input */
  year: PropTypes.object,
  /* string used as event place for the input */
  eventPlace: PropTypes.string.isRequired,
  /* called when the component renders the first time (useEffect), one parameter :
  - history
  */
  loadBands: PropTypes.func.isRequired,
  /* called when the component renders the first time (useEffect), one parameter :
  - history
  */
  loadCountries: PropTypes.func.isRequired,
  /* function to save the selected band in the state, one parameter :
  - value
  */
  setBand: PropTypes.func.isRequired,
  /* function to save the selected country in the state, one parameter :
  - value
  */
  setCountry: PropTypes.func.isRequired,
  /* function to save the selected city in the state, one parameter :
  - value
  */
  setCity: PropTypes.func.isRequired,
  /* function to save the selected year in the state, one parameter :
  - value
  */
  setYear: PropTypes.func.isRequired,
  /* function to save the selected event place in the state, one parameter :
  - value
  */
  setEventPlace: PropTypes.func.isRequired,
  /* called when submit event is received, one parameter :
  - history
  */
  manageSubmit: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  band: null,
  country: null,
  year: null,
};

// == Export
export default SearchForm;
