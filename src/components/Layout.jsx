import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import 'typeface-open-sans'
import '../styles/style.scss'
import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'
import Main from './Main.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'

export default ({ children }) => (
  <Fragment className="site">
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>QUL Gatsby Start</title>
    </Helmet>
    <Header />
    <Breadcrumbs />
    <div id="site-content" className="container">
      <Main>{children}</Main>
      <Sidebar />
    </div>
    <Footer />
  </Fragment>
)
