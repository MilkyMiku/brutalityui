import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import WhatNotToDoList from './components/WhatNotToDoList';
import App from './containers/App';

import Home from './components/Home';

import { loginSuccess, loginError } from './actions';

class routes extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/WhatNotToDoList" component={WhatNotToDoList} exact />
        </Switch>
      </App>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: success => dispatch(loginSuccess(success)),
    loginError: error => dispatch(loginError(error))
  };
};

const Routes = withRouter(connect(mapDispatchToProps)(routes));
export default Routes;
