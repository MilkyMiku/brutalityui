import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { persistStore } from 'redux-persist';
import Routes from '../routes';

type RootType = {
  store: {},
  history: {}
};

export default class Root extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(this.props.store, {}, () => {
      // The state is now rehydrated
      this.setState({ rehydrated: true });
    });
  }

  render() {
    const { store, history }: RootType = this.props;

    if (!this.state.rehydrated) {
      return (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      );
      // return <div>Moo</div>;
    }

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
