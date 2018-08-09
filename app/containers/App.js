import React, { Component } from 'react';
import { ToastContainer, cssTransition } from 'react-toastify';
import Header from '../components/Header';
import LeftBar from './LeftBarContainer';

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  // default to 750ms, can be omitted
  duration: 400
});

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div>
        <Header />
        <LeftBar />
        <div className="appWrapper">{this.props.children}</div>
        <ToastContainer transition={Zoom} position="bottom-right" />
      </div>
    );
  }
}
