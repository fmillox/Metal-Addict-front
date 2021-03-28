import { connect } from 'react-redux';

import EventsResults from 'src/components/EventsResults';

import { fetchSetListApiMoreEvents } from 'src/actions/events';
import { checkMoreEventsInSetListApi } from 'src/utils';

const mapStateToProps = (state) => ({
  loadingEvents: state.events.searchEvents === null,
  events: state.events.searchEvents,
  moreEvents: checkMoreEventsInSetListApi(state.events.searchEvents),
});

const mapDispatchToProps = (dispatch) => ({
  manageMoreEventsSubmit: (history) => {
    dispatch(fetchSetListApiMoreEvents(history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsResults);
