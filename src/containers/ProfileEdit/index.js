import { connect } from 'react-redux';

import ProfileEdit from 'src/components/ProfileEdit';

import { editUser } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loadingSubmit: state.auth.loadingEdit,
});

const mapDispatchToProps = (dispatch) => ({
  manageSubmit: (nickname, biography, history, slug) => {
    dispatch(editUser(nickname, biography, history, slug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
