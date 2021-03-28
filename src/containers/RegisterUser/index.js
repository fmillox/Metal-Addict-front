import { connect } from 'react-redux';

import RegisterUser from 'src/components/RegisterUser';

import { resetHomePage } from 'src/actions/home';
import { registerNewUser } from 'src/actions/auth';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  resetHomePage: () => {
    dispatch(resetHomePage());
  },
  registerNewUser: (email, password, passwordConfirmed, nickname, history) => {
    dispatch(registerNewUser(email, password, passwordConfirmed, nickname, history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
