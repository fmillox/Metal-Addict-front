import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { resetHomePage } from 'src/actions/home';
import { logOut } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  isLogged: state.auth.user !== null,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  resetHomePage: () => {
    dispatch(resetHomePage());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
