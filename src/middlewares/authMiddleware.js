import axios from 'axios';

import { LOG_IN, saveUser } from 'src/actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().auth;
      axios.post('/login', {
        email,
        password,
      })
        .then((response) => {
          console.log(response);
          //store.dispatch(saveUser(true,));
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
