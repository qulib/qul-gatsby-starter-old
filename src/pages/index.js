import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class Home extends React.Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <h2>There are {data.allMarkdownRemark.totalCount} posts</h2>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>{node.frontmatter.title}</li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default Home

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
          excerpt
        }
      }
    }
  }
`
