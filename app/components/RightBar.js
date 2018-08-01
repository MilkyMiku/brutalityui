import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

class RightBar extends Component {
  render() {
    const menuStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      width: 200,
      paddingTop: '4em',
      marginTop: '-2em',
      paddingBottom: '2em !important',
      overflowY: 'auto',
      backgroundColor: '#272A2B'
    };
    return (
      <Sidebar
        animation="scale down"
        as={Menu}
        style={menuStyle}
        direction="right"
        fixed="right"
        visible={this.props.isVisable}
        id="right-bar"
        vertical
        inverted
      >
        <Menu.Item>
          <Menu.Header>Notifications</Menu.Header>
        </Menu.Item>

        <Menu.Item>
          <Menu.Menu>
            <Menu.Item name="Test">
              <p style={{ color: 'white' }}>Random Notification</p>
              <p>Good Job!</p>
              <p>You found the notification sidebar</p>
              <p>You truly are amazing!</p>
              <p>Amazing!</p>
              <p>
                <span style={{ color: 'LightGreen' }}>
                  10 Points To Gryffindor
                </span>
              </p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Menu>
            <Menu.Item name="Test2">
              <p style={{ color: 'white' }}>Random Notification 2</p>
              <p>Wow another notification!</p>
              <p>These are really just hardcoded messages for now</p>
              <p>
                But I'm sure at some point they'll consume a json api to make
                things nice and easy
              </p>
              <p>
                Fingers Crossed <Icon name="smile" />
              </p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Menu>
            <Menu.Item name="Test3">
              <p style={{ color: 'white' }}>New Update Available</p>
              <p>Version 2.0!</p>
              <p>This version isn't even out yet, lucky you!</p>
              <a style={{ display: 'block' }}>Click Here To Update</a>
              <a className="a" style={{ display: 'block' }}>
                Click Here For Full Changelog
              </a>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Sidebar>
    );
  }
}
export default RightBar;
