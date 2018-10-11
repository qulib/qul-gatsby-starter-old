import React from 'react'
import { Link } from 'gatsby'
import queensLogo from '../images/qu-logo.svg'

const date = new Date()

const Footer = () => (
  <footer id="site-footer">
    <p className="colophon">
      © Copyright {date.getFullYear() + ' '}
      <Link to="/" title="Home">
        Queen's University Library
      </Link>
    </p>
    <p>
      Queen's University Library is committed to an inclusive library community
      with accessible goods, services and facilities that respect the dignity
      and independence of persons with disabilities.
    </p>
    <p>
      Queen's University is situated on traditional Anishinaabe and
      Haudenosaunee Territory
    </p>
    <p className="queens-logo">
      <img src={queensLogo} width="200" alt="Queen's University" />
    </p>
  </footer>
)

export default Footer
