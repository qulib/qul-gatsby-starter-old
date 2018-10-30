import React from 'react'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.jsx'
import QULButton from '../components/material-ui/QULButton.jsx'

export default ({ data }) => {
  return (
    <Layout title="Material UI Test">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <a href=""></a>
      <p>I am <em>normal</em> <strong>paragraph text</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac leo non purus rutrum mollis. Ut ultrices finibus massa vel feugiat. Sed dignissim imperdiet nunc sit amet rhoncus. <a href="/">Vivamus quis enim</a> quis velit <strong><em>normal</em></strong> luctus tincidunt vel consectetur sem. Cras laoreet malesuada lectus, sed vehicula neque luctus ac. Fusce eget nisl eros.</p>
      <ul>
        <li>An</li>
        <li>Unordered</li>
        <li>List</li>
      </ul>
      <ol>
        <li>An</li>
        <li>Ordered</li>
        <li>List</li>
      </ol>
      <blockquote><p>I am a very smart quote about website content - Very Smart Person</p></blockquote>
    </Layout>
  )
}
