import React from 'react'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.jsx'
import styled from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const theme = createMuiTheme({
  palette: {
    primary: { main: '#002f5e' },
    secondary: { main: '#b81237' },
  },
  typography: {
    useNextVariants: true,
  },
})

const StyledButton = styled(Button)`
  && {
    border-radius: 0;
    border: 0;
    margin-right: 1rem;
    font-family: 'Open Sans', sans-serif;
    text-transform: capitalize;
  }
`

export default ({ data }) => {
  return (
    <Layout title="UI Test">
      <h1>UI Test</h1>
      <p>A page for testing out UI components.</p>
      <MuiThemeProvider theme={theme}>
        <StyledButton variant="contained" color="primary">
          Primary
        </StyledButton>
        <StyledButton variant="contained" color="secondary">
          Secondary
        </StyledButton>
        <StyledButton variant="contained">Default</StyledButton>
      </MuiThemeProvider>
    </Layout>
  )
}
