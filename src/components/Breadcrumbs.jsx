import React from 'react'
import { Link } from 'gatsby'
import { Breadcrumb } from 'antd'

const Breadcrumbs = () => (
  <nav id="site-breadcrumbs">
    <Breadcrumb id="site-breadcrumbs">
      <Breadcrumb.Item>
        <Link to="/">
          <span>Home</span>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Page</Breadcrumb.Item>
    </Breadcrumb>
  </nav>
)

export default Breadcrumbs
