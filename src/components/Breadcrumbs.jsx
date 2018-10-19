import React from 'react'
import { Link } from 'gatsby'

const Breadcrumbs = () => (
  <nav id="site-breadcrumbs" class="container">
    <ol>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ol>
  </nav>
)

export default Breadcrumbs
