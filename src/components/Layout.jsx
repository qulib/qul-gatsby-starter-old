import React from 'react'
import Helmet from 'react-helmet'
import 'typeface-open-sans'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import '../assets/styles/style.scss'

import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'
import Main from './Main.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#002f5e' },
    secondary: { main: '#b81237' },
  },
  typography: {
    useNextVariants: true,
  },
})

class Layout extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Helmet
          title={this.props.title}
          defaultTitle={this.props.title}
          titleTemplate="%s | QUL Gatsby Starter"
        >
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <title>{this.props.title}</title>
        </Helmet>
        <Header />
        <Breadcrumbs />
        <div id="site-content" className="container">
          <Main>{this.props.children}</Main>
          <Sidebar />
        </div>
        <Footer />
      </MuiThemeProvider>
    )
  }
}

export default Layout
