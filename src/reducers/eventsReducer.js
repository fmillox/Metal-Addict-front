const initialState = {
  searchEvents: [],

  userEvents: [],

  loading: false,
};

function eventReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default eventReducer;
