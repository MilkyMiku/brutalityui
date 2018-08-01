import React, { Component } from 'react';
import TitleBar from 'react-window-titlebar';

const remote = window.require('electron').remote; // get remote object from electron which helps Titlebar to control window actions

class Header extends Component {
  render() {
    const titlebarStyle = {
      backgroundColor: 'rgb(27, 28, 29)'
    };

    const sideButtons = [
      // Version Number
      <p style={{ color: 'white', WebkitAppRegion: 'drag' }}>
        Version MOO {React.version}
      </p>
    ];

    return (
      <TitleBar
        title="Title Here"
        remote={remote}
        theme="dark"
        actionsPos="right"
        buttons={sideButtons}
        style={titlebarStyle}
      />
    );
  }
}

export default Header;
