import axios from 'axios';

import {
  LOG_IN,
  REGISTER_NEW_USER,
  UPLOAD_AVATAR,
  saveUser,
  isNotAuthorized,
  setLoadingAvatar,
  saveAvatar,
  redirectTo,
} from 'src/actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { redirect } = store.getState().auth;

      axios.post('/login', {
        username: action.email,
        password: action.password,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data.token));
          action.history.push(redirect);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(isNotAuthorized());
          }
          else {
            console.log(error);
            // TODO : action.history.push('...');
          }
        });
      next(action);
      break;
    }

    case REGISTER_NEW_USER: {
      axios.post('/user', {
        email: action.email,
        password: action.password,
        // passwordConfirmed: action.passwordConfirmed, // TODO : check with back
        nickname: action.nickname,
      })
        .then((response) => {
          action.history.push('/connexion');
        })
        .catch((error) => {
          console.log(error);
          // TODO : action.history.push('...');
        });
      next(action);
      break;
    }

    case UPLOAD_AVATAR: {
      const { user, token } = store.getState().auth;

      store.dispatch(setLoadingAvatar(true));
      axios.post(`/user/avatar/${user.id}`, action.formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          store.dispatch(saveAvatar(response.data));
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(redirectTo(action.history.location.pathname));
            action.history.push('/connexion');
          }
          else {
            console.log(error);
            // TODO : action.history.push('...');
          }
        })
        .finally(() => {
          store.dispatch(setLoadingAvatar(false));
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default authMiddleware;
