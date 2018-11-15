import React from 'react'

import { Menu, Drawer, Button } from 'antd'

class MobileMenu extends React.Component {
  rootSubmenuKeys = ['search', 'help-services', 'locations-hours', 'about-us']

  state = {
    openKeys: ['']
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
      <>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          onClose={this.onClose}
          visible={this.state.visible}
          placement="left"
        >
          <Menu
            id="mobile-nav"
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            selectable={false}
          >
            {this.props.children}
          </Menu>
        </Drawer>
      </>
    )
  }
}

export default MobileMenu
