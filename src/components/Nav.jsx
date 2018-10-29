import React from 'react'
import { Link } from 'gatsby'
import { FaKey } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'

const Nav = () => (
  <div id="nav-block">
    <nav id="util-nav" aria-label="Utility Navigation">
      <ul>
        <li>
          <Link to="/">
            <FaKey />
            <span>Off-Campus Access</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaComments />
            <span>Ask Us</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaUser />
            <span>My Account</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaSearch />
          </Link>
        </li>
      </ul>
    </nav>

    <nav id="site-nav" aria-label="Primary Navigation">
      here
    </nav>
  </div>
)

export default Nav
