import {
  SET_LOADING,
  SAVE_SET_LIST_API_MORE_EVENTS,
} from 'src/actions/events';

import data from 'src/datas/events';

const initialState = {
  searchEvents: data, // null,

  userEvents: [],

  loading: false,
};

function eventReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SAVE_SET_LIST_API_MORE_EVENTS: {
      const newSearchEvents = { ...state.searchEvents };
      newSearchEvents.setlist.push(...action.events.setlist);
      newSearchEvents.page = action.events.page;
      return {
        ...state,
        searchEvents: newSearchEvents,
      };
    }
    default:
      return state;
  }
}

export default eventReducer;
