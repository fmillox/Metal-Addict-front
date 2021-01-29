import axios from 'axios';

import { FETCH_USER_DATAS, saveUserDatas, setLoadingUser } from 'src/actions/users';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_USER_DATAS:
      store.dispatch(setLoadingUser(true));
      axios.get(`/user/${action.userId}`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserDatas(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoadingUser(false));
        });
      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
