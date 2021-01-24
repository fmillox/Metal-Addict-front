export const SET_LOADING_EVENTS = 'SET_LOADING_EVENTS';
export const SAVE_EVENTS_RESULTS = 'SAVE_EVENTS_RESULTS';
export const FETCH_SET_LIST_API_MORE_EVENTS = 'FETCH_SET_LIST_API_MORE_EVENTS';
export const SAVE_SET_LIST_API_MORE_EVENTS = 'SAVE_SET_LIST_API_MORE_EVENTS';

export const setLoadingEvents = (value) => ({
  type: SET_LOADING_EVENTS,
  value,
});

export const fetchSetListApiMoreEvents = () => ({
  type: FETCH_SET_LIST_API_MORE_EVENTS,
});

export const saveSetListApiMoreEvents = (events) => ({
  type: SAVE_SET_LIST_API_MORE_EVENTS,
  events,
});

export const saveEventsResults = (events) => ({
  type: SAVE_EVENTS_RESULTS,
  events,
});
