import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { loginRequest, logoutSuccess } from '../actions';

import LeftBar from '../components/LeftBar';

const mapStateToProps = state => {
  const { isAuthenticated, profile, error } = state.auth;

  return {
    isAuthenticated,
    profile,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(loginRequest()),
  logoutSuccess: () => dispatch(logoutSuccess())
});

const LeftBarContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LeftBar)
);

export default LeftBarContainer;
