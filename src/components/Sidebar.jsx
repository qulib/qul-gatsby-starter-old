import React from 'react'
import { Link } from 'gatsby'

import LinkSymbol from '../images/link-symbol.svg'
import AskUsSymbol from '../images/ask-us-symbol.svg'

const Sidebar = () => (
  <aside id="site-sidebar">
    <img
      src={LinkSymbol}
      className="link-symbol"
      alt="link symbol"
      width="100"
      height="100"
    />
    <div className="sidebar-block">
      <h2>Ask Us</h2>
      <p>
        For help locating resources, using the library, or to request a research
        consultation, try our Ask Us service.
      </p>
      <Link to="/page-2/" className="ask-us-link">
        <img src={AskUsSymbol} alt="Ask Us" width="100" height="100" />
      </Link>
    </div>
    <div className="sidebar-block">
      <h2>Block Title</h2>
      <p>sidebar content goes here</p>
    </div>
    <div className="sidebar-block">
      <h2>Button Block</h2>
      <p>A block with a button</p>
    </div>
  </aside>
)

export default Sidebar
