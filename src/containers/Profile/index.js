import { connect } from 'react-redux';

import Profile from 'src/components/Profile';

import { fetchUserDatas } from 'src/actions/user';
import { fetchUserEvents } from 'src/actions/events';
import { fetchUserReviews } from 'src/actions/reviews';
import { fetchUserPictures } from 'src/actions/pictures';
import { uploadAvatar } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  loadingUploadAvatar: state.auth.loadingAvatar,
  isConnectedUser: state.auth.user !== null && (state.user.user.id === state.auth.user.id),
  user: state.user.user,
  userEvents: state.events.userEvents !== null ? state.events.userEvents.setlist : [],
  userReviews: state.reviews.userReviews,
  userPictures: state.pictures.userPictures,
  eventsLoading: state.events.loading,
  reviewsLoading: state.reviews.loading,
  picturesLoading: state.pictures.loading,
  userLoading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  manageUploadAvatar: (formData, history) => {
    dispatch(uploadAvatar(formData, history));
  },
  loadUserDatas: (userId, history) => {
    dispatch(fetchUserDatas(userId, history));
    dispatch(fetchUserEvents(userId, history));
    dispatch(fetchUserReviews(userId, history));
    dispatch(fetchUserPictures(userId, history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
