export const SET_LOADING = 'SET_LOADING';
export const FETCH_SET_LIST_API_MORE_EVENTS = 'FETCH_SET_LIST_API_MORE_EVENTS';
export const SAVE_SET_LIST_API_MORE_EVENTS = 'SAVE_SET_LIST_API_MORE_EVENTS';

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const fetchSetListApiMoreEvents = () => ({
  type: FETCH_SET_LIST_API_MORE_EVENTS,
});

export const saveSetListApiMoreEvents = (events) => ({
  type: SAVE_SET_LIST_API_MORE_EVENTS,
  events,
});
