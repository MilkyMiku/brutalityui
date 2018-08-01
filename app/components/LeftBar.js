import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchString: '' };
  }

  render() {
    return (
      <Menu className="left-menu" inverted floated vertical fixed="left">
        <Menu.Item>
          <Menu.Header>Profile</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/"
              activeClassName="active"
              exact
              key="Home"
            >
              Home
            </Menu.Item>

            <Menu.Item
              onClick={() => {
                console.log('Add Login Logic!');
              }}
            >
              <Icon name="sign in" />Login
            </Menu.Item>

            <Menu.Item
              as={NavLink}
              to="/settings"
              activeClassName="active"
              exact
              key="Settings"
            >
              <Icon name="setting" /> Settings
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftBar;
