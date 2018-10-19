import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.jsx'

export default ({ data }) => {
  return (
    <Layout>
      <h1>Home</h1>
      <h2>Markdown pages</h2>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
      <h2>JSX pages</h2>
      <ul>
        <li><Link to="/accordian-test">Accordian Test</Link></li>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
