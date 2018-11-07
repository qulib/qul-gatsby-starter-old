import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'antd'

const SubMenu = Menu.SubMenu
// const ItemGroup = Menu.ItemGroup

class MainMenu extends React.Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4']

  state = {
    openKeys: [''],
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      })
    }
  }

  render() {
    return (
      <Menu
        id="main-nav"
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        selectable={false}
        subMenuOpenDelay={1}
        subMenuCloseDelay={1}
      >
        <SubMenu key="sub1" title={<span>Search</span>}>
          <Menu.Item key="1">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/">Option</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span>Help &amp; Services</span>}>
          <Menu.Item key="1">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/">Option</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span>Locations &amp; Hours</span>}>
          <Menu.Item key="1">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/">Option</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span>About Us</span>}>
          <Menu.Item key="1">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/">Option</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/">Option</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default MainMenu
