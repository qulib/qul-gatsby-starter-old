import React from 'react'
import { Link } from 'gatsby'
import qulLogo from '../images/qul-logo.svg'
import Nav from './Nav.jsx'

const Header = () => (
  <header id="site-header">
    <span className="site-logo">
      <Link to="/">
        <img src={qulLogo} width="500" alt="Queen's University Library" />
      </Link>
    </span>
    <Nav />
  </header>
)

export default Header
