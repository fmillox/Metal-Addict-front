// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ScaleLoader } from 'react-spinners';
import { ChevronsDown, ChevronsUp } from 'react-feather';

// == Import
import AutocompleteInput from 'src/components/AutocompleteInput';
import TextFieldInput from 'src/components/TextFieldInput';
import Button from 'src/components/Button';

import { createYearArray, isObjectValid } from 'src/utils';

import './searchForm.scss';

// == Composant
const SearchForm = ({
  loading,
  bands,
  countries,
  showOpenButton,
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
  const [bandInputValue, setBandInputValue] = useState('');
  const [countryInputValue, setCountryInputValue] = useState('');
  const [yearInputValue, setYearInputValue] = useState('');
  const [years, setYears] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    loadBands();
    loadCountries();
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
      manageSubmit();
    }
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      {
        loading && (
          <div className="searchForm-loader">
            <ScaleLoader />
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
            {
              showOpenButton && (
                <div className="searchForm-open-btn">
                  {
                    open && <ChevronsUp onClick={onOpenBtnClick} />
                  }
                  {
                    !open && <ChevronsDown onClick={onOpenBtnClick} />
                  }
                </div>
              )
            }
          </>
        )
      }
    </form>
  );
};

SearchForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  bands: PropTypes.arrayOf(PropTypes.object).isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  showOpenButton: PropTypes.bool,
  band: PropTypes.object,
  country: PropTypes.object,
  city: PropTypes.string.isRequired,
  year: PropTypes.object,
  eventPlace: PropTypes.string.isRequired,
  loadBands: PropTypes.func.isRequired,
  loadCountries: PropTypes.func.isRequired,
  setBand: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  setEventPlace: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  showOpenButton: false,
  band: null,
  country: null,
  year: null,
};

// == Export
export default SearchForm;
