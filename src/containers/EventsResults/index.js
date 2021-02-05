import { connect } from 'react-redux';

// on importe le composant de présentation
import EventsResults from 'src/components/EventsResults';

import { fetchSetListApiMoreEvents } from 'src/actions/events';

import { checkMoreEventsInSetListApi } from 'src/utils';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loadingEvents: state.events.searchEvents === null,
  events: state.events.searchEvents,
  moreEvents: checkMoreEventsInSetListApi(state.events.searchEvents),
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  manageMoreEventsSubmit: (history) => {
    dispatch(fetchSetListApiMoreEvents(history));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(EventsResults);
