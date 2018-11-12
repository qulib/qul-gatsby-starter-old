import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'

import Layout from '../components/Layout.jsx'
// import Image from '../components/Image.jsx'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button type="primary">
      <Link to="/page-2/">Primary Button</Link>
    </Button>
    <Button>
      <Link to="/">Default Button</Link>
    </Button>
  </Layout>
)

export default IndexPage
