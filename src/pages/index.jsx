import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout.jsx'

export default ({ data }) => {
  return (
    <Layout title="Home">
      <h1>Home</h1>
      <p>This is the home page.</p>
      <h2>JSX pages</h2>
      <ul>
        <li><Link to="/html-test">HTML Test</Link></li>
        <li><Link to="/material-ui-test">Material UI Test</Link></li>
      </ul>
    </Layout>
  )
}