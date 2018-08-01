import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
  render() {
    const leftStyle = {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textAlign: 'left',
      color: 'white',
      height: '100%',
      width: '50%',
      paddingLeft: '1em',
      paddingTop: '0.19em',
      userSelect: 'none'
    };
    return (
      <footer className="footer">
        <div className="footerLeft">
          <NavLink to="#" activeClassName="active" exact>
            <span>Footer Left</span>
          </NavLink>
        </div>

        <span
          style={{
            color: 'white',
            paddingTop: '0.15em'
          }}
        >
          0%
        </span>

        <div
          style={{
            width: '50%',
            paddingRight: '1em',
            paddingTop: '0.15em'
          }}
        >
          <a
            style={{
              float: 'right',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textAlign: 'right',
              userSelect: 'none'
            }}
            onClick={() => {
              this.props.toggleBar(this.props.isVisable);
            }}
          >
            Notifications <span style={{ color: 'LightGreen' }}>(3)</span>
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
