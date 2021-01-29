import axios from 'axios';

import { LOG_IN, REGISTER_NEW_USER, saveUser } from 'src/actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case LOG_IN: {
      const { redirect } = store.getState().auth;

      axios.post('/login', {
        username: action.email,
        password: action.password,
      })
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUser(response.data.token));
          action.history.push(redirect);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            // TODO
          }
          else {
            console.log(error);
          }
        });
      next(action);
      break;
    }

    case REGISTER_NEW_USER: {
      axios.post('/user', {
        email: action.email,
        password: action.password,
        // passwordConfirmed: action.passwordConfirmed,
        nickname: action.nickname,
      })
        .then((response) => {
          console.log(response);
          action.history.push('/connexion');
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
