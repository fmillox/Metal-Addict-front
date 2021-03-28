import { connect } from 'react-redux';

import Main from 'src/components/Main';

const mapStateToProps = (state) => ({
  // eslint-disable-next-line max-len
  showEventsResults: state.events.showSearchEvents || (state.events.loading && !state.events.showSearchEvents),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
