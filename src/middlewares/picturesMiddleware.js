import axios from 'axios';

import { setLoadingPictures } from 'src/actions/pictures';
import { FETCH_USER_PICTURES, saveUserPictures } from 'src/actions/users';

const reviewsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_USER_PICTURES:
      store.dispatch(setLoadingPictures(true));
      axios.get(`/picture?userId=${action.userId}`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserPictures(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoadingPictures(false));
        });
      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default reviewsMiddleware;
