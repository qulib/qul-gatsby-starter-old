import React from 'react'
import { Link } from 'gatsby'

// import FooterMenu from './FooterMenu.jsx'

import quLogo from '../../images/qu-logo.svg'

const date = new Date()

class Footer extends React.Component {
  render() {
    return (
      <footer id="site-footer">
        <div className="colophon">
          <p>
            © Copyright {date.getFullYear()}
            <Link to="/">Queen's University Library</Link>
          </p>
          <p>
            Queen's University Library is committed to an inclusive library
            community with accessible goods, services and facilities that
            respect the dignity and independence of persons with disabilities.
          </p>
          <p>
            Queen's University is situated on traditional Anishinaabe and
            Haudenosaunee Territory.
          </p>
        </div>
        <div className="queens-logo">
          <a href="https://queensu.ca">
            <img src={quLogo} width="200" alt="Queen's University" />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
