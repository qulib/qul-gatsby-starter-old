const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// create nodes from markdown pages
exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    // const slug = createFilePath({ node, getNode, basePath: `pages` })
    // createNodeField({
    //   node,
    //   name: `slug`,
    //   value: slug,
    // })
  }
}
