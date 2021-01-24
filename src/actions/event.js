export const SET_LOADING_EVENT = 'SET_LOADING_EVENT';
export const FETCH_EVENT = 'FETCH_EVENT';
export const SAVE_EVENT = 'SAVE_EVENT';

export const setLoadingEvent = (value) => ({
  type: SET_LOADING_EVENT,
  value,
});

export const fetchEvent = (setlistId) => ({
  type: FETCH_EVENT,
  setlistId,
});

export const saveEvent = (event) => ({
  type: SAVE_EVENT,
  event,
});
