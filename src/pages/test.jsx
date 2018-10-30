import React from 'react'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.jsx'
import QULButton from '../components/material-ui/QULButton.jsx'

export default ({ data }) => {
  return (
    <Layout title="UI Test">
      <h1>UI Test</h1>
      <p>A page for testing out UI components.</p>
      <QULButton color="primary">Primary</QULButton>
      <QULButton color="secondary">Secondary</QULButton>
      <QULButton>Default</QULButton>
    </Layout>
  )
}
