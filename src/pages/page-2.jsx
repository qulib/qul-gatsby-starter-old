import React from 'react'
import { Link } from 'gatsby'
import { Button, DatePicker } from 'antd'

import Layout from '../components/Layout.jsx'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 </p>
    <p>
      <Button type="primary">
        <Link to="/">Go back to the homepage</Link>
      </Button>
    </p>

    <h2>DatePicker</h2>
    <DatePicker />
  </Layout>
)

export default SecondPage
