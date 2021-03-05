import {
  SET_LOADING_EVENTS,
  SAVE_EVENTS_RESULTS,
  SAVE_SET_LIST_API_MORE_EVENTS,
  HIDE_SEARCH_EVENTS,
} from 'src/actions/events';

import { RESET_HOME_PAGE } from 'src/actions/home';

import { SAVE_USER_EVENTS } from 'src/actions/users';

const initialState = {
  /* events found after a search" */
  searchEvents: null,
  /* indicate to show the search results */
  showSearchEvents: false,
  /* events that a specific user has participated" */
  userEvents: null,
  /* indicate if the events are loading */
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
    case SAVE_USER_EVENTS:
      return {
        ...state,
        userEvents: action.events,
      };
    case HIDE_SEARCH_EVENTS:
      return {
        ...state,
        searchEvents: null,
        showSearchEvents: false,
      };
    default:
      return state;
  }
}

export default eventsReducer;
