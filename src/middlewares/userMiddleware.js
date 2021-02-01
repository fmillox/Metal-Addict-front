import axios from 'axios';

import { FETCH_USER_DATAS, saveUserDatas, setLoadingUser } from 'src/actions/users';

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
            console.log(error);
            // TODO : action.history.push('...');
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
