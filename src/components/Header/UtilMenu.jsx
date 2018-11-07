import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'antd'
import { FaKey } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'

const SubMenu = Menu.SubMenu

class UtilMenu extends React.Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4']

  render() {
    return (
      <Menu
        id="util-nav"
        mode="inline"
        onOpenChange={this.onOpenChange}
        selectable={false}
      >
        <Menu.Item key="mail">
          <Link to="/">
            <FaKey className="anticon" />
            Off-Campus Access
          </Link>
        </Menu.Item>
        <Menu.Item key="ask-us">
          <Link to="/">
            <FaComments className="anticon" />
            Ask Us
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <FaUser className="anticon" />
              My Account
            </span>
          }
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </SubMenu>
        <Menu.Item key="search">
          <Link to="/">
            <FaSearch className="anticon" />
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default UtilMenu
