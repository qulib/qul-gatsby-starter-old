import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'antd'

class FooterMenu extends React.Component {
  render() {
    return (
      <Menu id="footer-nav" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Option</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/">Option</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/">Option</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default FooterMenu
