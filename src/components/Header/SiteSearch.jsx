import React from 'react'
import { Input } from 'antd'
import { FaSearch, FaTimes } from 'react-icons/fa'

const Search = Input.Search

class SiteSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchIsActive: false,
    }

    this.textInput = React.createRef()
    this.handleClick = this.handleClick.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  handleClick() {
    if (this.state.searchIsActive) {
      console.log('yep')
    }
    this.textInput.current.focus()
  }

  onFocus() {
    this.setState({ searchIsActive: true })
  }

  onBlur() {
    this.setState({ searchIsActive: false })
  }

  performSearch = value => {
    console.log(value)
  }

  render() {
    return (
      <>
        <Search
          placeholder="Search our site"
          ref={this.textInput}
          onSearch={this.performSearch}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          className={this.state.searchIsActive ? 'active' : null}
          // enterButton="Go"
        />
        <button className="site-search-btn" onClick={this.handleClick}>
          {this.state.searchIsActive ? (
            <FaTimes className="anticon" />
          ) : (
            <FaSearch className="anticon" />
          )}
        </button>
      </>
    )
  }
}

export default SiteSearch
