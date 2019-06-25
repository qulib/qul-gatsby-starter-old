import React from 'react'
import { Link } from 'gatsby'

// import UtilMenu from './UtilMenu.jsx'
// // import SiteSearch from './SiteSearch.jsx'
// // import MainMenu from './MainMenu.jsx'

import qulLogo from '../images/qul-logo-middle.svg'

class Header extends React.Component {
  render() {
    return (
      <header id="site-header">
        <div className="container">
          <Link to="/" id="site-logo">
            <img src={qulLogo} width="500" alt="Queen's University Library" />
          </Link>

        </div>
      </header>
    )
  }
}

export default Header
