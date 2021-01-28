import axios from 'axios';

import {
  LOG_IN,
  saveUser,
  setLoading,
  REGISTER,
} from 'src/actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case LOG_IN: {
      store.dispatch(setLoading(true));
      const { email, password } = store.getState().auth;
      axios.post('/login', {
        username: email,
        password,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUser(response.data.token));
          action.history.goBack();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      next(action);
      break;
    }

    case REGISTER: {
      axios.post('/user', {
        username: action.email,
        password: action.password,
        nickname: action.nickname,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authMiddleware;
