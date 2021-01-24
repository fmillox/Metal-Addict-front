const initialState = {
  eventPictures: [],

  reviewPictures: [],

  userPictures: [],

  loading: false,
};

function picturesReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default picturesReducer;
