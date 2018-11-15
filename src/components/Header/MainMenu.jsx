import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'antd'
import windowSize from 'react-window-size'

import MainMenuDesktop from './MainMenuDesktop.jsx'
import MainMenuMobile from './MainMenuMobile.jsx'

const SubMenu = Menu.SubMenu
const mobileBreakpoint = 1185

const SearchMenu = (
  <SubMenu key="search" title={<span>Search</span>}>
    <Menu.Item key="1">
      <Link to="/">Search</Link>
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
)

const HelpServicesMenu = (
  <SubMenu key="help-services" title={<span>Help &amp; Services</span>}>
    <Menu.Item key="1">
      <Link to="/">Help &amp; Services</Link>
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
)

const LocationsHoursMenu = (
  <SubMenu key="locations-hours" title={<span>Locations &amp; Hours</span>}>
    <Menu.Item key="1">
      <Link to="/">Locations &amp; Hours</Link>
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
)

const AboutUsMenu = (
  <SubMenu key="about-us" title={<span>About Us</span>}>
    <Menu.Item key="1">
      <Link to="/">About Us</Link>
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
)

class MainMenu extends React.Component {
  rootSubmenuKeys = ['search', 'help-services', 'locations-hours', 'about-us']

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
      <>
        {this.props.windowWidth < mobileBreakpoint ? (
          <MainMenuMobile>
            {SearchMenu}
            {HelpServicesMenu}
            {LocationsHoursMenu}
            {AboutUsMenu}
          </MainMenuMobile>
        ) : (
          <MainMenuDesktop>
            {SearchMenu}
            {HelpServicesMenu}
            {LocationsHoursMenu}
            {AboutUsMenu}
          </MainMenuDesktop>
        )}
      </>
    )
  }
}

export default windowSize(MainMenu)
