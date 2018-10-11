import React from 'react'
import Helmet from 'react-helmet'
import 'typeface-open-sans'
import '../styles/style.scss'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) => (
  <div>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>QUL Gatsby Start</title>
    </Helmet>
    <Header />
    <div id="site-main">{children}</div>
    <Footer />
  </div>
)
