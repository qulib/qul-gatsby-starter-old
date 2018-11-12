import React from 'react'
import { Link } from 'gatsby'
import { Menu, Dropdown } from 'antd'
import { FaKey, FaComments, FaUser } from 'react-icons/fa'

import SiteSearch from './SiteSearch.jsx'

const MyAccountMenu = (
  <Menu title="My Account">
    <Menu.Item key="setting:1">
      <a href="https://qcat.library.queensu.ca/vwebv/myAccount">
        My Library Account (QCAT)
      </a>
    </Menu.Item>
    <Menu.Item key="setting:1">
      <a href="https://racer2.scholarsportal.info">Interlibrary Loan (RACER)</a>
    </Menu.Item>
    <Menu.Item key="setting:1">
      <a href="https://ereserves.library.queensu.ca/ares/">
        Course eReserves (Ares)
      </a>
    </Menu.Item>
    <Menu.Item key="setting:1">
      <a href="https://onq.queensu.ca">onQ (Learning Management System)</a>
    </Menu.Item>
    <Menu.Item key="setting:1">
      <a href="https://studentweb.housing.queensu.ca/">
        Tri-Colour Cash (PrintQ)
      </a>
    </Menu.Item>
    <Menu.Item key="setting:1">
      <a href="https://outlook.com/queensu.ca">Office 365</a>
    </Menu.Item>
  </Menu>
)

class UtilMenu extends React.Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4']

  render() {
    return (
      <div>
        <Menu id="util-nav" mode="inline" selectable={false}>
          <Menu.Item key="off-campus">
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
          <Menu.Item key="my-account">
            <Dropdown overlay={MyAccountMenu} trigger={['click']}>
              <button className="ant-dropdown-link">
                <FaUser className="anticon" />
                My Account
              </button>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="search">
            <SiteSearch />
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default UtilMenu
