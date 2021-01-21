import { connect } from 'react-redux';

import {
  updateBand,
  updateCountry,
  updateCity,
  updateYear,
  updateEventPlace,
  submitEventsSearch,
} from 'src/actions/searchForm';

// on importe le composant de présentation
import SearchForm from 'src/components/SearchForm';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  bands: state.searchForm.bands,
  countries: state.searchForm.countries,
  band: state.searchForm.band,
  country: state.searchForm.country,
  city: state.searchForm.city,
  year: state.searchForm.year,
  eventPlace: state.searchForm.venue,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
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

  manageSubmit: () => {
    dispatch(submitEventsSearch());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
