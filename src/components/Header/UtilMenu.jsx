import React from 'react'
import { Link } from 'gatsby'
import { Menu, Dropdown } from 'antd'
import { FaKey, FaComments, FaUser } from 'react-icons/fa'

import SiteSearch from './SiteSearch.jsx'

class UtilMenu extends React.Component {

  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4']

  render() {
    return (
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
        <Menu.Item key="site-search" id="site-search">
          <SiteSearch/>
        </Menu.Item>
      </Menu>
    )
  }
}

export default UtilMenu

const MyAccountMenu = (
  <Menu title="My Account">
    <Menu.Item key="qcat">
      <a href="https://qcat.library.queensu.ca/vwebv/myAccount">
        My Library Account (QCAT)
      </a>
    </Menu.Item>
    <Menu.Item key="racer">
      <a href="https://racer2.scholarsportal.info">Interlibrary Loan (RACER)</a>
    </Menu.Item>
    <Menu.Item key="ares">
      <a href="https://ereserves.library.queensu.ca/ares/">
        Course eReserves (Ares)
      </a>
    </Menu.Item>
    <Menu.Item key="onq">
      <a href="https://onq.queensu.ca">onQ (Learning Management System)</a>
    </Menu.Item>
    <Menu.Item key="printq">
      <a href="https://studentweb.housing.queensu.ca/">
        Tri-Colour Cash (PrintQ)
      </a>
    </Menu.Item>
    <Menu.Item key="o365">
      <a href="https://outlook.com/queensu.ca">Office 365</a>
    </Menu.Item>
  </Menu>
)
