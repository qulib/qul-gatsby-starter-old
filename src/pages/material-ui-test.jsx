import React from 'react'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.jsx'
import QULButton from '../components/material-ui/QULButton.jsx'
import QULCard from '../components/material-ui/QULCard.jsx'

export default ({ data }) => {
  return (
    <Layout title="Material UI Test">
      <h1>Material UI Test</h1>
      <p>A page for testing out Material UI components.</p>
      <h2>Buttons</h2>
      <QULButton color="primary">Primary</QULButton>
      <QULButton color="secondary">Secondary</QULButton>
      <p />
      <QULButton>default</QULButton>
      <QULButton variant="text">text</QULButton>
      <QULButton variant="outlined">outlined</QULButton>
      <QULButton variant="contained">contained</QULButton>
      <h2>Cards</h2>
      <QULCard title="Card 1">I'm card one.</QULCard>
      <QULCard title="Card 2">I'm card two.</QULCard>
    </Layout>
  )
}
