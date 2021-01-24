import {
  SET_LOADING_EVENTS,
  SAVE_EVENTS_RESULTS,
  SAVE_SET_LIST_API_MORE_EVENTS,
} from 'src/actions/events';

import { RESET_HOME_PAGE } from 'src/actions/home';

const initialState = {
  searchEvents: null,

  showSearchEvents: false,

  userEvents: [],

  loading: false,
};

function eventsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_EVENTS:
      return {
        ...state,
        loading: action.value,
      };
    case SAVE_EVENTS_RESULTS:
      return {
        ...state,
        searchEvents: action.events,
        showSearchEvents: true,
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
    case RESET_HOME_PAGE:
      return {
        ...state,
        searchEvents: null,
        showSearchEvents: false,
        loading: false,
      };
    default:
      return state;
  }
}

export default eventsReducer;
