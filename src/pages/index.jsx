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
        <li><Link to="/uikit-test">UIkit Test</Link></li>
      </ul>
    </Layout>
  )
}