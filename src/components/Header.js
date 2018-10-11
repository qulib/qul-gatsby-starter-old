import React from 'react'
import { Link } from 'gatsby'
import qulLogo from '../images/qul-logo.svg'

const Header = () => (
  <header id="site-header">
    <Link to="/" title="Home">
      <img src={qulLogo} width="500" alt="Queen's University Library"/>
    </Link>
  </header>
)

export default Header
