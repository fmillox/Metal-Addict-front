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
import { resetReviewManage } from 'src/actions/reviewManage';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loadingEvent: state.event.loading || state.event.data === null,
  event: state.event.data,
  currentUser: state.auth.user,
  participatedUsers: state.event.users,
  loadingReviews: state.reviews.loading,
  reviews: state.reviews.eventReviews,
  loadingPictures: state.pictures.loading,
  pictures: state.pictures.eventPictures,
  loadingUploadPicture: state.event.loadingUploadPicture,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadEventDatas: (setlistId, history) => {
    dispatch(fetchEvent(setlistId, history));
    dispatch(fetchUsersParticipateInEvent(setlistId, history));
    dispatch(fetchEventReviews(setlistId, history));
    dispatch(fetchEventPictures(setlistId, history));
    dispatch(resetReviewManage());
  },
  userParticipateInEvent: (setlistId, history) => {
    dispatch(userParticipateInEvent(setlistId, history));
  },
  manageUploadPicture: (formData, history) => {
    dispatch(uploadPicture(formData, history));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Event);
