export const FETCH_BANDS = 'FETCH_BANDS';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const UPDATE_BANDS = 'UPDATE_BANDS';
export const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';
export const UPDATE_BAND = 'UPDATE_BAND';
export const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_YEAR = 'UPDATE_YEAR';
export const UPDATE_EVENTPLACE = 'UPDATE_EVENTPLACE';
export const SUBMIT_EVENTS_SEARCH = 'SUBMIT_EVENTS_SEARCH';
export const UPDATE_LOADING_BANDS = 'UPDATE_LOADING_BANDS';
export const UPDATE_LOADING_COUNTRIES = 'UPDATE_LOADING_COUNTRIES';

export const fetchBands = () => ({
  type: FETCH_BANDS,
});

export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
});

export const updateBands = (bands) => ({
  type: UPDATE_BANDS,
  bands,
});

export const updateCountries = (countries) => ({
  type: UPDATE_COUNTRIES,
  countries,
});

export const updateBand = (value) => ({
  type: UPDATE_BAND,
  value,
});

export const updateCountry = (value) => ({
  type: UPDATE_COUNTRY,
  value,
});

export const updateCity = (value) => ({
  type: UPDATE_CITY,
  value,
});

export const updateYear = (value) => ({
  type: UPDATE_YEAR,
  value,
});

export const updateEventPlace = (value) => ({
  type: UPDATE_EVENTPLACE,
  value,
});

export const submitEventsSearch = () => ({
  type: SUBMIT_EVENTS_SEARCH,
});

export const updatedLoadingBands = () => ({
  type: UPDATE_LOADING_BANDS,
});

export const updatedLoadingCountries = () => ({
  type: UPDATE_LOADING_COUNTRIES,
});
