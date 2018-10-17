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
            <span>Site Search</span>
          </Link>
        </li>
      </ul>
    </nav>

    <nav id="site-nav" aria-label="Primary Navigation">
      <ul>
        <li>
          <section className="dropdown-container">
            <button>Search</button>
            <section className="dropdown">
              <div className="column">
                <span>Search Tools</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Types of Information</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Subjects &amp; Courses</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
            </section>
          </section>
        </li>
        <li>
          <section className="dropdown-container">
            <button>Help &amp; Services</button>
            <section className="dropdown">
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
            </section>
          </section>
        </li>
        <li>
          <section className="dropdown-container">
            <button>Locations &amp; Hours</button>
            <section className="dropdown">
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
            </section>
          </section>
        </li>
        <li>
          <section className="dropdown-container">
            <button>About Us</button>
            <section className="dropdown">
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
              <div className="column">
                <span>Col</span>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
                <Link to="/">link</Link>
              </div>
            </section>
          </section>
        </li>
      </ul>
    </nav>
  </div>
)

export default Nav
