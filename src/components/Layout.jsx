import React from 'react'
import Helmet from 'react-helmet'
import 'typeface-open-sans'
import '../assets/styles/style.scss'

import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'
import Main from './Main.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'

class Layout extends React.Component {

  render() {

    return (
      <>
        <Helmet
          title={this.props.title}
          defaultTitle={this.props.title}
          titleTemplate="%s | QUL Gatsby Starter"
        >
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
        </Helmet>
        <Header />
        <Breadcrumbs />
        <div id="site-content" className="container">
          <Main>{this.props.children}</Main>
          <Sidebar />
        </div>
        <Footer />
      </>
    )
  }
}

export default Layout
