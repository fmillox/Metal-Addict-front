import {
  UPDATE_BANDS,
  UPDATE_COUNTRIES,
  UPDATE_BAND,
  UPDATE_COUNTRY,
  UPDATE_CITY,
  UPDATE_YEAR,
  UPDATE_EVENTPLACE,
} from 'src/actions/searchForm';

const initialState = {
  // contenu du champs nom du groupe
  band: null,

  country: null,

  city: '',

  year: null,

  venue: '',

  loadingBands: true,

  loadingCountries: true,

  bands: [],

  countries: [],
};

function searchFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_BANDS:
      return {
        ...state,
        bands: action.bands,
        loadingBands: false,
      };

    case UPDATE_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
        loadingCountries: false,
      };

    case UPDATE_BAND:
      return {
        ...state,
        band: action.value,
      };

    case UPDATE_COUNTRY:
      return {
        ...state,
        country: action.value,
      };

    case UPDATE_CITY:
      return {
        ...state,
        city: action.value,
      };

    case UPDATE_YEAR:
      return {
        ...state,
        year: action.value,
      };

    case UPDATE_EVENTPLACE:
      return {
        ...state,
        venue: action.value,
      };

    default:
      return state;
  }
}

export default searchFormReducer;
