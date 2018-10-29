import React from 'react'
import { Link } from 'gatsby'
import Search from './Search.jsx'
import Nav from './Nav.jsx'
import qulLogo from '../assets/images/qul-logo.svg'

const Header = () => (
  <header id="site-header">
    <div className="container">
      <Search />
      <span id="site-logo">
        <Link to="/">
          <img src={qulLogo} width="450" alt="Queen's University Library" />
        </Link>
      </span>
      <Nav />
    </div>
  </header>
)

export default Header
