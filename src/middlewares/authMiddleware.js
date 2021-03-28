import axios from 'axios';

import {
  LOG_IN,
  REGISTER_NEW_USER,
  UPLOAD_AVATAR,
  EDIT_USER,
  saveUser,
  isNotAuthorized,
  setLoadingAvatar,
  saveAvatar,
  redirectTo,
  setLoadingEditUser,
  saveEditedUser,
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
            // console.log(error);
            action.history.push('/erreur');
          }
        });
      next(action);
      break;
    }

    case REGISTER_NEW_USER: {
      axios.post('/user', {
        email: action.email,
        password: action.password,
        nickname: action.nickname,
      })
        .then((response) => {
          action.history.push('/connexion');
        })
        .catch((error) => {
          // console.log(error);
          action.history.push('/erreur');
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
            // console.log(error);
            action.history.push('/erreur');
          }
        })
        .finally(() => {
          store.dispatch(setLoadingAvatar(false));
        });
      next(action);
      break;
    }

    case EDIT_USER: {
      const { user, token } = store.getState().auth;

      store.dispatch(setLoadingEditUser(true));
      axios.patch(`/user/${user.id}`, {
        nickname: action.nickname,
        biography: action.biography,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          store.dispatch(saveEditedUser(action.nickname, action.biography));
          action.history.push(`/utilisateur/${action.slug}`);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(redirectTo(action.history.location.pathname));
            action.history.push('/connexion');
          }
          else {
            // console.log(error);
            action.history.push('/erreur');
          }
        })
        .finally(() => {
          store.dispatch(setLoadingEditUser(false));
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default authMiddleware;
