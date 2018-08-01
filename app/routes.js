import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';

import App from './containers/App';
import Header from './components/Header';
import LeftBar from './containers/LeftBarContainer';
import RightBar from './containers/RightBarContainer';
import Home from './components/Home';

import { loginSuccess, loginError } from './actions';

class routes extends Component {
  render() {
    return (
      <App>
        <div style={{ overflowY: 'auto', height: '100%' }}>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </App>
    );
  }
}
const mapStateToProps = state => {
  const { isVisable } = state.rightbar;
  return {
    isVisable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: success => dispatch(loginSuccess(success)),
    loginError: error => dispatch(loginError(error))
  };
};

const Routes = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(routes)
);
export default Routes;
