import axios from 'axios';

import {
  FETCH_USER_DATAS,
  setLoadingUser,
  saveUserDatas,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_DATAS:
      store.dispatch(setLoadingUser(true));
      axios.get(`/user/${action.userId}`)
        .then((response) => {
          store.dispatch(saveUserDatas(response.data));
        })
        .catch((error) => {
          if (error.response.status === 404) {
            action.history.push('/page_non_trouvee');
          }
          else {
            // console.log(error);
            action.history.push('/erreur');
          }
        })
        .finally(() => {
          store.dispatch(setLoadingUser(false));
        });
      next(action);
      break;

    default:
      next(action);
  }
};
export default userMiddleware;
