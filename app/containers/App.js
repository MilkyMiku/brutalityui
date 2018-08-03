import React, { Component } from 'react';
import { ToastContainer, cssTransition } from 'react-toastify';
import Header from '../components/Header';
import RightBar from './RightBarContainer';
import LeftBar from './LeftBarContainer';
import Footer from './FooterContainer';

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
    const wrapper = {
      paddingTop: '31px',
      paddingLeft: '210px',
      paddingBottom: '2em',
      height: '100%',
      width: '100%'
    };
    console.log({ Zoom });
    return (
      <div>
        <Header />
        <LeftBar />
        <RightBar />
        <div style={wrapper}>{this.props.children}</div>
        <Footer />
        <ToastContainer transition={Zoom} position="bottom-right" />
      </div>
    );
  }
}
