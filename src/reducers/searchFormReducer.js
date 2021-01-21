const initialState = {
  // contenu du champs nom du groupe
  band: null,

  country: null,

  city: '',

  year: null,

  venue: '',

  loadingBands: false,

  loadingCountries: false,

  bands: [],

  countries: [],
};

function searchFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default searchFormReducer;
