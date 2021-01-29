import { connect } from 'react-redux';

import {
  fetchUserEvents,
  fetchUserReviews,
  fetchUserPictures,
  fetchUserDatas,
  displayEvents,
  displayReviews,
  displayPictures,
} from 'src/actions/users';
// on importe le composant de présentation
import Profile from 'src/components/Profile';

// import pictures from 'src/datas/pictures';
// import reviews from 'src/datas/reviews';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  avatar: state.user.avatar, // TODO à retirer quand on récupérera les infos de l'user avec le back
  user: state.user.user,
  userEvents: state.events.userEvents !== null ? state.events.userEvents.setlist : [],
  userReviews: state.reviews.userReviews,
  userPictures: state.pictures.userPictures,
  eventsLoading: state.events.loading,
  reviewsLoading: state.reviews.loading,
  picturesLoading: state.pictures.loading,
  userLoading: state.user.loading,
  showEvents: state.user.showEvents,
  showReviews: state.user.showReviews,
  showPictures: state.user.showPictures,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadUserDatas: (userId) => {
    dispatch(fetchUserDatas(userId));
    dispatch(fetchUserEvents(userId));
    dispatch(fetchUserReviews(userId));
    dispatch(fetchUserPictures(userId));
  },
  seeEvents: () => dispatch(
    displayEvents(),
  ),
  seeReviews: () => dispatch(
    displayReviews(),
  ),
  seePictures: () => dispatch(
    displayPictures(),
  ),
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
