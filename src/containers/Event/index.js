import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
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

const mapDispatchToProps = (dispatch) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Event);
