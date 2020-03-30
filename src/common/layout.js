import React, { Component } from 'react';
import { Menu } from 'antd';
import {
  SmileFilled,
  PhoneFilled,
  BookFilled
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="smile">
        <SmileFilled />
            <Link to="/home">Home</Link> 
        </Menu.Item>
        <Menu.Item key="bookfilled">
        <BookFilled />
          <Link to="/travel">Let's Travel</Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <PhoneFilled />
              Contact Me
            </span>
          }
        >
        </SubMenu>
      </Menu>
    
    );
  }
}

export default Navbar;