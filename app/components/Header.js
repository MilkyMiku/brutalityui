import React, { Component } from 'react';
import TitleBar from 'react-window-titlebar';

const remote = window.require('electron').remote; // get remote object from electron which helps Titlebar to control window actions

class Header extends Component {
  render() {
    const sideButtons = [
      // Version Number
      <p
        style={{
          color: 'white',
          WebkitAppRegion: 'drag'
        }}
      >
        Brutality UI
      </p>
    ];

    return (
      // title="title"
      // TODO: Add title

      <TitleBar remote={remote} actionsPos="right" buttons={sideButtons} />
    );
  }
}

export default Header;
