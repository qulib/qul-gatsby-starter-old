import React from 'react'
// import { Link, graphql } from 'gatsby'
// import posed from 'react-pose'
import Layout from '../../components/Layout.jsx'
import Accordian from '../../components/Accordian.jsx'

export default ({ data }) => {
  return (
    <Layout>
      <h1>Thing One</h1>
      <Accordian title="I'm an accordian title">
        Here is the accordian content. This is a more content.
      </Accordian>
    </Layout>
  )
}
