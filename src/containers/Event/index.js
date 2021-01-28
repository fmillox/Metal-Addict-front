import { connect } from 'react-redux';

// on importe le composant de présentation
import Event from 'src/components/Event';

import { fetchEvent, fetchUsersParticipateInEvent, userParticipateInEvent } from 'src/actions/event';
import { fetchEventReviews } from 'src/actions/reviews';

import { checkUserParticipatedInEvent, checkUserPublishedAnEventReview } from 'src/utils';

import img from 'src/assets/images/band.jpg';
import pictures from 'src/datas/pictures';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loadingEvent: state.event.loading || state.event.data === null,
  event: state.event.data,
  // eslint-disable-next-line max-len
  isUserParticipatedInEvent: state.event.users.find((user) => user.id === 2) !== undefined && state.auth.token !== null,
  // eslint-disable-next-line max-len
  // TODO : isUserParticipatedInEvent: checkUserParticipatedInEvent(state.event.users, state.auth.user),
  isUserPublishedAnEventReview: true,
  // eslint-disable-next-line max-len
  // TODO : isUserPublishedAnEventReview: checkUserPublishedAnEventReview(state.reviews.eventReviews, state.auth.user),
  picture: img, // TODO : V2 - THE API RETURNS THE PICTURE !!! picture: state.event.something
  loadingReviews: state.reviews.loading,
  reviews: state.reviews.eventReviews,
  loadingPictures: state.pictures.loading,
  pictures,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadEventDatas: (setlistId, history) => {
    dispatch(fetchEvent(setlistId, history));
    dispatch(fetchUsersParticipateInEvent(setlistId));
    dispatch(fetchEventReviews(setlistId));
  },
  userParticipateInEvent: (setlistId, history) => {
    dispatch(userParticipateInEvent(setlistId, history));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Event);
