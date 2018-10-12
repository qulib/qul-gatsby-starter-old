import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav id="site-nav" aria-label="Primary Navigation">
    <ul>
      <li>
        <Link to="/">Search</Link>
      </li>
      <li>
        <Link to="/">Help &amp; Services</Link>
      </li>
      <li>
        <Link to="/">Locations &amp; Hours</Link>
      </li>
      <li>
        <Link to="/">About Us</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
