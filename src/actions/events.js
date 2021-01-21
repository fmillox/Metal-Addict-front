export const SAVE_EVENTS_RESULTS = 'SAVE_EVENTS_RESULTS';

export const saveEventsResults = (events) => ({
  type: SAVE_EVENTS_RESULTS,
  events,
});
