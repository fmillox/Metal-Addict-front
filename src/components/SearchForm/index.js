// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ChevronsDown, ChevronsUp } from 'react-feather';

// == Import
import AutocompleteInput from 'src/components/AutocompleteInput';
import TextFieldInput from 'src/components/TextFieldInput';
import Button from 'src/components/Button';

import { sortByName, createYearArray, isObjectValid } from 'src/utils';

import './searchForm.scss';

// == Composant
const SearchForm = ({ bands, countries, showOpenButton }) => {
  const [years, setYears] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    sortByName(bands);
    sortByName(countries);
    setYears(createYearArray());
  }, []);

  const onOpenBtnClick = (evt) => {
    evt.preventDefault();
    setOpen(!open);
  };

  // TODO : DELETE AFTER TEST
  const [band, setBand] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState('');
  const [year, setYear] = useState(null);
  const [eventPlace, setEventPlace] = useState('');

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!isObjectValid(band)) setBand(null);
    if (!isObjectValid(country)) setCountry(null);
    if (!isObjectValid(year)) setYear(null);
  };
  //

  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <div className={classNames('searchForm-container', { 'searchForm-container--close': !open })}>
        <div className="searchForm-input">
          <AutocompleteInput name="band" label="Nom du groupe" options={bands} required value={band} manageChange={setBand} />
        </div>
        <div className="searchForm-input">
          <AutocompleteInput name="country" label="Pays" options={countries} value={country} manageChange={setCountry} />
        </div>
        <div className="searchForm-input">
          <TextFieldInput name="city" label="Ville" value={city} manageChange={setCity} />
        </div>
        <div className="searchForm-input">
          <AutocompleteInput name="year" label="Année" options={years} value={year} manageChange={setYear} />
        </div>
        <div className="searchForm-input">
          <TextFieldInput name="event-place" label="Lieu de l'événement" value={eventPlace} manageChange={setEventPlace} />
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
    </form>
  );
};

SearchForm.propTypes = {
  bands: PropTypes.arrayOf(PropTypes.object).isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  showOpenButton: PropTypes.bool,
};

SearchForm.defaultProps = {
  showOpenButton: false,
};

// == Export
export default SearchForm;
