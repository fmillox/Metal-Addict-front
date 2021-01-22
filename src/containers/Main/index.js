import { connect } from 'react-redux';

// on importe le composant de présentation
import Main from 'src/components/Main';

import { fetchSetListApiMoreEvents } from 'src/actions/events';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  showEventsResults: !state.events.loading && (state.events.searchEvents !== null),
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  manageMoreEventsSubmit: () => dispatch(fetchSetListApiMoreEvents()),
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Main);
