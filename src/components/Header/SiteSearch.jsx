import React from 'react'
// import { Input } from 'antd'
import { FaSearch, FaTimes } from 'react-icons/fa'

class SiteSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  performSearch = value => {
    console.log(value)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <button className="site-search-btn" onClick={this.handleClick}>
        {this.state.isToggleOn ? (
          <FaSearch className="anticon" />
        ) : (
          <FaTimes className="anticon" />
        )}
      </button>
    )
  }
}

export default SiteSearch
