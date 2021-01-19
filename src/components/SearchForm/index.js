import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AutocompleteInput from 'src/components/AutocompleteInput';
import TextFieldInput from 'src/components/TextFieldInput';
import Button from 'src/components/Button';

import { sortByName, createYearArray, isObjectValid } from 'src/utils';

import './searchForm.scss';

const SearchForm = ({ bands, countries }) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    sortByName(bands);
    sortByName(countries);
    setYears(createYearArray());
  }, []);

  // **********************
  // ******** TEST ********
  // **********************

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

  // **********************
  // **********************
  // **********************

  return (
    <form className="searchForm" onSubmit={onSubmit}>
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
    </form>
  );
};

SearchForm.propTypes = {
  bands: PropTypes.arrayOf(PropTypes.object).isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchForm;
