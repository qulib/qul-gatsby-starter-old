import React from 'react'
import { Menu } from 'antd'

class MainMenuDesktop extends React.Component {
  rootSubmenuKeys = ['search', 'help-services', 'locations-hours', 'about-us']

  state = {
    openKeys: ['']
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
        {this.props.children}
      </Menu>
    )
  }
}

export default MainMenuDesktop