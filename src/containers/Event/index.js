import { connect } from 'react-redux';

// on importe le composant de présentation
import Event from 'src/components/Event';

import {
  fetchEvent,
  fetchUsersParticipateInEvent,
  userParticipateInEvent,
  uploadPicture,
} from 'src/actions/event';
import { fetchEventReviews } from 'src/actions/reviews';
import { fetchEventPictures } from 'src/actions/pictures';

import { checkUserParticipatedInEvent, checkUserPublishedAnEventReview } from 'src/utils';

import img from 'src/assets/images/band.jpg';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loadingEvent: state.event.loading || state.event.data === null,
  event: state.event.data,
  isUserParticipatedInEvent: checkUserParticipatedInEvent(state.event.users, state.auth.user),
  // eslint-disable-next-line max-len
  isUserPublishedAnEventReview: checkUserPublishedAnEventReview(state.reviews.eventReviews, state.auth.user),
  picture: img, // TODO : V2 - THE API RETURNS THE PICTURE !!! picture: state.event.something
  loadingReviews: state.reviews.loading,
  reviews: state.reviews.eventReviews,
  loadingPictures: state.pictures.loading,
  pictures: state.pictures.eventPictures,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadEventDatas: (setlistId, history) => {
    dispatch(fetchEvent(setlistId, history));
    dispatch(fetchUsersParticipateInEvent(setlistId));
    dispatch(fetchEventReviews(setlistId));
    dispatch(fetchEventPictures(setlistId));
  },
  userParticipateInEvent: (setlistId, history) => {
    dispatch(userParticipateInEvent(setlistId, history));
  },
  manageUploadPicture: (formData) => {
    dispatch(uploadPicture(formData));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Event);
