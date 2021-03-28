import { connect } from 'react-redux';

import Events from 'src/components/Events';

const mapStateToProps = (state) => ({
  loadingEvents: state.events.loading,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
