export const SET_LOADING_EVENTS = 'SET_LOADING_EVENTS';
export const SAVE_EVENTS_RESULTS = 'SAVE_EVENTS_RESULTS';
export const FETCH_SET_LIST_API_MORE_EVENTS = 'FETCH_SET_LIST_API_MORE_EVENTS';
export const SAVE_SET_LIST_API_MORE_EVENTS = 'SAVE_SET_LIST_API_MORE_EVENTS';
export const HIDE_SEARCH_EVENTS = 'HIDE_SEARCH_EVENTS';
export const FETCH_USER_EVENTS = 'FETCH_USER_EVENTS';
export const SAVE_USER_EVENTS = 'SAVE_USER_EVENTS';

export const setLoadingEvents = (value) => ({
  type: SET_LOADING_EVENTS,
  value,
});

export const fetchSetListApiMoreEvents = (history) => ({
  type: FETCH_SET_LIST_API_MORE_EVENTS,
  history,
});

export const saveSetListApiMoreEvents = (events) => ({
  type: SAVE_SET_LIST_API_MORE_EVENTS,
  events,
});

export const saveEventsResults = (events) => ({
  type: SAVE_EVENTS_RESULTS,
  events,
});

export const hideSearchEvents = () => ({
  type: HIDE_SEARCH_EVENTS,
});

export const fetchUserEvents = (userId, history) => ({
  type: FETCH_USER_EVENTS,
  userId,
  history,
});

export const saveUserEvents = (events) => ({
  type: SAVE_USER_EVENTS,
  events,
});
