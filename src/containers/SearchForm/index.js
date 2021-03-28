import { connect } from 'react-redux';

import SearchForm from 'src/components/SearchForm';

import {
  fetchBands,
  fetchCountries,
  updateBand,
  updateCountry,
  updateCity,
  updateYear,
  updateEventPlace,
  submitEventsSearch,
} from 'src/actions/searchForm';

const mapStateToProps = (state) => ({
  loading: state.searchForm.loadingBands || state.searchForm.loadingCountries,
  bands: state.searchForm.bands,
  countries: state.searchForm.countries,
  band: state.searchForm.band,
  country: state.searchForm.country,
  city: state.searchForm.city,
  year: state.searchForm.year,
  eventPlace: state.searchForm.venue,
});

const mapDispatchToProps = (dispatch) => ({
  loadBands: (history) => {
    dispatch(fetchBands(history));
  },
  loadCountries: (history) => {
    dispatch(fetchCountries(history));
  },
  setBand: (value) => {
    dispatch(updateBand(value));
  },
  setCountry: (value) => {
    dispatch(updateCountry(value));
  },
  setCity: (value) => {
    dispatch(updateCity(value));
  },
  setYear: (value) => {
    dispatch(updateYear(value));
  },
  setEventPlace: (value) => {
    dispatch(updateEventPlace(value));
  },
  manageSubmit: (history) => {
    dispatch(submitEventsSearch(history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
