import React from 'react'
import Helmet from 'react-helmet'
import 'typeface-open-sans'
import '../styles/style.scss'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default ({ children }) => (
  <div className="site">
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>QUL Gatsby Start</title>
    </Helmet>
    <Header />
    <main id="site-main">{children}</main>
    <Footer />
  </div>
)
