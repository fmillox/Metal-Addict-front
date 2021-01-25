import { connect } from 'react-redux';

// on importe le composant de présentation
import Event from 'src/components/Event';

import { fetchEvent } from 'src/actions/event';

import img from 'src/datas/band.jpg';
import data from 'src/datas/reviews';
import pictures from 'src/datas/pictures';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loadingEvent: state.event.loading || state.event.data === null,
  event: state.event.data,
  picture: img, // TODO : THE API RETURNS THE PICTURE !!! picture: state.event.something
  loadingReviews: state.reviews.loading,
  reviews: data, // TODO reviews: state.reviews.eventReviews,
  loadingPictures: state.pictures.loading,
  pictures,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadEvent: (setlistId) => {
    dispatch(fetchEvent(setlistId));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Event);
