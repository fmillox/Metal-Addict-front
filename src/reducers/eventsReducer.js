import { SAVE_EVENTS_RESULTS} from 'src/actions/events'

const initialState = {
  searchEvents: [],

  userEvents: [],

  loading: false,
};

function eventReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_EVENTS_RESULTS:
      return {
        ...state,
        searchEvents: action.events,
      };

    default:
      return state;
  }
}

export default eventReducer;
