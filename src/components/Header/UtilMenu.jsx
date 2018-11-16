import React from 'react'
import { Link } from 'gatsby'
import { Menu, Dropdown, Input } from 'antd'
import { FaKey, FaComments, FaUser } from 'react-icons/fa'
// import { FaSearch } from 'react-icons/fa'

const Search = Input.Search

// import SiteSearch from './SiteSearch.jsx'

class UtilMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchIsActive: false,
    }

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onFocus() {
    this.setState({ searchIsActive: true })
  }

  onBlur() {
    // console.log('blur')
    this.setState({ searchIsActive: false })
  }

  performSearch = value => {
    console.log(value)
  }

  render() {
    return (
      <span className="util-wrapper">
        <Menu
          id="util-nav"
          mode="inline"
          selectable={false}
          className={
            this.state.searchIsActive ? 'search-active' : 'search-inactive'
          }
        >
          <Menu.Item key="off-campus">
            <Link to="/">
              <FaKey className="anticon" />
              <span className="label">Off-Campus Access</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="ask-us">
            <Link to="/">
              <FaComments className="anticon" />
              <span className="label">Ask Us</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="my-account">
            <Dropdown overlay={MyAccountMenu} trigger={['click']}>
              <button className="ant-dropdown-link">
                <FaUser className="anticon" />
                <span className="label">My Account</span>
              </button>
            </Dropdown>
          </Menu.Item>
          {/* <Menu.Item key="site-search" id="site-search">
          <SiteSearch />
        </Menu.Item> */}
        </Menu>
        <div id="site-search">
          <Search
            placeholder="Search..."
            // ref={this.textInput}
            onSearch={this.performSearch}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            className={this.state.searchIsActive ? 'search-active' : null}
            // enterButton={<FaSearch className="anticon" />}
          />
        </div>
      </span>
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
