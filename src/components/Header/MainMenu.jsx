import React from 'react'
import { Link } from 'gatsby'
import { Menu, Drawer } from 'antd'
import windowSize from 'react-window-size'
import { FaBars } from 'react-icons/fa'

const SubMenu = Menu.SubMenu
const mobileBreakpoint = 1185

const SearchMenu = (
  // <SubMenu key="search" title={<span>Search</span>}>
  <SubMenu key="search" title="Search">
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
  <SubMenu key="help-services" title="Help &amp; Services">
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
  <SubMenu key="locations-hours" title="Locations &amp; Hours">
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
  <SubMenu key="about-us" title="About Us">
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

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
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
      <div id="main-nav">
        {this.props.windowWidth < mobileBreakpoint ? (
          <>
            <button className="mobile-nav-btn" onClick={this.showDrawer}>
              <FaBars />
            </button>

            <Drawer
              onClose={this.onClose}
              visible={this.state.visible}
              placement="left"
            >
              <Menu
                className="qul-menu mobile"
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                selectable={false}
              >
                {SearchMenu}
                {HelpServicesMenu}
                {LocationsHoursMenu}
                {AboutUsMenu}
              </Menu>
            </Drawer>
          </>
        ) : (
          <Menu
            className="qul-menu desktop"
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            selectable={false}
            subMenuOpenDelay={1}
            subMenuCloseDelay={1}
          >
            {SearchMenu}
            {HelpServicesMenu}
            {LocationsHoursMenu}
            {AboutUsMenu}
          </Menu>
        )}
      </div>
    )
  }
}

export default windowSize(MainMenu)
