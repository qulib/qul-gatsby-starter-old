import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'typeface-open-sans'
import './style.scss'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'
import Main from './Main.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'

const TemplateWrapper = ({
  children,
  location,
  title,
  description,
  keywords,
  previewImageUrl = null,
  structuredDataJson = null,
}) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site: site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <MainLayout
        data={data}
        children={children}
        location={location}
        title={title}
      />
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

class MainLayout extends React.Component {
  componentDidMount() {
    try {
      this.UIkit = require('uikit/dist/js/uikit')
      this.Icons = require('uikit/dist/js/uikit-icons')
      this.UIkit.use(this.Icons)
    } catch (e) {
      console.error(e)
    }
  }
  render() {

    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

MainLayout.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TemplateWrapper
