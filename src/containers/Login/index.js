import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { resetHomePage } from 'src/actions/home';
import { logIn } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  notAuthorized: state.auth.notAuthorized,
});

const mapDispatchToProps = (dispatch) => ({
  resetHomePage: () => {
    dispatch(resetHomePage());
  },
  handleLogin: (email, password, history) => {
    dispatch(logIn(email, password, history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
