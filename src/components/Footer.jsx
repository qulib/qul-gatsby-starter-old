import React from 'react'
import { Link } from 'gatsby'
import queensLogo from '../assets/images/qu-logo.svg'

const date = new Date()

const Footer = () => (
  <footer id="site-footer" className="container">
    <div className="colophon">
      <p>
        © Copyright {date.getFullYear()}{' '}
        <Link to="/">Queen's University Library</Link>
      </p>
      <p>
        Queen's University Library is committed to an inclusive library
        community with accessible goods, services and facilities that respect
        the dignity and independence of persons with disabilities.
      </p>
      <p>
        Queen's University is situated on traditional Anishinaabe and
        Haudenosaunee Territory.
      </p>
    </div>

    <div className="queens-logo">
      <a href="https://queensu.ca">
        <img src={queensLogo} width="200" alt="Queen's University" />
      </a>
    </div>
  </footer>
)

export default Footer
