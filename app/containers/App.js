import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import RightBar from './RightBarContainer';
import LeftBar from './LeftBarContainer';
import Footer from './FooterContainer';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div>
        <Header />
        <LeftBar />
        <RightBar />
        {this.props.children}
        <Footer />
        <ToastContainer position="bottom-center" />
      </div>
    );
  }
}
